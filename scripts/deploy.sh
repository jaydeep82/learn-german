#!/usr/bin/env bash
set -euo pipefail

BUCKET="deutsch30"
DISTRIBUTION_ID="E18WPI0K03W1EC"
DOMAIN="deutsch30.theincubatelab.io"
REGION="us-east-1"

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

aws sts get-caller-identity >/dev/null

echo "==> Building"
npm run build

echo "==> Syncing hashed assets (immutable, 1y)"
aws s3 sync dist/ "s3://${BUCKET}/" \
  --region "$REGION" \
  --delete \
  --exclude "index.html" \
  --exclude "sw.js" \
  --exclude "registerSW.js" \
  --exclude "manifest.webmanifest" \
  --cache-control "public, max-age=31536000, immutable"

echo "==> Uploading index.html (no-cache)"
aws s3 cp dist/index.html "s3://${BUCKET}/index.html" \
  --region "$REGION" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html; charset=utf-8"

# The service worker + manifest must never be long-cached: a stale sw.js at the
# edge would pin every user to an old precache of the whole app.
echo "==> Uploading service worker + manifest (no-cache)"
for f in sw.js registerSW.js manifest.webmanifest; do
  if [ -f "dist/$f" ]; then
    aws s3 cp "dist/$f" "s3://${BUCKET}/$f" \
      --region "$REGION" \
      --cache-control "no-cache, no-store, must-revalidate"
  fi
done

echo "==> Invalidating CloudFront (html + service worker)"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/index.html" "/sw.js" "/registerSW.js" "/manifest.webmanifest" \
  --query "Invalidation.Id" --output text)
echo "    invalidation: ${INVALIDATION_ID}"

echo
echo "Deployed: https://${DOMAIN}/"

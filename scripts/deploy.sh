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
  --cache-control "public, max-age=31536000, immutable"

echo "==> Uploading index.html (no-cache)"
aws s3 cp dist/index.html "s3://${BUCKET}/index.html" \
  --region "$REGION" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --content-type "text/html; charset=utf-8"

echo "==> Invalidating CloudFront (/index.html)"
INVALIDATION_ID=$(aws cloudfront create-invalidation \
  --distribution-id "$DISTRIBUTION_ID" \
  --paths "/index.html" \
  --query "Invalidation.Id" --output text)
echo "    invalidation: ${INVALIDATION_ID}"

echo
echo "Deployed: https://${DOMAIN}/"

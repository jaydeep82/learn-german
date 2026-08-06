import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AppProvider } from './store/AppContext.jsx';
import './index.css';

/**
 * Pick up a new deploy on the FIRST visit, not the second.
 *
 * The service worker precaches the whole app, so a returning visitor is served
 * the cached build while the new one installs in the background. It activates
 * and claims the page (skipWaiting + clientsClaim), but the already-rendered
 * page keeps running the old chunks — so every deploy used to be invisible
 * until a second reload. Here we reload once when the new worker takes over.
 *
 * Two guards: `hadController` skips the very first install (a fresh visitor is
 * already on the newest build — reloading them would be pointless churn), and
 * the 15-second window keeps us from yanking the page out from under someone
 * who is mid-exercise on a long-open tab. They still get the update on their
 * next navigation, because the new worker is already serving it.
 */
if ('serviceWorker' in navigator) {
  const hadController = !!navigator.serviceWorker.controller;
  const openedAt = Date.now();
  let reloading = false;

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!hadController || reloading || Date.now() - openedAt > 15_000) return;
    reloading = true;
    window.location.reload();
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);

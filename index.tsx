
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';

// Secure Service Worker Registration
// Prevents registration if the origin mismatch occurs (common in sandboxed environments like ai.studio)
if ('serviceWorker' in navigator && window.location.protocol === 'https:' && !window.location.hostname.includes('usercontent.goog')) {
  window.addEventListener('load', () => {
    // Use an absolute path relative to the domain root for sw.js
    navigator.serviceWorker.register('/sw.js').catch(err => {
      console.info('PWA: Service Worker registration bypassed or failed in this specific environment.');
    });
  });
}


const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
      <Analytics />
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Analytics } from '@vercel/analytics/react';

// Registro Seguro do Service Worker para suporte PWA/Offline
if ('serviceWorker' in navigator && window.location.protocol === 'https:' && !window.location.hostname.includes('usercontent.goog')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(reg => {
      console.info('PWA: Service Worker ativo para suporte offline.');
    }).catch(err => {
      console.debug('PWA: Registro ignorado neste ambiente sandbox.');
    });
  });
}

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      {/* O componente Analytics deve ser montado no topo para capturar mudanças de rota em SPAs */}
      <App />
      <Analytics />
    </React.StrictMode>
  );
} else {
  console.error("Critical: Root element not found");
}

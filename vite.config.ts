import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    // Utilizamos o 'esbuild' que é o padrão do Vite e não requer instalação extra
    minify: 'esbuild',
  },
  // Mantemos a funcionalidade de remover consoles e debuggers usando as configurações do esbuild
  esbuild: {
    drop: ['console', 'debugger'],
  },
  server: {
    port: 3000,
    host: true
  }
});
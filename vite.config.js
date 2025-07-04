// vite.config.js
import { defineConfig } from 'vite';
import { execSync } from 'child_process';

export default defineConfig({plugins: [
    {
      name: 'pre-build-fluid-scale',
      buildStart() {
        execSync('npx fluid-build', { stdio: 'inherit' });
      },
    },
  ],
  root: 'vite',
  publicDir: '../public',
  build: {
    outDir: '../dist',
    emptyOutDir: true, 
  },
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
});

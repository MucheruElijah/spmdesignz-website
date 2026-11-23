import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function adminRewritePlugin() {
  const rewriteMiddleware = (req, _res, next) => {
    if (req.url === '/admin' || req.url === '/admin/') {
      req.url = '/admin/index.html';
    }
    next();
  };

  return {
    name: 'admin-rewrite',
    configureServer(server) {
      server.middlewares.use(rewriteMiddleware);
    },
    configurePreviewServer(server) {
      server.middlewares.use(rewriteMiddleware);
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), adminRewritePlugin()],
});

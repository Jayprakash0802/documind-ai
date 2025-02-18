import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    sourcemap: true, 
  },
  server: {
    host: "0.0.0.0",
    port: 5173, 
    strictPort: true, 
    hmr: {
      clientPort: 5173, 
    },
    allowedHosts: [
      "all",
      "0c07-14-140-126-182.ngrok-free.app"
    ],
    proxy: {
      '/api': {
        target: process.env.VITE_API_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
})

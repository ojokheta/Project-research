import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['three', 'vanta/dist/vanta.fog.min'],
  },
  server: {
    port: 5173,
    host: true,
  },
})

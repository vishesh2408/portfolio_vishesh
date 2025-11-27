import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cwd } from 'process'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // load .env files and merge into process.env
  const env = loadEnv(mode, cwd(), '')
  const _backend = env.BACKEND_URL || env.VITE_BACKEND_URL || 'http://localhost:3005'

  return {
    plugins: [
      react(),
      tailwindcss(),
    ]
  }
});

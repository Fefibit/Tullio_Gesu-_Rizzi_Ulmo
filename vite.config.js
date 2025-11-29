import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Tullio_Gesu-_Rizzi_Ulmo/', // <--- CAMBIA QUESTO SE IL NOME REPO È DIVERSO
})
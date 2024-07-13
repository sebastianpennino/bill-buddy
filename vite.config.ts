import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://sebastianpennino.github.io/bill-buddy/",
  plugins: [react()],
})

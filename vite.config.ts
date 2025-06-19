import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
  ],
  base: '/MBE1271/', // 👈 Ruta base según la URL del servidor

  build:{
    outDir: '_UBsite'
  }
})


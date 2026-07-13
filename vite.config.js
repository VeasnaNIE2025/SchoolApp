// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   server: {
//     historyApiFallback: true, // ← Add this line
//   },
//   build: {
//     chunkSizeWarningLimit: 1000, // kB — លើកកម្រិត warning ពី 500 ទៅ 1000
//     rollupOptions: {
//       output: {
//         manualChunks: {
//           'pdf-export': ['jspdf', 'html2canvas'], // ញែក libraries ធំៗទៅ chunk ដាច់ដោយឡែក
//         },
//       },
//     },
//   },
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
  ],
  server: {
    historyApiFallback: true, // ← Add this line
  },
  build: {
    chunkSizeWarningLimit: 1000, // kB — លើកកម្រិត warning ពី 500 ទៅ 1000
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('jspdf') || id.includes('html2canvas')) {
            return 'pdf-export'
          }
        },
      },
    },
  },
})
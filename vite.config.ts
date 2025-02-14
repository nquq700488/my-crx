import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import vue from '@vitejs/plugin-vue'
import manifest from './manifest.ts'
import { name } from './package.json'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const production = mode === 'production'
  const isDev = mode === 'dev'
  console.log('vite config running in', mode)

  return {
    server: {
      host: '0.0.0.0',
      port: 3000,
      hmr: true,
    },
    build: {
      cssCodeSplit: true,
      emptyOutDir: true,
      outDir: `${name}-${mode}`,
      write: !isDev,
      rollupOptions: {
        output: {
          assetsFileNames: 'assets/[name]-[hash].[ext]',
          // chunkFileNames: 'js/[name]-[hash].js',
        },
      },
    },
    plugins: [crx({ manifest }), vue()],
  }
})

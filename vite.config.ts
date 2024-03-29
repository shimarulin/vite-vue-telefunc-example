import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { telefunc } from 'telefunc/vite'

const port = 3000

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // @ts-expect-error
    telefunc({
      disableNamingConvention: true,
    }),
    vue(),
    {
      name: 'server:entry',
      config(_, env) {
        if (!env.isSsrBuild) return
        return {
          build: {
            rollupOptions: {
              input: {
                'entry-server': './src/entry-server.ts'
              }
            }
          }
        }
      }
    }
  ],
  build: { target: 'esnext' },
  server: { port, host: true },
  preview: { port },
})

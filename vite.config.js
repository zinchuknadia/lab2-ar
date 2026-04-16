// vite.config.js
import { defineConfig } from 'vite'
import basicSsl from '@vitejs/plugin-basic-ssl'

export default defineConfig({
  base: '/lab2-ar/',

  plugins: [
    basicSsl({
      /** name of certification */
      name: 'test',
      /** custom trust domains */
      domains: ['*.custom.com'],
      /** optional, days before certificate expires */
      ttlDays: 30,
      /** custom certification directory */
      certDir: '/Users/.../.devServer/cert',
    }),
  ],
})
import { defineNuxtConfig } from 'nuxt'
import path from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  ssr: true,
  alias: {
    '@type': path.resolve(__dirname, 'type.d'),
    '@store': path.resolve(__dirname, 'store'),
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  sourcemap: {
    server: true,
    client: true,
  },
  modules: ["@sentry/nuxt/module"],
  sentry: {
    sourceMapsUploadOptions: {
      org: "steven-eubank",
      project: "sporthub",
      authToken: process.env.VITE_SENTRY_AUTH_TOKEN,
    },
  },
})

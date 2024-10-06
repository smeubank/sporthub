import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: process.env.PUBLIC_SENTRY_DSN || "https://333809f863761016ab4d8a1b3a3469b3@o673219.ingest.us.sentry.io/4508077231177728", // Ensure this environment variable is set
  integrations: [Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

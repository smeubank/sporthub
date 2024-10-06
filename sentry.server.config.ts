import dotenv from "dotenv";
import * as Sentry from "@sentry/nuxt";

dotenv.config();

Sentry.init({
  dsn: process.env.PUBLIC_SENTRY_DSN || "https://333809f863761016ab4d8a1b3a3469b3@o673219.ingest.us.sentry.io/4508077231177728", // Ensure this environment variable is set
  tracesSampleRate: 1.0,
});

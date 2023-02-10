import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: 'https://fe629a0204ff4a8c9f107935f0299ed3@o312013.ingest.sentry.io/4504657869996032',
  tracesSampleRate: 1.0,
})

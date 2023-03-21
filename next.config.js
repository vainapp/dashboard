/** @type {import('next').NextConfig} */
const { withSentryConfig } = require('@sentry/nextjs')

const moduleExports = {
  env: {
    API_URL: process.env.API_URL,
  },
  reactStrictMode: true,
  sentry: {
    hideSourceMaps: true,
  },
  pageExtensions: ['page.tsx'],
  plugins: [require('@tailwindcss/forms')],
}

const sentryWebpackPluginOptions = {
  silent: true,
}

module.exports = withSentryConfig(moduleExports, sentryWebpackPluginOptions)

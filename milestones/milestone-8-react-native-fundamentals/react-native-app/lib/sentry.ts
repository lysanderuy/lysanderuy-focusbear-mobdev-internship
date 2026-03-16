import * as Sentry from '@sentry/react-native';

const sentryDsn = process.env.EXPO_PUBLIC_SENTRY_DSN;

export const isSentryEnabled = Boolean(sentryDsn);

Sentry.init({
  dsn: sentryDsn,
  enabled: isSentryEnabled,
  debug: __DEV__,
  tracesSampleRate: 1,
  sendDefaultPii: false,
});

export function captureSandboxError() {
  const error = new Error('Sentry sandbox test error from milestone-8 React Native app');

  Sentry.addBreadcrumb({
    category: 'sandbox',
    message: 'User triggered a Sentry test event from the sandbox screen.',
    level: 'info',
  });
  Sentry.captureException(error);

  return error.message;
}

export { Sentry };

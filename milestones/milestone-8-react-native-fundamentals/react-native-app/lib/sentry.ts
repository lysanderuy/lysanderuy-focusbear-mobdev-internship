import * as Sentry from '@sentry/react-native';
import { env } from '@/lib/env';

const sentryDsn = env.sentryDsn;

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

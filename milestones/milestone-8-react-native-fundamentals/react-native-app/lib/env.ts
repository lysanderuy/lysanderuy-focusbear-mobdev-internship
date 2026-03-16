const sentryDsn = process.env.EXPO_PUBLIC_SENTRY_DSN?.trim();

export const env = {
  sentryDsn: sentryDsn || undefined,
};

import * as Linking from 'expo-linking';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { AppState, type AppStateStatus, StyleSheet, Text, View } from 'react-native';

import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

type DeepLinkEvent = {
  appState: AppStateStatus;
  kind: 'initial' | 'runtime';
  timestamp: string;
  url: string;
};

export default function LibraryDeepLinkScreen() {
  const { id } = useLocalSearchParams<{ id?: string | string[] }>();
  const [initialUrl, setInitialUrl] = useState<string | null>(null);
  const [events, setEvents] = useState<DeepLinkEvent[]>([]);
  const appStateRef = useRef<AppStateStatus>(AppState.currentState);

  const resolvedId = useMemo(() => {
    if (Array.isArray(id)) {
      return id[0] ?? 'unknown';
    }
    return id ?? 'unknown';
  }, [id]);

  useEffect(() => {
    const loadInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);

      if (url) {
        setEvents((previousEvents) => [
          {
            appState: appStateRef.current,
            kind: 'initial',
            timestamp: new Date().toISOString(),
            url,
          },
          ...previousEvents,
        ]);
      }
    };

    loadInitialUrl().catch(() => {
      setInitialUrl(null);
    });

    const appStateSubscription = AppState.addEventListener('change', (nextState) => {
      appStateRef.current = nextState;
    });

    const urlSubscription = Linking.addEventListener('url', ({ url }) => {
      setEvents((previousEvents) => [
        {
          appState: appStateRef.current,
          kind: 'runtime',
          timestamp: new Date().toISOString(),
          url,
        },
        ...previousEvents,
      ]);
    });

    return () => {
      appStateSubscription.remove();
      urlSubscription.remove();
    };
  }, []);

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <View style={styles.content}>
        <Text style={styles.kicker}>Deep Linking Demo</Text>
        <Text style={styles.title}>Library Item</Text>
        <Text style={styles.value}>ID: {resolvedId}</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Initial URL (closed app)</Text>
          <Text style={styles.urlText}>{initialUrl ?? 'No initial URL detected'}</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.label}>Runtime URL events (open/background)</Text>
          {events.length === 0 ? (
            <Text style={styles.urlText}>No URL events yet</Text>
          ) : (
            events.slice(0, 4).map((event, index) => (
              <Text key={`${event.timestamp}-${index}`} style={styles.urlText}>
                [{event.kind}] [{event.appState}] {event.url}
              </Text>
            ))
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BrandColors.bgBase,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
    gap: 12,
  },
  kicker: {
    color: BrandColors.textMuted,
    fontSize: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    fontFamily: BrandFonts.mono,
  },
  title: {
    color: BrandColors.textMain,
    fontSize: 34,
    fontFamily: BrandFonts.hero,
    fontWeight: '700',
  },
  value: {
    color: BrandColors.accent,
    fontSize: 18,
    fontFamily: BrandFonts.mono,
  },
  card: {
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
    backgroundColor: 'rgba(39,49,29,0.86)',
    padding: 14,
    gap: 8,
  },
  label: {
    color: BrandColors.textMain,
    fontSize: 13,
    fontFamily: BrandFonts.mono,
  },
  urlText: {
    color: BrandColors.textSoft,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: BrandFonts.body,
  },
});

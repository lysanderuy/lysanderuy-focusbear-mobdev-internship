import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

import { BrandColors, BrandFonts } from '@/constants/brand-theme';

type AppHeaderProps = {
  title: string;
  subtitle?: string;
  statusLabel?: string;
  showStatus?: boolean;
};

export function AppHeader({
  title,
  subtitle,
  statusLabel = 'Available for work',
  showStatus = false,
}: AppHeaderProps) {
  const pulse = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    const loop = Animated.loop(
      Animated.sequence([
        Animated.timing(pulse, { toValue: 0.25, duration: 900, useNativeDriver: true }),
        Animated.timing(pulse, { toValue: 1, duration: 900, useNativeDriver: true }),
      ])
    );

    loop.start();
    return () => loop.stop();
  }, [pulse]);

  return (
    <View style={styles.header}>
      <View>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        <Text style={styles.title}>{title}</Text>
      </View>
      {showStatus ? (
        <View style={styles.statusWrap}>
          <Animated.View style={[styles.statusDot, { opacity: pulse }]} />
          <Text style={styles.statusText}>{statusLabel}</Text>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 6,
    paddingBottom: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(74,90,57,0.45)',
  },
  subtitle: {
    color: BrandColors.textMuted,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    fontFamily: BrandFonts.mono,
  },
  title: {
    color: BrandColors.textMain,
    fontSize: 15,
    fontFamily: BrandFonts.mono,
    marginTop: subtitle ? 2 : 0,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
  },
  statusWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: BrandColors.accent,
  },
  statusText: {
    color: BrandColors.textMuted,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontFamily: BrandFonts.mono,
  },
});

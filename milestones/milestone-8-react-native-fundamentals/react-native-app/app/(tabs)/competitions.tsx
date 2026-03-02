import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function CompetitionsScreen() {
  const { width } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 36 : isCompact ? 16 : 20;
  const cardPadding = isTablet ? 22 : isCompact ? 14 : 16;
  const titleSize = isTablet ? 28 : isCompact ? 19 : 22;
  const bodySize = isTablet ? 16 : isCompact ? 14 : 15;
  const bodyLineHeight = isTablet ? 26 : isCompact ? 22 : 24;

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <AppHeader title="Competitions" subtitle="Portfolio" />
        <View style={[styles.card, { padding: cardPadding }]}>
          <Text style={styles.label}>Planned Section</Text>
          <Text style={[styles.title, { fontSize: titleSize }]}>Competition Timeline</Text>
          <Text style={[styles.body, { fontSize: bodySize, lineHeight: bodyLineHeight }]}>
            Space prepared for your competition history from first year college to present, with
            roles, placements, and highlights.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: BrandColors.bgBase,
  },
  content: {
    paddingVertical: 26,
    gap: 14,
  },
  card: {
    borderRadius: 18,
    backgroundColor: 'rgba(39,49,29,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
    gap: 8,
  },
  label: {
    color: BrandColors.textMuted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    fontFamily: BrandFonts.mono,
  },
  title: {
    color: BrandColors.textMain,
    fontSize: 22,
    fontWeight: '700',
    fontFamily: BrandFonts.hero,
  },
  body: {
    color: BrandColors.textSoft,
    fontSize: 15,
    lineHeight: 24,
    fontFamily: BrandFonts.body,
  },
});

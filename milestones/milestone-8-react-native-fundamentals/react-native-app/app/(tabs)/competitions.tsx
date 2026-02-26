import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function CompetitionsScreen() {
  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader title="Competitions" subtitle="Portfolio" />
        <View style={styles.card}>
          <Text style={styles.label}>Planned Section</Text>
          <Text style={styles.title}>Competition Timeline</Text>
          <Text style={styles.body}>
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
    paddingHorizontal: 20,
    paddingVertical: 26,
    gap: 14,
  },
  card: {
    borderRadius: 18,
    backgroundColor: 'rgba(39,49,29,0.86)',
    padding: 16,
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

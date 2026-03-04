import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function HomeScreen() {
  const { width, height } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 36 : isCompact ? 16 : 20;
  const titleSize = isTablet ? 64 : isCompact ? 38 : 48;
  const titleLineHeight = isTablet ? 68 : isCompact ? 42 : 50;
  const subtitleSize = isTablet ? 18 : isCompact ? 15 : 16;
  const subtitleLineHeight = isTablet ? 28 : isCompact ? 22 : 24;
  const subtitleWidth = isTablet ? 520 : isCompact ? 300 : 330;
  const heroBottomPadding = height < 760 ? 56 : isTablet ? 136 : 104;

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <AppHeader title="Home" subtitle="Portfolio" />

        <View style={[styles.hero, { paddingBottom: heroBottomPadding }]}>
          <Text style={styles.role}>Portfolio</Text>
          <Text style={[styles.title, { fontSize: titleSize, lineHeight: titleLineHeight }]}>
            Lysander Uy
          </Text>
          <Text style={[styles.titleAccent, { fontSize: titleSize, lineHeight: titleLineHeight }]}>
            Developer
          </Text>
          <Text
            style={[
              styles.subtitle,
              { fontSize: subtitleSize, lineHeight: subtitleLineHeight, maxWidth: subtitleWidth },
            ]}>
            Full Stack Developer and Mobile App Developer crafting clean, production-ready digital
            products.
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
    gap: 8,
    minHeight: '100%',
  },
  hero: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 104,
    gap: 4,
  },
  role: {
    color: BrandColors.textSoft,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 2.5,
    fontFamily: BrandFonts.mono,
    marginBottom: 10,
  },
  title: {
    color: BrandColors.textMain,
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '300',
    fontFamily: BrandFonts.hero,
  },
  titleAccent: {
    color: BrandColors.accent,
    fontSize: 48,
    lineHeight: 50,
    fontWeight: '700',
    fontFamily: BrandFonts.hero,
  },
  subtitle: {
    color: BrandColors.textSoft,
    fontFamily: BrandFonts.body,
    marginTop: 18,
  },
});

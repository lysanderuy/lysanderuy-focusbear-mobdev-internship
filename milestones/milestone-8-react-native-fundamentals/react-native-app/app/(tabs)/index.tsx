import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function HomeScreen() {
  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader title="Home" subtitle="Portfolio" />

        <View style={styles.hero}>
          <Text style={styles.role}>Portfolio</Text>
          <Text style={styles.title}>Lysander Uy</Text>
          <Text style={styles.titleAccent}>Developer</Text>
          <Text style={styles.subtitle}>
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
    paddingHorizontal: 20,
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
    fontSize: 16,
    lineHeight: 24,
    fontFamily: BrandFonts.body,
    marginTop: 18,
    maxWidth: 330,
  },
});

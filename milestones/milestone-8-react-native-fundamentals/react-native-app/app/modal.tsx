import { Link } from 'expo-router';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function ModalScreen() {
  return (
    <View style={[styles.screen, { backgroundColor: BrandColors.bgBase }]}>
      <BrandBackground />
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader title="Modal" subtitle="Portfolio" />
        <View style={styles.card}>
          <Text style={styles.title}>Quick Action Space</Text>
          <Text style={[styles.description, { marginTop: 8 }]}>
            Use this modal for short workflows so users can return to the main app quickly.
          </Text>
          <Link href="/" dismissTo style={styles.link}>
            <Text style={styles.linkText}>Go To Home</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    paddingVertical: 26,
    minHeight: '100%',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    backgroundColor: BrandColors.bgPanelStrong,
    borderRadius: 16,
    padding: 22,
    borderWidth: 1,
    borderColor: BrandColors.border,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: BrandColors.textMain,
    textAlign: 'left',
    fontFamily: BrandFonts.hero,
  },
  description: {
    fontSize: 15,
    color: BrandColors.textSoft,
    textAlign: 'left',
    lineHeight: 22,
    maxWidth: 420,
  },
  link: {
    marginTop: 18,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: BrandColors.accent,
    borderRadius: 10,
  },
  linkText: {
    color: BrandColors.bgBase,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: BrandFonts.mono,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

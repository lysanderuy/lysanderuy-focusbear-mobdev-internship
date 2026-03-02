import { Link } from 'expo-router';
import { Button, Card, Text } from '@rneui/themed';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function ModalScreen() {
  const { width, height } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 36 : isCompact ? 16 : 20;
  const cardPadding = isTablet ? 26 : isCompact ? 16 : 22;
  const titleSize = isTablet ? 36 : isCompact ? 24 : 30;
  const bodySize = isTablet ? 16 : isCompact ? 14 : 15;
  const bodyLineHeight = isTablet ? 24 : isCompact ? 21 : 22;
  const descriptionWidth = isTablet ? 520 : isCompact ? 290 : 420;
  const contentVerticalPadding = height < 700 ? 20 : 26;

  return (
    <View style={[styles.screen, { backgroundColor: BrandColors.bgBase }]}>
      <BrandBackground />
      <ScrollView
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: horizontalPadding, paddingVertical: contentVerticalPadding },
        ]}>
        <AppHeader title="Modal" subtitle="Portfolio" />
        <Card containerStyle={[styles.card, { padding: cardPadding }]}>
          <Text h3 h3Style={[styles.title, { fontSize: titleSize }]}>
            Quick Action Space
          </Text>
          <Text
            style={[
              styles.description,
              { fontSize: bodySize, lineHeight: bodyLineHeight, maxWidth: descriptionWidth },
            ]}>
            Use this modal for short workflows so users can return to the main app quickly.
          </Text>
          <Link href="/" dismissTo asChild>
            <Button
              title="Go To Home"
              buttonStyle={styles.button}
              titleStyle={styles.buttonText}
              containerStyle={styles.buttonContainer}
            />
          </Link>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    minHeight: '100%',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    width: '100%',
    maxWidth: 520,
    margin: 0,
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
    marginTop: 8,
    fontSize: 15,
    color: BrandColors.textSoft,
    textAlign: 'left',
    lineHeight: 22,
    maxWidth: 420,
  },
  buttonContainer: {
    marginTop: 18,
    alignSelf: 'flex-start',
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: BrandColors.accent,
    borderRadius: 10,
  },
  buttonText: {
    color: BrandColors.bgBase,
    fontSize: 16,
    fontWeight: '600',
    fontFamily: BrandFonts.mono,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});

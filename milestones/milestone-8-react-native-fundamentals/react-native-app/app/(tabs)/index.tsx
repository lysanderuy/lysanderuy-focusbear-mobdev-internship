import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';
import { useLanguage } from '@/contexts/language-context';

export default function HomeScreen() {
  const { copy, isPersisted, isReady, language, setLanguage, supportedLanguages } = useLanguage();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
  const selectorPadding = isTablet ? 18 : isCompact ? 14 : 16;
  const selectedLanguageLabel =
    supportedLanguages.find((option) => option.code === language)?.label ?? language.toUpperCase();

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <AppHeader title="Home" subtitle={copy.appLabel} />

        <View style={[styles.hero, { paddingBottom: heroBottomPadding }]}>
          <Text style={styles.role}>{copy.appLabel}</Text>
          <Text style={[styles.title, { fontSize: titleSize, lineHeight: titleLineHeight }]}>
            {copy.homeTitle}
          </Text>
          <Text style={[styles.titleAccent, { fontSize: titleSize, lineHeight: titleLineHeight }]}>
            {copy.homeAccent}
          </Text>
          <Text
            style={[
              styles.subtitle,
              { fontSize: subtitleSize, lineHeight: subtitleLineHeight, maxWidth: subtitleWidth },
            ]}>
            {copy.homeSubtitle}
          </Text>
        </View>

        <View style={[styles.languageCard, { padding: selectorPadding }]}>
          <View style={styles.languageHeaderRow}>
            <View style={styles.languageCopy}>
              <Text style={styles.languageLabel}>{copy.pickerLabel}</Text>
              <Text style={styles.languageDescription}>{copy.pickerDescription}</Text>
            </View>

            <View style={styles.dropdownWrap}>
              <Pressable
                onPress={() => setIsDropdownOpen((current) => !current)}
                style={({ pressed }) => [
                  styles.dropdownTrigger,
                  pressed ? styles.languageButtonPressed : null,
                ]}>
                <Text style={styles.dropdownTriggerText}>{selectedLanguageLabel}</Text>
                <Text style={styles.dropdownChevron}>{isDropdownOpen ? '▲' : '▼'}</Text>
              </Pressable>

              {isDropdownOpen ? (
                <View style={styles.dropdownMenu}>
                  {supportedLanguages.map((option) => {
                    const isSelected = option.code === language;

                    return (
                      <Pressable
                        key={option.code}
                        onPress={() => {
                          setIsDropdownOpen(false);
                          void setLanguage(option.code);
                        }}
                        style={({ pressed }) => [
                          styles.dropdownOption,
                          isSelected ? styles.dropdownOptionActive : null,
                          pressed ? styles.languageButtonPressed : null,
                        ]}>
                        <Text
                          style={[
                            styles.dropdownOptionText,
                            isSelected ? styles.dropdownOptionTextActive : null,
                          ]}>
                          {option.label}
                        </Text>
                      </Pressable>
                    );
                  })}
                </View>
              ) : null}
            </View>
          </View>

          <Text style={styles.savedPreference}>
            {isReady
              ? isPersisted
                ? copy.savedPreference
                : 'Preference fallback is active for this session only.'
              : 'Loading saved preference...'}
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
    paddingBottom: 44,
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
  languageCard: {
    borderRadius: 18,
    backgroundColor: 'rgba(39,49,29,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
    gap: 10,
    marginBottom: 24,
  },
  languageHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  languageCopy: {
    flex: 1,
    gap: 4,
    paddingRight: 8,
  },
  languageLabel: {
    color: BrandColors.textMain,
    fontSize: 16,
    fontFamily: BrandFonts.hero,
    fontWeight: '700',
  },
  languageDescription: {
    color: BrandColors.textSoft,
    fontSize: 13,
    lineHeight: 18,
    fontFamily: BrandFonts.body,
  },
  dropdownWrap: {
    minWidth: 132,
    position: 'relative',
  },
  dropdownTrigger: {
    minHeight: 38,
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: BrandColors.border,
    backgroundColor: 'rgba(20,25,15,0.72)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  dropdownTriggerText: {
    color: BrandColors.textMain,
    fontSize: 12,
    fontFamily: BrandFonts.mono,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dropdownChevron: {
    color: BrandColors.accent,
    fontSize: 10,
    fontFamily: BrandFonts.mono,
  },
  dropdownMenu: {
    marginTop: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: BrandColors.border,
    backgroundColor: 'rgba(20,25,15,0.98)',
    overflow: 'hidden',
  },
  dropdownOption: {
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  dropdownOptionActive: {
    backgroundColor: 'rgba(138,154,91,0.18)',
  },
  dropdownOptionText: {
    color: BrandColors.textMain,
    fontSize: 12,
    fontFamily: BrandFonts.mono,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  dropdownOptionTextActive: {
    color: BrandColors.accent,
  },
  languageButtonPressed: {
    opacity: 0.88,
  },
  savedPreference: {
    color: BrandColors.textMuted,
    fontSize: 12,
    fontFamily: BrandFonts.body,
  },
});

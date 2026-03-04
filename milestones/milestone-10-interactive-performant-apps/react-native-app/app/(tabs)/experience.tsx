import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';
import { experienceEntries } from '@/constants/portfolio-data';

export default function ExperienceScreen() {
  const { width } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 36 : isCompact ? 16 : 20;
  const cardPadding = isTablet ? 20 : isCompact ? 14 : 16;
  const roleTitleSize = isTablet ? 22 : isCompact ? 16 : 18;
  const companySize = isTablet ? 16 : 14;
  const contractSize = isTablet ? 15 : isCompact ? 13 : 14;

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <AppHeader title="Experience" subtitle="Portfolio" />

        {experienceEntries.map((entry) => (
          <View
            key={`${entry.roleTitle}-${entry.company}`}
            style={[styles.timelineCard, { padding: cardPadding }]}>
            <Text style={[styles.roleTitle, { fontSize: roleTitleSize }]}>{entry.roleTitle}</Text>
            <Text style={[styles.company, { fontSize: companySize }]}>{entry.company}</Text>
            <Text style={styles.period}>{entry.period}</Text>
            {entry.contracts.length > 0 ? (
              <>
                <Text style={styles.contractLabel}>Contracts</Text>
                <View style={styles.contractList}>
                  {entry.contracts.map((contract) => (
                    <Text key={contract} style={[styles.contractItem, { fontSize: contractSize }]}>
                      {contract}
                    </Text>
                  ))}
                </View>
              </>
            ) : null}
          </View>
        ))}
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
  timelineCard: {
    borderRadius: 18,
    backgroundColor: 'rgba(39,49,29,0.86)',
    padding: 16,
    gap: 4,
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
  },
  roleTitle: {
    color: BrandColors.textMain,
    fontSize: 18,
    fontWeight: '700',
    fontFamily: BrandFonts.body,
  },
  company: {
    color: BrandColors.accent,
    fontSize: 14,
    fontWeight: '700',
    marginTop: 2,
    fontFamily: BrandFonts.body,
  },
  period: {
    color: BrandColors.textMuted,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    fontFamily: BrandFonts.mono,
    marginBottom: 8,
  },
  contractLabel: {
    color: BrandColors.textSoft,
    fontSize: 12,
    textTransform: 'uppercase',
    letterSpacing: 1.3,
    fontFamily: BrandFonts.mono,
    marginBottom: 4,
  },
  contractList: {
    gap: 8,
  },
  contractItem: {
    color: BrandColors.textMain,
    fontSize: 14,
    fontFamily: BrandFonts.body,
    backgroundColor: 'rgba(30,38,22,0.78)',
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
});

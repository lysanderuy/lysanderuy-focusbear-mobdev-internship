import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';
import { profileLinks, stackGroups } from '@/constants/portfolio-data';

export default function ProfileScreen() {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={styles.content}>
        <AppHeader title="Profile" subtitle="Portfolio" showStatus />
        <Text style={styles.name}>Lysander Uy</Text>
        <Text style={styles.role}>Full Stack Developer · Mobile App Developer</Text>
        <Text style={styles.bio}>
          I design and ship end-to-end products, from backend systems to polished mobile
          experiences with strong UX and maintainable architecture.
        </Text>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Connect</Text>
          {profileLinks.map((item) => (
            <Pressable
              key={item.href}
              onPress={() => void openLink(item.href)}
              style={({ pressed }) => [styles.linkRow, pressed && styles.linkRowPressed]}>
              <Text style={styles.linkLabel}>{item.label}</Text>
              <View style={styles.linkArrowBadge}>
                <Text style={styles.linkArrow}>↗</Text>
              </View>
            </Pressable>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.sectionTitle}>Stack</Text>
          {stackGroups.map((group) => (
            <View key={group.label} style={styles.stackGroup}>
              <Text style={styles.groupLabel}>{group.label}</Text>
              <View style={styles.stackWrap}>
                {group.items.map((tech) => (
                  <View key={tech} style={styles.tag}>
                    <Text style={styles.tagText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
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
    gap: 12,
  },
  name: {
    color: BrandColors.textMain,
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 40,
    fontFamily: BrandFonts.hero,
  },
  role: {
    color: BrandColors.accent,
    fontSize: 12,
    letterSpacing: 2,
    textTransform: 'uppercase',
    fontFamily: BrandFonts.mono,
    marginBottom: 8,
  },
  bio: {
    color: BrandColors.textSoft,
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    maxWidth: 500,
  },
  block: {
    marginBottom: 14,
  },
  sectionTitle: {
    color: BrandColors.textMuted,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 2,
    marginBottom: 10,
    fontFamily: BrandFonts.mono,
  },
  linkRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginBottom: 10,
    backgroundColor: 'rgba(39,49,29,0.82)',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22,
    shadowRadius: 10,
    elevation: 2,
  },
  linkRowPressed: {
    opacity: 0.86,
  },
  linkLabel: {
    color: BrandColors.textMain,
    fontSize: 15,
    fontWeight: '600',
  },
  linkArrowBadge: {
    width: 26,
    height: 26,
    borderRadius: 999,
    backgroundColor: 'rgba(138,154,91,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linkArrow: {
    color: BrandColors.accent,
    fontSize: 14,
    fontWeight: '700',
  },
  stackWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  stackGroup: {
    marginBottom: 12,
  },
  groupLabel: {
    color: BrandColors.textMuted,
    fontSize: 10,
    textTransform: 'uppercase',
    letterSpacing: 1.6,
    marginBottom: 8,
    fontFamily: BrandFonts.mono,
  },
  tag: {
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 13,
    backgroundColor: 'rgba(39,49,29,0.82)',
  },
  tagText: {
    color: BrandColors.textMain,
    fontSize: 13,
    fontFamily: BrandFonts.body,
  },
});

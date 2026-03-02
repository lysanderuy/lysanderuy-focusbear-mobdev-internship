import { Tabs } from 'expo-router';
import React from 'react';
import { useWindowDimensions } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function TabLayout() {
  const { width } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const iconSize = isTablet ? 30 : isCompact ? 24 : 28;
  const labelSize = isTablet ? 12 : isCompact ? 10 : 11;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: BrandColors.accent,
        tabBarInactiveTintColor: BrandColors.textMuted,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarLabelStyle: {
          fontFamily: BrandFonts.mono,
          letterSpacing: 1,
          fontSize: labelSize,
        },
        tabBarStyle: {
          backgroundColor: BrandColors.bgPanel,
          borderTopColor: BrandColors.border,
          paddingHorizontal: isTablet ? 16 : 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={iconSize} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={iconSize} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={iconSize} name="briefcase.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="sandbox"
        options={{
          title: 'Sandbox',
          tabBarIcon: ({ color }) => (
            <IconSymbol size={iconSize} name="chevron.left.forwardslash.chevron.right" color={color} />
          ),
        }}
      />
      <Tabs.Screen name="projects" options={{ href: null }} />
      <Tabs.Screen name="robotics" options={{ href: null }} />
      <Tabs.Screen name="competitions" options={{ href: null }} />
    </Tabs>
  );
}

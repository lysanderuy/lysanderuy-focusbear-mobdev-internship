import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

export default function TabLayout() {
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
          fontSize: 11,
        },
        tabBarStyle: {
          backgroundColor: BrandColors.bgPanel,
          borderTopColor: BrandColors.border,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'Experience',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="briefcase.fill" color={color} />,
        }}
      />
      <Tabs.Screen name="projects" options={{ href: null }} />
      <Tabs.Screen name="robotics" options={{ href: null }} />
      <Tabs.Screen name="competitions" options={{ href: null }} />
    </Tabs>
  );
}

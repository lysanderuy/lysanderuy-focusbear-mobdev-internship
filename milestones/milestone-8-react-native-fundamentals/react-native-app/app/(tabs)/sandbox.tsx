import { useEffect, useRef, useState } from 'react';
import {
  Animated as RNAnimated,
  InteractionManager,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';
import {
  getNativeDemoInfo,
  isNativeDemoModuleAvailable,
  type NativeDemoInfo,
} from '@/lib/native-demo';
import { captureSandboxError, isSentryEnabled } from '@/lib/sentry';

export default function SandboxScreen() {
  const { width } = useWindowDimensions();
  const isCompact = width < 380;
  const isTablet = width >= 768;
  const horizontalPadding = isTablet ? 36 : isCompact ? 16 : 20;
  const cardPadding = isTablet ? 20 : isCompact ? 14 : 16;
  const titleSize = isTablet ? 24 : isCompact ? 20 : 22;
  const bodySize = isTablet ? 16 : isCompact ? 14 : 15;

  const [swipeStatus, setSwipeStatus] = useState('Swipe left or right');
  const [longPressStatus, setLongPressStatus] = useState('Press and hold');
  const [interactionStatus, setInteractionStatus] = useState('Scheduling deferred task...');
  const [nativeModuleStatus, setNativeModuleStatus] = useState(
    isNativeDemoModuleAvailable()
      ? 'Ready to call the local Expo Module from JavaScript.'
      : 'Local Expo Module not loaded. Use a development build instead of Expo Go to test it.'
  );
  const [nativeModuleResult, setNativeModuleResult] = useState<NativeDemoInfo | null>(null);
  const [isRunningNativeModule, setIsRunningNativeModule] = useState(false);
  const [sentryStatus, setSentryStatus] = useState(
    isSentryEnabled
      ? 'Ready to send a test event to Sentry.'
      : 'Add EXPO_PUBLIC_SENTRY_DSN to enable Sentry logging.'
  );

  const swipeX = useSharedValue(0);
  const holdScale = useSharedValue(1);
  const pulse = useRef(new RNAnimated.Value(1)).current;

  useEffect(() => {
    const pulseLoop = RNAnimated.loop(
      RNAnimated.sequence([
        RNAnimated.timing(pulse, { toValue: 1.08, duration: 700, useNativeDriver: true }),
        RNAnimated.timing(pulse, { toValue: 1, duration: 700, useNativeDriver: true }),
      ])
    );
    pulseLoop.start();

    const interactionTask = InteractionManager.runAfterInteractions(() => {
      setInteractionStatus('Deferred task completed after interactions');
    });

    return () => {
      pulseLoop.stop();
      interactionTask.cancel();
    };
  }, [pulse]);

  const swipeGesture = Gesture.Pan()
    .onUpdate((event) => {
      swipeX.value = event.translationX;
    })
    .onEnd(() => {
      const threshold = 120;
      if (Math.abs(swipeX.value) > threshold) {
        const direction = swipeX.value > 0 ? 1 : -1;
        const endX = direction * Math.min(width * 0.8, 420);
        swipeX.value = withTiming(endX, { duration: 200 }, (finished) => {
          if (finished) {
            swipeX.value = withTiming(0, { duration: 220 });
            runOnJS(setSwipeStatus)(direction > 0 ? 'Swiped right' : 'Swiped left');
          }
        });
      } else {
        swipeX.value = withSpring(0, { damping: 14, stiffness: 160 });
      }
    });

  const longPressGesture = Gesture.LongPress()
    .minDuration(450)
    .onBegin(() => {
      holdScale.value = withSpring(0.96);
      runOnJS(setLongPressStatus)('Long press activated');
    })
    .onFinalize(() => {
      holdScale.value = withSpring(1);
      runOnJS(setLongPressStatus)('Press and hold');
    });

  const swipeCardStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: swipeX.value },
      { rotate: `${swipeX.value / 18}deg` },
    ],
  }));

  const holdCardStyle = useAnimatedStyle(() => ({
    transform: [{ scale: holdScale.value }],
  }));

  const handleSendSentryEvent = () => {
    const errorMessage = captureSandboxError();
    setSentryStatus(`Captured test error: "${errorMessage}"`);
  };

  const handleRunNativeModuleDemo = async () => {
    setIsRunningNativeModule(true);
    setNativeModuleResult(null);
    setNativeModuleStatus('Calling native code...');

    try {
      const result = await getNativeDemoInfo();
      setNativeModuleResult(result);
      setNativeModuleStatus(`Native module responded from ${result.platform}.`);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown native module error';
      setNativeModuleStatus(message);
    } finally {
      setIsRunningNativeModule(false);
    }
  };

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={[styles.content, { paddingHorizontal: horizontalPadding }]}>
        <AppHeader title="Sandbox" subtitle="Portfolio" />

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>Gesture Handler + Reanimated</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Swipe Gesture</Text>
          <Text style={[styles.statusText, { fontSize: bodySize }]}>{swipeStatus}</Text>
          <GestureDetector gesture={swipeGesture}>
            <Animated.View style={[styles.demoCard, swipeCardStyle]}>
              <Text style={styles.demoTitle}>Swipe Me</Text>
              <Text style={styles.demoBody}>Pan horizontally to test gesture-driven motion.</Text>
            </Animated.View>
          </GestureDetector>
        </View>

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>Gesture Handler + Reanimated</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Long Press Gesture</Text>
          <Text style={[styles.statusText, { fontSize: bodySize }]}>{longPressStatus}</Text>
          <GestureDetector gesture={longPressGesture}>
            <Animated.View style={[styles.demoCard, holdCardStyle]}>
              <Text style={styles.demoTitle}>Hold Me</Text>
              <Text style={styles.demoBody}>Press and hold for at least 450ms.</Text>
            </Animated.View>
          </GestureDetector>
        </View>

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>React Native Animated API</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Pulse Animation</Text>
          <RNAnimated.View style={[styles.pulseDot, { transform: [{ scale: pulse }] }]} />
          <Text style={[styles.statusText, { fontSize: bodySize }]}>
            Looping pulse built with RN Animated.
          </Text>
        </View>

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>InteractionManager</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Deferred Work</Text>
          <Text style={[styles.statusText, { fontSize: bodySize }]}>{interactionStatus}</Text>
          <Text style={styles.demoBody}>
            Use this to delay expensive JS work until active interactions and animations finish.
          </Text>
        </View>

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>Expo Modules API</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Custom Native Module</Text>
          <Text style={[styles.statusText, { fontSize: bodySize }]}>{nativeModuleStatus}</Text>
          <Text style={styles.demoBody}>
            This demo calls a local Expo Module. It works in a development build and gracefully
            falls back when the native module is unavailable.
          </Text>
          {nativeModuleResult ? (
            <View style={styles.resultCard}>
              <Text style={styles.demoTitle}>Native Response</Text>
              <Text style={styles.demoBody}>Platform: {nativeModuleResult.platform}</Text>
              <Text style={styles.demoBody}>Message: {nativeModuleResult.message}</Text>
            </View>
          ) : null}
          <Pressable
            accessibilityRole="button"
            disabled={isRunningNativeModule}
            onPress={handleRunNativeModuleDemo}
            style={({ pressed }) => [
              styles.sentryButton,
              pressed ? styles.sentryButtonPressed : null,
              isRunningNativeModule ? styles.sentryButtonDisabled : null,
            ]}>
            <Text style={styles.sentryButtonText}>
              {isRunningNativeModule ? 'Calling Native Module...' : 'Run Native Module Demo'}
            </Text>
          </Pressable>
        </View>

        <View style={[styles.block, { padding: cardPadding }]}>
          <Text style={styles.label}>Sentry Error Reporting</Text>
          <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>Test Error Logging</Text>
          <Text style={[styles.statusText, { fontSize: bodySize }]}>{sentryStatus}</Text>
          <Text style={styles.demoBody}>
            Trigger a handled test error and confirm it appears in your Sentry project event feed.
          </Text>
          <Pressable
            accessibilityRole="button"
            disabled={!isSentryEnabled}
            onPress={handleSendSentryEvent}
            style={({ pressed }) => [
              styles.sentryButton,
              pressed ? styles.sentryButtonPressed : null,
              !isSentryEnabled ? styles.sentryButtonDisabled : null,
            ]}>
            <Text style={styles.sentryButtonText}>
              {isSentryEnabled ? 'Send Sentry Test Error' : 'Sentry DSN Required'}
            </Text>
          </Pressable>
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
    gap: 14,
  },
  block: {
    borderRadius: 18,
    backgroundColor: 'rgba(39,49,29,0.86)',
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
    gap: 10,
  },
  label: {
    color: BrandColors.textMuted,
    fontSize: 11,
    textTransform: 'uppercase',
    letterSpacing: 1.4,
    fontFamily: BrandFonts.mono,
  },
  sectionTitle: {
    color: BrandColors.textMain,
    fontWeight: '700',
    fontFamily: BrandFonts.hero,
  },
  statusText: {
    color: BrandColors.accent,
    fontFamily: BrandFonts.body,
  },
  demoCard: {
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(30,38,22,0.78)',
    borderWidth: 1,
    borderColor: 'rgba(74,90,57,0.55)',
    gap: 6,
  },
  demoTitle: {
    color: BrandColors.textMain,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: BrandFonts.body,
  },
  demoBody: {
    color: BrandColors.textSoft,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: BrandFonts.body,
  },
  pulseDot: {
    width: 52,
    height: 52,
    borderRadius: 999,
    backgroundColor: BrandColors.accent,
    marginTop: 2,
    marginBottom: 4,
  },
  resultCard: {
    borderRadius: 14,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(30,38,22,0.62)',
    borderWidth: 1,
    borderColor: 'rgba(138,154,91,0.25)',
    gap: 4,
  },
  sentryButton: {
    marginTop: 6,
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: BrandColors.accent,
    alignItems: 'center',
  },
  sentryButtonPressed: {
    opacity: 0.85,
  },
  sentryButtonDisabled: {
    backgroundColor: 'rgba(138,154,91,0.35)',
  },
  sentryButtonText: {
    color: BrandColors.bgBase,
    fontSize: 14,
    fontWeight: '700',
    fontFamily: BrandFonts.body,
  },
});

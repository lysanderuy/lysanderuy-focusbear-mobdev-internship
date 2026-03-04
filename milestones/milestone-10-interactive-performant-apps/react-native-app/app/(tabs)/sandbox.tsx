import { memo, useCallback, useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { BrandBackground } from '@/components/brand-background';
import { BrandColors, BrandFonts } from '@/constants/brand-theme';

const { addByAmount, counterReducer, fetchGreeting, initialState } = require('@/src/features/counter/counterSlice');

type TestResult = {
  details: string;
  name: string;
  passed: boolean;
};

type LayoutMetrics = {
  bodySize: number;
  cardPadding: number;
  horizontalPadding: number;
  titleSize: number;
};

function getLayoutMetrics(width: number): LayoutMetrics {
  const isCompact = width < 380;
  const isTablet = width >= 768;

  return {
    horizontalPadding: isTablet ? 36 : isCompact ? 16 : 20,
    cardPadding: isTablet ? 20 : isCompact ? 14 : 16,
    titleSize: isTablet ? 24 : isCompact ? 20 : 22,
    bodySize: isTablet ? 16 : isCompact ? 14 : 15,
  };
}

type ResultCardProps = {
  bodySize: number;
  cardPadding: number;
  result: TestResult;
  titleSize: number;
};

const ResultCard = memo(function ResultCard({ bodySize, cardPadding, result, titleSize }: ResultCardProps) {
  const statusStyle = result.passed ? styles.passText : styles.failText;

  return (
    <View style={[styles.block, { padding: cardPadding }]}>
      <Text style={styles.label}>Milestone 10 Validation</Text>
      <Text style={[styles.sectionTitle, { fontSize: titleSize }]}>{result.name}</Text>
      <Text style={[statusStyle, { fontSize: bodySize }]}>{result.passed ? 'PASS' : 'FAIL'}</Text>
      <Text style={styles.demoBody}>{result.details}</Text>
    </View>
  );
});

export default function SandboxScreen() {
  const { width } = useWindowDimensions();
  const { bodySize, cardPadding, horizontalPadding, titleSize } = useMemo(() => getLayoutMetrics(width), [width]);

  const [results, setResults] = useState<TestResult[]>([]);
  const scrollContentStyle = useMemo(
    () => [styles.content, { paddingHorizontal: horizontalPadding }],
    [horizontalPadding]
  );

  useEffect(() => {
    const run = async () => {
      const reducerState = counterReducer(initialState, addByAmount(5));
      const reducerPassed =
        reducerState.value === 5 && reducerState.status === 'idle' && reducerState.greeting === '';

      let asyncState = initialState;
      const dispatch = (action: { payload?: string; type: string }) => {
        asyncState = counterReducer(asyncState, action);
        return action;
      };

      const greeting = await fetchGreeting('Redux')(dispatch);
      const asyncPassed =
        greeting === 'Hello, Redux!' &&
        asyncState.status === 'succeeded' &&
        asyncState.greeting === 'Hello, Redux!';

      setResults([
        {
          name: 'Reducer state update test',
          passed: reducerPassed,
          details: reducerPassed ? 'addByAmount(5) updated value to 5.' : 'Reducer output did not match expected state.',
        },
        {
          name: 'Async Redux action test',
          passed: asyncPassed,
          details: asyncPassed
            ? 'fetchGreeting dispatched pending + fulfilled and updated state.'
            : 'Async action flow did not produce expected greeting/state.',
        },
      ]);
    };

    run();
  }, []);

  const renderResult = useCallback(
    (result: TestResult) => (
      <ResultCard
        key={result.name}
        result={result}
        cardPadding={cardPadding}
        titleSize={titleSize}
        bodySize={bodySize}
      />
    ),
    [bodySize, cardPadding, titleSize]
  );

  return (
    <View style={styles.screen}>
      <BrandBackground />
      <ScrollView contentContainerStyle={scrollContentStyle}>
        <AppHeader title="Sandbox" subtitle="Redux Tests" />

        {results.map(renderResult)}
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
  passText: {
    color: '#8BE28B',
    fontFamily: BrandFonts.body,
  },
  failText: {
    color: '#FF7D7D',
    fontFamily: BrandFonts.body,
  },
  demoBody: {
    color: BrandColors.textSoft,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: BrandFonts.body,
  },
});

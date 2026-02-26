import { StyleSheet, View } from 'react-native';

export function BrandBackground() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={styles.baseGlow} />
      <View style={styles.gridOverlay} />
      <View style={styles.verticalBeam} />
      <View style={styles.sideBeam} />
    </View>
  );
}

const styles = StyleSheet.create({
  baseGlow: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(122,143,64,0.06)',
  },
  gridOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderColor: 'rgba(122,143,64,0.12)',
  },
  verticalBeam: {
    position: 'absolute',
    width: 150,
    height: '72%',
    borderRadius: 28,
    top: '14%',
    left: '-9%',
    backgroundColor: 'rgba(138,154,91,0.11)',
    transform: [{ rotate: '-8deg' }],
  },
  sideBeam: {
    position: 'absolute',
    width: 80,
    height: '44%',
    borderRadius: 22,
    top: '28%',
    right: '-8%',
    backgroundColor: 'rgba(74,90,57,0.2)',
    transform: [{ rotate: '11deg' }],
  },
});

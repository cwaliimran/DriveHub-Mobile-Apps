import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images } from '../../../assets/assets';

/**
 * Props:
 * - platform: 'uber' | 'lyft' | 'doordash'
 * - title: string               // visible name (localized outside)
 * - rank: number                // 1..N -> badge text updates outside
 * - isActive?: boolean          // while dragging
 */
const PlatformPriorityTile = ({ platform, title, rank, isActive }) => {
  const theme = useTheme();
  const logo =
    platform === 'uber' ? Images.uber :
    platform === 'lyft' ? Images.lyft :
    Images.doorDash;

  return (
    <View style={styles.wrap}>
      <View style={[
        styles.cardContainer,
        { backgroundColor: theme.card_theme, shadowColor: '#000' },
        isActive && { transform: [{ scale: 1.02 }], opacity: 0.95 }
      ]}>
        {/* blue left accent like other cards */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.card}>
          {/* Priority badge positioned like status button */}
          <View style={[styles.priorityBtn, { backgroundColor: theme.primary }]}>
            <Text style={styles.priorityText}>Priority {rank}</Text>
          </View>

          <View style={styles.row}>
            <View style={[styles.logoWrap, { backgroundColor: theme.background }]}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>

            <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>{title}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const R = 16;

const styles = StyleSheet.create({
  wrap: { 
    marginHorizontal: 16, 
    marginTop: 12 
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: R,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    overflow: 'hidden',
  },
  accent: {
    width: 4,
    borderTopLeftRadius: R,
    borderBottomLeftRadius: R,
  },
  card: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    position: 'relative',
  },
  priorityBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  priorityText: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  logoWrap: {
    width: 48, height: 48, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  logo: { width: 30, height: 30, borderRadius: 6 },
  title: { flex: 1, fontSize: 15, fontFamily: typography.fontMedium },
});

export default PlatformPriorityTile;

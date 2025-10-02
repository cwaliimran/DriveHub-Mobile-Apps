import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images, Icons } from '../../../assets/assets';

/**
 * Props:
 * - platform: 'uber' | 'lyft' | 'doordash'
 * - label: string
 * - onPress: () => void
 */
const PlatformFilterItem = ({ platform = 'uber', label, onPress }) => {
  const theme = useTheme();

  const logo =
    platform === 'uber' ? Images.uber :
    platform === 'lyft' ? Images.lyft :
    Images.doorDash;

  return (
    <View style={styles.wrap}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}
      >
        {/* blue left accent like AppStatusControlCard */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.content}>
          <View style={styles.row}>
            <View style={[styles.logoWrap, { backgroundColor: theme.background }]}>
              <Image source={logo} style={styles.logo} resizeMode="contain" />
            </View>

            <Text style={[styles.label, { color: theme.text }]} numberOfLines={1}>
              {label}
            </Text>

            <View style={[styles.nextBtn, { borderColor: theme.border, backgroundColor: theme.background }]}>
              <Image source={Icons.next} style={[styles.nextIcon, { tintColor: theme.text }]} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const R = 14;

const styles = StyleSheet.create({
  wrap: {
    marginHorizontal: 16,
    marginTop: 14,
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 18,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    overflow: 'hidden',
  },
  accent: {
    width: 4,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  content: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  logoWrap: {
    width: 48, height: 48, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  logo: { width: 30, height: 30, borderRadius: 6 },
  label: { flex: 1, fontSize: 16, fontFamily: typography.fontSemiBold },
  nextBtn: {
    width: 36, height: 36, borderRadius: 18,
    borderWidth: 1, alignItems: 'center', justifyContent: 'center',
  },
  nextIcon: { width: 36, height: 36 },
});

export default PlatformFilterItem;

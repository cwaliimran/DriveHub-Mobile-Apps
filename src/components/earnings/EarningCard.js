import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const EarningCard = ({ icon, title, value, topRightLabel = 'Today', onPress, style }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[styles.card, { backgroundColor: theme.card_theme, shadowColor: '#000' }, style]}
    >
      {/* top row: icon + top-right label */}
      <View style={styles.topRow}>
        <View>
          <Image source={icon} style={styles.icon} resizeMode="contain" />
        </View>
        <Text style={[styles.topRight, { color: theme.textSecondary }]}>{topRightLabel}</Text>
      </View>

      {/* title */}
      <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
        {title}
      </Text>

      {/* value */}
      <Text style={[styles.value, { color: theme.primary }]} numberOfLines={1}>
        {value}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '48%',
    borderRadius: 18,
    padding: 12,
    marginBottom: 12,
    // soft shadow like the mock
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
  },
  topRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  iconWrap: {
    width: 56,
    height: 56,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: { width:40, height: 40 },
  topRight: {
    fontSize: 14,
    lineHeight: 20,
    marginTop:-20,
    fontFamily: typography.fontRegular,
  },
  title: {
    marginTop: 12,
    fontSize: 13,
    lineHeight: 24,
    fontFamily: typography.fontSemiBold, // “Total Earnings” style
    color: '#6B7280',
  },
  value: {
    marginTop: 6,
    fontSize: 26,
    lineHeight: 36,
    fontFamily: typography.fontBold, // big blue value
    textAlign: 'right',
  },
});

export default EarningCard;

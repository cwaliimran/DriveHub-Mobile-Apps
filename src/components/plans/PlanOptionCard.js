import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const Pill = ({ text, theme }) => (
  <View style={[styles.pill, { backgroundColor: theme.primary }]}>
    <Text style={[styles.pillText, { color: '#fff' }]}>{text}</Text>
  </View>
);

const PlanOptionCard = ({
  title,
  description,
  billedNote,
  priceMain,
  priceUnit,
  badgeText,
  selected,
  onPress,
}) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: theme.card_theme,
          borderColor: selected ? theme.primary : (theme.cardBorder ?? 'rgba(255,255,255,0.08)'),
          shadowOpacity: selected ? 0.25 : 0,
        }
      ]}
    >
      {/* Pill on the top border */}
      {!!badgeText && (
        <View style={styles.pillContainer}>
          <Pill text={badgeText} theme={theme} />
        </View>
      )}

      {/* Title */}
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      {/* Description and Price Row */}
      <View style={styles.descriptionPriceRow}>
        <Text style={[styles.desc, { color: theme.textSecondary, flex: 1 }]}>
          {description}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={[styles.price, { color: theme.text }]}>{`$${priceMain}`}</Text>
          <Text style={[styles.unit, { color: theme.textSecondary }]}>{priceUnit}</Text>
        </View>
      </View>

      {/* Billing note */}
      {billedNote && (
        <Text style={styles.billed}>
          <Text style={{ color: theme.primary }}>{billedNote.split(' ')[0]}</Text>
          <Text style={{ color: theme.textSecondary }}> {billedNote.split(' ').slice(1).join(' ')}</Text>
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 14,
    borderWidth: 1,
    padding: 14,
    marginBottom: 12,
    shadowColor: '#000',
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  pillContainer: {
    position: 'absolute',
    top: -16,
    right: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
    fontFamily: typography.fontSemiBold,
  },
  pill: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillText: { 
    fontSize: 12, 
    fontFamily: typography.fontSemiBold 
  },
  descriptionPriceRow: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'flex-start',
  },
  desc: { 
    fontSize: 11, 
    lineHeight: 17, 
    fontFamily: typography.fontRegular,
    paddingRight: 12,
  },
  priceContainer: {
    alignItems: 'flex-end',
  },
  price: { 
    fontSize: 24, 
    lineHeight: 28, 
    fontFamily: typography.fontSemiBold 
  },
  unit: { 
    fontSize: 12, 
    lineHeight: 16, 
    fontFamily: typography.fontRegular 
  },
  billed: { 
    marginTop: 8, 
    fontSize: 12, 
    lineHeight: 18, 
    fontFamily: typography.fontSemiBold 
  },
});

export default PlanOptionCard;
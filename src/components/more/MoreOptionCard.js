import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import typography from '../../theme/typography';
import useTheme from '../../hooks/useTheme';

const { width } = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2; // 2 cards per row

const MoreOptionCard = ({ icon, title, description, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: theme.card_theme, shadowColor: theme.text }]}
      onPress={onPress}
    >
      {/* Icon inside primary-colored box */}
      <View style={[styles.iconContainer, { backgroundColor: theme.primary }]}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>

      {/* Title */}
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      {/* Description */}
      {description ? (
        <Text style={[styles.description, { color: theme.textSecondary }]}>{description}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    borderRadius: 12,
    padding: 16,
    margin: 8,
    elevation: 2,
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 28,
    height: 28,
    tintColor: '#fff', // ✅ always white for contrast
  },
  title: {
    fontSize: 14,
    fontFamily: typography.fontSemiBold,
    marginBottom: 6,
  },
  description: {
    fontSize: 12,
    fontFamily: typography.fontRegular,
  },
});

export default MoreOptionCard;

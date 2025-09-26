import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import typography from '../../theme/typography';
import { Icons, Images } from '../../assets/assets';
import useTheme from '../../hooks/useTheme';

const CardItem = ({ name, maskedNumber, onEdit, onDelete }) => {
  const theme = useTheme();

  return (
    <View style={[styles.card, { backgroundColor: theme.card_theme }]}>
      {/* Decorative tilted stripes - render first so they're behind */}
      <Image
        source={Images.cardBackground}
        style={styles.stripeOne}
        resizeMode="cover"
      />
      <Image
        source={Images.cardBackground}
        style={styles.stripeTwo}
        resizeMode="cover"
      />

      {/* Left - Card info */}
      <View>
        <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
        <Text style={[styles.number, { color: theme.textSecondary }]}>
          {maskedNumber}
        </Text>
      </View>

      {/* Right - Actions */}
      <View style={styles.actions}>
        <TouchableOpacity
          style={[styles.iconWrapper, { backgroundColor: theme.card }]}
          onPress={onEdit}
        >
          <Image
            source={Icons.editCard}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.iconWrapper, { backgroundColor: theme.card }]}
          onPress={() => {
            console.log('🗑️ Delete button pressed for:', name, maskedNumber);
            onDelete();
          }}
        >
          <Image
            source={Icons.deleteCard}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  name: {
    fontSize: 16,
    fontFamily: typography.fontSemiBold,
  },
  number: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    marginTop: 2,
  },
  actions: {
    flexDirection: 'row',
    zIndex: 2, // ✅ ensure actions are above background
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 17,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  // Diagonal Stripes - background layer
  stripeOne: {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 0,
    right: '40%',
    top: -40,
    bottom: -20,
    width: '12%',
    opacity: 1.0,
    transform: [{ rotate: '20deg' }],
  },
  stripeTwo: {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: 0,
    right: '20%',
    top: -20,
    bottom: -20,
    width: '12%',
    opacity: 1.0,
    transform: [{ rotate: '20deg' }],
  },
});

export default CardItem;

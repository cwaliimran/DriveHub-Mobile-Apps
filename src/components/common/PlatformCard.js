import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const PlatformCard = ({ title, image, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, selected ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.leftIndicator} />
      <View style={styles.content}>
        <View style={styles.left}>
          <View style={styles.logoContainer}>
            <Image source={image} style={styles.icon} />
          </View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <Image
          source={selected ? Icons.uncheck : Icons.check}
          style={[styles.checkIcon, selected && { tintColor: colors.primary }]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
    overflow: 'hidden',
  },
  cardSelected: {
    borderColor: colors.primary,
    shadowColor: colors.primary,
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  leftIndicator: {
    width: 6,
    backgroundColor: colors.primary,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoContainer: {
    width: 56,
    height: 56,
    borderRadius: 12,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  icon: {
    width: 36,
    height: 36,
    borderRadius: 6,
  },
  text: {
    fontSize: 16,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
  },
  checkIcon: {
    width: 22,
    height: 22,
    tintColor: '#888',
  },
});
export default PlatformCard;

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import typography from '../../theme/typography';
import { Icons } from '../../assets/assets';
import useTheme from '../../hooks/useTheme';

const PlatformCard = ({ title, image, selected, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.card,
        { backgroundColor: theme.card, borderColor: theme.border },
        selected && {
          borderColor: theme.primary,
          shadowColor: theme.primary,
          shadowOpacity: 0.25,
          shadowOffset: { width: 0, height: 2 },
          shadowRadius: 6,
          elevation: 3,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={[styles.leftIndicator, { backgroundColor: theme.primary }]} />
      <View style={styles.content}>
        <View style={styles.left}>
          <View
            style={[
              styles.logoContainer,
              { backgroundColor: theme.background },
            ]}
          >
            <Image source={image} style={styles.icon} />
          </View>
          <Text style={[styles.text, { color: theme.text }]}>{title}</Text>
        </View>
        <Image
          source={selected ? Icons.uncheck : Icons.check}
          style={[
            styles.checkIcon,
            { tintColor: selected ? theme.primary : theme.textSecondary },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 10,
    overflow: 'hidden',
  },
  leftIndicator: {
    width: 6,
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
  },
  checkIcon: {
    width: 22,
    height: 22,
  },
});

export default PlatformCard;

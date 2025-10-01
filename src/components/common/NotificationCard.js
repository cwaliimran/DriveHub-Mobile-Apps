import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const NotificationCard = ({ image, title, description, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPress}
      style={[
        styles.card,
        {
          backgroundColor: theme.card_theme,
          shadowColor: '#000',
        },
      ]}
    >
      <View style={[styles.iconWraP]}>
        <Image source={image} style={styles.icon} resizeMode="contain" />
      </View>

      <View style={styles.texts}>
        <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
          {title}
        </Text>
        <Text style={[styles.desc, { color: theme.textSecondary }]} numberOfLines={2}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 14,
    marginBottom: 12,
    // soft elevation
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
  },
  iconWrap: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  icon: { width: 60, height: 60 },
  texts: { flex: 1 ,marginLeft:5},
  title: {
    fontSize: 14, // semibold 14
    lineHeight: 20,
    fontFamily: typography.fontSemiBold,
    marginBottom: 4,
  },
  desc: {
    fontSize: 12, // regular 12
    lineHeight: 18,
    fontFamily: typography.fontRegular,
  },
});

export default NotificationCard;

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import { Icons } from '../../assets/assets';

const PerkItem = ({ iconKey, title, subtitle }) => {
  const theme = useTheme();
  const iconSource = Icons[iconKey] || null;

  return (
    <View style={styles.container}>
      <View style={[styles.leftLine, { backgroundColor: theme.primary ?? '#007AFF' }]} />
      <View style={[styles.card, { backgroundColor: theme.card_theme }]}>
        <View style={[styles.iconWrap, { backgroundColor: theme.primaryDim ?? 'rgba(0,122,255,0.15)' }]}>
          {iconSource ? <Image source={iconSource} style={{ width: 24, height: 24 }} /> : null}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
          <Text style={[styles.subtitle, { color: theme.textSecondary }]}>{subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  leftLine: {
    width: 4,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 14,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  iconWrap: {
    width: 42, 
    height: 42, 
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  title: { 
    fontSize: 14, 
    lineHeight: 20, 
    fontFamily: typography.fontBold 
  },
  subtitle: { 
    fontSize: 12, 
    lineHeight: 18, 
    fontFamily: typography.fontRegular 
  },
});

export default PerkItem;
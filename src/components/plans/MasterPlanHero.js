import React from 'react';
import { ImageBackground, View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import { Images } from '../../assets/assets';

const MasterPlanHero = ({ title, description }) => {
  const theme = useTheme();
  return (
    <ImageBackground
      source={Images.masterplanBackground}
      imageStyle={styles.bgImg}
      style={[styles.wrap, { backgroundColor: theme.primaryDeep ?? '#0B2A57' }]}
      resizeMode="cover"
    >
      <Text style={[styles.title, { color: '#fff' }]}>{title}</Text>
      <Text style={[styles.desc, { color: 'rgba(255,255,255,0.85)' }]}>{description}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrap: {
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    overflow: 'hidden',
  },
  bgImg: {
    borderRadius: 16,
    opacity: 0.35, // subtle texture like design
  },
  title: {
    fontSize: 24, // semibold 24
    lineHeight: 30,
    fontFamily: typography.fontSemiBold,
    marginBottom: 6,
  },
  desc: {
    fontSize: 12, // regular 12
    lineHeight: 18,
    fontFamily: typography.fontRegular,
  },
});

export default MasterPlanHero;

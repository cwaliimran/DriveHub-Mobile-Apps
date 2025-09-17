import React, { useEffect } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { Images } from '../../assets/assets';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LanguageSelection'); // later change to Login/Home
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 25,
  },
  text: {
    fontSize: 28,
    fontFamily: typography.fontBold,
    color: colors.textLight,
  },
});

export default SplashScreen;

import React, { useEffect } from 'react';
import { View, Image, StyleSheet, useColorScheme } from 'react-native';
import { Images } from '../../assets/assets';
import colors from '../../theme/colors';

const SplashScreen = ({ navigation }) => {
  const scheme = useColorScheme(); // Detect light or dark mode

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('LanguageSelection'); // later change to Login/Home
    }, 2000);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: scheme === 'dark' ? colors.backgroundDark : colors.backgroundLight },
      ]}
    >
      <Image
        source={scheme === 'dark' ? Images.logoDark : Images.logoLight}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 80,
  },
});

export default SplashScreen;

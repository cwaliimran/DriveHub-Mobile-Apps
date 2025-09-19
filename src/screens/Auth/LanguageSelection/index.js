import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import { Images, Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import LanguageOption from '../../../components/common/LanguageOption';
import PrimaryButton from '../../../components/common/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../../localization/i18n';
import { useTranslation } from 'react-i18next';
import { useColorScheme } from 'react-native';

const LanguageSelectionScreen = ({ navigation }) => {
  const scheme = useColorScheme();

    const { t } = useTranslation();
    
  const [selected, setSelected] = useState(null);
  const languages = [
    { key: 'en', label: 'English', flag: Icons.flagUK },
    { key: 'es', label: 'Spanish', flag: Icons.flagSpain },
    { key: 'tr', label: 'Turkish', flag: Icons.flagTurkey },
  ];

return (
  <ImageBackground
  source={Images.backgroundEffect}
  style={styles.background(scheme)}
  imageStyle={{ marginTop: 70 ,marginBottom:150}}
>

    <View style={styles.container}>
     <Image
  source={scheme === 'dark' ? Images.logoDark : Images.logoLight}
  style={styles.logo}
  resizeMode="contain"
/>


      <Text style={styles.title}>
        <Text style={styles.titleGray}>App </Text>
        <Text style={styles.titleBlue}>Language</Text>
      </Text>

      {languages.map(lang => (
        <LanguageOption
          key={lang.key}
          flag={lang.flag}
          label={lang.label}
          selected={selected === lang.key}
          onPress={() => setSelected(lang.key)}
        />
      ))}
    </View>

    {/* ✅ Bottom fixed button */}
    <View style={styles.bottomButton}>
      <PrimaryButton
        title="Select"
 onPress={async () => {
  try {
    await AsyncStorage.setItem('appLanguage', selected);
    await i18n.changeLanguage(selected);
  } catch (e) {
    console.log('Error saving language:', e);
  }
  navigation.replace('Onboarding');
}}
        disabled={!selected}
      />
    </View>
  </ImageBackground>
);

};

const styles = StyleSheet.create({
 background: (scheme) => ({
  flex: 1,
  backgroundColor: scheme === 'dark' ? '#000' : '#fff',
}),

  bottomButton: {
  position: 'absolute',
  bottom: 40, // adjust spacing from bottom
  left: 0,
  right: 0,
  alignItems: 'center',
},

  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  logo: {
    width: 168,
    height: 60,
    marginBottom: 30,
  },
  title: {
    flexDirection: 'row',
    marginBottom: 30,
    fontSize: 22,
    fontFamily: typography.fontSemiBold,
  },
  titleGray: {
    color: colors.secondary,
  },
  titleBlue: {
    color: colors.primary,
  },
});

export default LanguageSelectionScreen;
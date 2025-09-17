
// ==== src/assets/assets.js ====
export const Images = {
  logo: require('./images/logo.png'),
  backgroundEffect: require('./images/background-effect.png'),
    onboarding1: require('./images/onboarding-1.png'),
  onboarding2: require('./images/onboarding-2.png'),
  onboarding3: require('./images/onboarding-3.png'),
};

export const Icons = {
  check: require('./icons/check.png'),
  uncheck: require('./icons/uncheck.png'),
  flagUK: require('./icons/flags/uk.png'),
  flagSpain: require('./icons/flags/spain.png'),
  flagTurkey: require('./icons/flags/turkey.png'),
    arrow: require('./icons/arrow.png'),
};
export const Fonts = {
  regular: 'Lexend-Regular',
  medium: 'Lexend-Medium',
  semibold: 'Lexend-SemiBold',
  bold: 'Lexend-Bold',
};

// ==== src/components/common/LanguageOption.js ====
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const LanguageOption = ({ flag, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <Image source={flag} style={styles.flag} resizeMode="contain" />
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
      </View>
      <Image
        source={selected ? Icons.uncheck : Icons.check}
        style={styles.checkIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.16)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 12,
    // backgroundColor: '#fff',
  },
  selectedContainer: {
    backgroundColor: '#007BFF',
    borderColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 12,
    marginLeft: 0,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.textLight,
  },
  selectedLabel: {
    color: '#fff',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
});

export default LanguageOption;
// ==== src/components/common/OnboardingFooter.js ====
import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const OnboardingFooter = ({ total, current, onNext }) => {
  return (
    <View style={styles.container}>
      {/* Progress dots */}
      <View style={styles.dotsRow}>
        {Array.from({ length: total }).map((_, idx) => (
          <View
            key={idx}
            style={[styles.dot, idx === current ? styles.dotActive : styles.dotInactive]}
          />
        ))}
      </View>

      {/* Next button */}
      <TouchableOpacity style={styles.nextButton} onPress={onNext}>
        <Image source={Icons.arrow} style={styles.arrow} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 40,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
dot: {
  width: 6,
  height: 16,
  borderRadius: 3,
  marginHorizontal: 4,
},
dotActive: {
  backgroundColor: colors.primary,
  height: 28,   // taller for active
},
dotInactive: {
  backgroundColor: '#ddd',
},
nextButton: {
  width: 48,
  height: 48,
  backgroundColor: colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
  transform: [{ rotate: '45deg' }], // rotate square → diamond
  borderRadius: 12, // keeps edges a bit rounded
},
arrow: {
  width: 28,
  height: 28,
  tintColor: '#fff',
  transform: [{ rotate: '-45deg' }], // rotate back the arrow so it looks normal
},
});

export default OnboardingFooter;

// ==== src/components/common/PrimaryButton.js ====
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const PrimaryButton = ({ title, onPress, disabled }) => (
  <TouchableOpacity
    style={[styles.button, disabled && styles.disabled]}
    onPress={onPress}
    disabled={disabled}
  >
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    height: 50,

    // 👇 Same as LanguageOption box
    alignSelf: 'stretch',
    marginHorizontal: 20,

    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  disabled: {
    backgroundColor: colors.secondary,
  },
  text: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
});


export default PrimaryButton;

// ==== src/config/appConfig.js ====

// ==== src/hooks/useTheme.js ====

// ==== src/index.js ====

// ==== src/localization/i18n.js ====
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

import en from './en.json';
import es from './es.json';
import tr from './tr.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  tr: { translation: tr },
};

const DEFAULT_LANGUAGE = 'en';

// Initialize synchronously with default
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: DEFAULT_LANGUAGE,
  fallbackLng: DEFAULT_LANGUAGE,
  interpolation: { escapeValue: false },
});

// Later, load saved language
AsyncStorage.getItem('appLanguage').then((lang) => {
  if (lang) {
    i18n.changeLanguage(lang);
  }
});

export default i18n;

// ==== src/localization/index.js ====

// ==== src/navigation/AppNavigator.js ====
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import LanguageSelectionScreen from '../screens/Auth/LanguageSelection';
import typography from '../theme/typography';
import OnboardingScreen from '../screens/Auth/Onboarding';
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{
      headerShown: false, 
    }}
  >
    <Stack.Screen name="Splash" component={SplashScreen} />
  <Stack.Screen name="LanguageSelection" component={LanguageSelectionScreen} />
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
  </Stack.Navigator>
);

export default AppNavigator;

// ==== src/navigation/NavigationService.js ====

// ==== src/redux/slices/userSlice.js ====

// ==== src/redux/store.js ====

// ==== src/screens/Auth/LanguageSelection/index.js ====
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

const LanguageSelectionScreen = ({ navigation }) => {
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
    style={styles.background}
    imageStyle={{ marginTop: 70 }}
  >
    <View style={styles.container}>
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

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
  background: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
// ==== src/screens/Auth/Onboarding/index.js ====
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, FlatList, Dimensions, StatusBar } from 'react-native';
import { Images } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import OnboardingFooter from '../../../components/common/OnboardingFooter';
import { useTranslation } from 'react-i18next';
import i18n from '../../../localization/i18n';

const { width, height } = Dimensions.get('window');
console.log('Current language:', i18n.language);

const OnboardingScreen = ({ navigation }) => {
  const { t } = useTranslation();
  console.log('Current language:', i18n.language);

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  const slides = [
    {
      key: '1',
      image: Images.onboarding1,
      titleBlack: t('onboarding.slide1.titleBlack'),
      titleBlue: t('onboarding.slide1.titleBlue'),
      titleAfter: t('onboarding.slide1.titleAfter'),
      description: t('onboarding.slide1.desc'),
    },
    {
      key: '2',
      image: Images.onboarding2,
      titleBlack: t('onboarding.slide2.titleBlack'),
      titleBlue: t('onboarding.slide2.titleBlue'),
      titleAfter: t('onboarding.slide2.titleAfter'),
      description: t('onboarding.slide2.desc'),
    },
    {
      key: '3',
      image: Images.onboarding3,
      titleBlack: t('onboarding.slide3.titleBlack'),
      titleBlue: t('onboarding.slide3.titleBlue'),
      titleAfter: t('onboarding.slide3.titleAfter'),
      description: t('onboarding.slide3.desc'),
    },
  ];

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      navigation.replace('Home');
    }
  };

  return (
    <View style={styles.container}>
      {/* Make status bar transparent */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(e.nativeEvent.contentOffset.x / width);
          setCurrentIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            {/* Image Container - now covers full screen including status bar */}
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
            </View>
            
            {/* Content Container */}
            <View style={styles.contentContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {item.titleBlack}
                  <Text style={styles.titleBlue}>{item.titleBlue}</Text>
                  {item.titleAfter}
                </Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
            </View>
          </View>
        )}
      />

      <OnboardingFooter total={slides.length} current={currentIndex} onNext={handleNext} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slide: {
    width,
    height,
    backgroundColor: '#fff',
  },
  imageContainer: {
    height: height * 0.65, // Takes about 60% of screen height
    width: '100%',
    overflow: 'hidden',
    marginTop: -StatusBar.currentHeight || 0, // Extend up to cover status bar
  },
  image: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingBottom: 160, // Account for footer
  },
  textContainer: {
    paddingHorizontal: 30,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fontBold,
    color: colors.backgroundDark,
    marginBottom: 16,
    textAlign: 'center',
    lineHeight: 38,
  },
  titleBlue: {
    color: colors.primary || '#007AFF',
  },
  description: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});

export default OnboardingScreen;
// ==== src/screens/Home/index.js ====
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../theme/colors';
import typography from '../../theme/typography';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Drive Hub 🚗</Text>
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
  text: {
    fontSize: 20,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
  },
});

export default HomeScreen;

// ==== src/screens/Profile/index.js ====

// ==== src/screens/Settings/index.js ====

// ==== src/screens/Splash/index.js ====
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

// ==== src/theme/colors.js ====
export default {
  primary: '#007BFF',
  secondary: '#797979',
  backgroundLight: '#FFFFFF',
  backgroundDark: '#121212',
  textLight: '#000000',
  textDark: '#FFFFFF',
};

// ==== src/theme/dark.js ====
import colors from './colors';
import typography from './typography';

export default {
  dark: true,
  colors: {
    background: colors.backgroundDark,
    text: colors.textDark,
    primary: colors.primary,
    secondary: colors.secondary,
  },
  fonts: {
    regular: { fontFamily: typography.fontRegular, fontWeight: 'normal' },
    medium: { fontFamily: typography.fontMedium, fontWeight: '500' },
    semibold: { fontFamily: typography.fontSemiBold, fontWeight: '600' },
    bold: { fontFamily: typography.fontBold, fontWeight: 'bold' },
  },
};

// ==== src/theme/light.js ====
import colors from './colors';
import typography from './typography';

export default {
  dark: false,
  colors: {
    background: colors.backgroundLight,
    text: colors.textLight,
    primary: colors.primary,
    secondary: colors.secondary,
  },
  fonts: {
    regular: { fontFamily: typography.fontRegular, fontWeight: 'normal' },
    medium: { fontFamily: typography.fontMedium, fontWeight: '500' },
    semibold: { fontFamily: typography.fontSemiBold, fontWeight: '600' },
    bold: { fontFamily: typography.fontBold, fontWeight: 'bold' },
  },
};

// ==== src/theme/typography.js ====
import { Fonts } from '../assets/assets';

console.log('Fonts object:', Fonts);

const typography = {
  fontRegular: Fonts?.regular ?? 'System',
  fontMedium: Fonts?.medium ?? 'System',
  fontSemiBold: Fonts?.semibold ?? 'System',
  fontBold: Fonts?.bold ?? 'System',
};

export default typography;

// ==== src/utils/api.js ====

// ==== src/utils/constants.js ====

// ==== src/utils/helpers.js ====

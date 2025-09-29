import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Images } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import OnboardingFooter from '../../../components/common/OnboardingFooter';
import { useTranslation } from 'react-i18next';
import i18n from '../../../localization/i18n';
import useTheme from '../../../hooks/useTheme';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

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
      navigation.replace('SignIn');
    }
  };

// Gradient colors & locations based on theme
const gradientColors =
  theme.mode === 'dark'
    ? ['rgba(0,0,0,0)', 'rgba(0,0,0,0.7)', '#000000'] 
    : ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 0.4)', '#121212'];

const gradientLocations = theme.mode === 'dark'
  ? [0.55, 0.85, 1]   // start lower in dark mode
  : [0.35, 0.75, 1];  // keep higher in light mode


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    slide: {
      width,
      height,
      backgroundColor: theme.background,
    },
    imageContainer: {
      height: height * 0.65,
      width: '100%',
      overflow: 'hidden',
      marginTop: -StatusBar.currentHeight || 0,
    },
    image: {
      width: '100%',
      height: '100%',
    },
contentContainer: {
  flex: 1,
  justifyContent: 'center',
  paddingBottom: theme.mode === 'dark' ? 100 : 160, // less padding in dark
},

    textContainer: {
      paddingHorizontal: 30,
      alignItems: 'center',
    },
    title: {
      fontSize: 28,
      fontFamily: typography.fontBold,
      color: theme.text,
      marginBottom: 16,
      textAlign: 'center',
      lineHeight: 38,
    },
    titleBlue: {
      color: theme.primary,
    },
    description: {
      fontSize: 13,
      fontFamily: typography.fontRegular,
      color: theme.textSecondary,
      lineHeight: 24,
      textAlign: 'center',
      paddingHorizontal: 10,
    },
  });

  return (
    <View style={styles.container}>
      {/* Status bar adapts to theme */}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={theme.background === '#121212' ? 'light-content' : 'dark-content'}
      />

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
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} resizeMode="cover" />
              {/* Gradient overlay */}
              <LinearGradient
                colors={gradientColors}
                locations={gradientLocations}
                style={StyleSheet.absoluteFillObject}
              />
            </View>

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

      <OnboardingFooter
        total={slides.length}
        current={currentIndex}
        onNext={handleNext}
      />
    </View>
  );
};

export default OnboardingScreen;

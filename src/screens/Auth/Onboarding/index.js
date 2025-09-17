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
      navigation.replace('SignIn');
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
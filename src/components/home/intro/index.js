import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images } from '../../../assets/assets';

/**
 * Props:
 * - name?: string          // user first name for "Welcome, {name}!"
 */
const HomeIntro = ({ name = 'John' }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={styles.wrap}>
      {/* Greeting */}
      <Text style={[styles.welcomeText, { color: theme.text }]}>
        {t('home.intro.welcome_prefix', { defaultValue: 'Welcome, ' })}
        <Text style={[styles.nameText, { color: theme.primary }]}>
          {name}!
        </Text>
      </Text>
      <Text style={[styles.sub, { color: theme.textSecondary }]}>
        {t('home.intro.ready')}
      </Text>

      {/* Card */}
      <View style={[styles.card, { backgroundColor: theme.card_theme }]}>
        {/* Left copy - constrained to avoid overlapping with car */}
        <View style={styles.textContainer}>
          <Text style={[styles.title, { color: theme.text }]}>
            {t('home.intro.title')}
          </Text>
          <Text style={[styles.desc, { color: theme.textSecondary }]}>
            {t('home.intro.description')}
          </Text>
        </View>

        {/* Car image positioned at bottom right */}
        <Image
          source={Images.homeIntroCar}
          resizeMode="contain"
          style={styles.car}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { paddingTop: 8, paddingHorizontal: 16 },
  welcomeText: {
    fontSize: 16,
    fontFamily: typography.fontRegular,
  },
  nameText: {
    fontSize: 25,
    fontFamily: typography.fontSemiBold,
  },
  sub: {
    marginTop: 6,
    fontSize: 11,
    fontFamily: typography.fontSemiBold,
  },
  card: {
    marginTop: 14,
    borderRadius: 18,
    padding: 16,
    minHeight: 147,
    overflow: 'hidden',
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    paddingRight: 140, // Leave space for car image (175px width - some margin)
    justifyContent: 'center',
  },
  title: {
    fontSize: 17,
    lineHeight: 28,
    fontFamily: typography.fontBold,
  },
  desc: {
    marginTop: 10,
    fontSize: 11,
    lineHeight: 20,
    fontFamily: typography.fontRegular,
  },
  car: {
    position: 'absolute',
    bottom: -10,
    right: -50,
    width: 275,
    height: 175,
  },
});

export default HomeIntro;

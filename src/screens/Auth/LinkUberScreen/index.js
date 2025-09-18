import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Images, Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader'; // ✅ reuse your header

const LinkUberScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [usePhone, setUsePhone] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader title={t('linkUber.title')} />

      {/* Uber Image */}
      <Image source={Images.uberOnboarding} style={styles.logo} resizeMode="contain" />

      {/* Subtitle */}
      <Text style={styles.subtitle}>{t('linkUber.subtitle')}</Text>

      {/* Input */}
      <Text style={styles.inputLabel}>{t('linkUber.inputLabel')}</Text>
      <View style={styles.inputContainer}>
        <Image source={usePhone ? Icons.phone : Icons.mail} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('linkUber.placeholder')}
          placeholderTextColor="#999"
          keyboardType={usePhone ? 'phone-pad' : 'email-address'}
        />
      </View>
{/* Continue Button */}
<View style={styles.primaryButtonWrapper}>
  <PrimaryButton
    title={t('linkUber.continue')}
    onPress={() =>
      navigation.navigate('VerifyUberOTP', {
        destination: usePhone ? '(973) 281-6376' : 'you****z@gmail.com',
      })
    }
  />
</View>
      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>{t('linkUber.or')}</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Icons.google} style={styles.socialIcon} />
          <Text style={styles.socialText}>{t('linkUber.google')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Icons.apple} style={styles.socialIcon} />
          <Text style={styles.socialText}>{t('linkUber.apple')}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer Switch */}
      <TouchableOpacity
        style={styles.footer}
        onPress={() => setUsePhone(!usePhone)}
      >
        <Text style={styles.footerText}>
          {usePhone ? t('linkUber.switchToEmail') : t('linkUber.switchToPhone')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginVertical: 15,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    color: '#666',
    // textAlign: 'center',
    marginBottom: 10,
  },
    primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#888',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
  },
  primaryButtonWrapper: {
    width: '110%',
    alignSelf: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: '#797979',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 103,
    height: 44,
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialText: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: colors.secondary,
  },
  footer: {
    marginTop: 'auto',
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.fontBold,
    color: colors.primary,
  },
});

export default LinkUberScreen;

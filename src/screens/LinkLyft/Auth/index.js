import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { Images, Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import useTheme from '../../../hooks/useTheme';

const LinkLyftScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [phone, setPhone] = useState('');
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('linkLyft.title')} />

      <View style={styles.contentContainer}>
        {/* Lyft Logo */}
        <Image source={Images.lyftOnboarding} style={styles.logo} resizeMode="contain" />

        {/* Subtitle */}
        <Text style={styles.subtitle}>{t('linkLyft.subtitle')}</Text>

        {/* Input Label */}
        <Text style={[styles.inputLabel, { color: theme.text }]}>
          {t('linkLyft.inputLabel')}
        </Text>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Image source={Icons.phone} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder={t('linkLyft.placeholder')}
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Continue Button */}
        <View style={styles.primaryButtonWrapper}>
          <PrimaryButton
            title={t('linkLyft.continue')}
            onPress={() =>
              navigation.navigate('VerifyLyftOTP', {
                destination: phone || '(973) 281-6376',
              })
            }
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: { flex: 1, paddingHorizontal: 20 },
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
    marginBottom: 10,
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
    marginTop: 20,
  },
});

export default LinkLyftScreen;

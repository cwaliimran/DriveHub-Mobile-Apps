import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import PrimaryButton from '../../../components/common/PrimaryButton';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import { Images, Icons } from '../../../assets/assets';
import useTheme from '../../../hooks/useTheme';

const DoorDashAuthScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [usePhone, setUsePhone] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('linkDoorDash.title')} />

      {/* Logo */}
      <Image
        source={Images.doorDashOnboarding}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        {t('linkDoorDash.subtitle')}
      </Text>

      {/* Input Fields */}
      {usePhone ? (
        <>
          <Text style={[styles.inputLabel, { color: theme.text }]}>
            {t('linkDoorDash.phoneLabel')}
          </Text>
          <View style={[styles.inputContainer, { borderColor: theme.border }]}>
            <Image
              source={Icons.phone}
              style={[styles.icon, { tintColor: theme.textSecondary }]}
            />
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder={t('linkDoorDash.phonePlaceholder')}
              placeholderTextColor={theme.textSecondary}
              keyboardType="phone-pad"
            />
          </View>
        </>
      ) : (
        <>
          <Text style={[styles.inputLabel, { color: theme.text }]}>
            {t('linkDoorDash.emailLabel')}
          </Text>
          <View style={[styles.inputContainer, { borderColor: theme.border }]}>
            <Image
              source={Icons.mail}
              style={[styles.icon, { tintColor: theme.textSecondary }]}
            />
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder={t('linkDoorDash.emailPlaceholder')}
              placeholderTextColor={theme.textSecondary}
              keyboardType="email-address"
            />
          </View>

          <Text style={[styles.inputLabel, { color: theme.text }]}>
            {t('linkDoorDash.passwordLabel')}
          </Text>
          <View style={[styles.inputContainer, { borderColor: theme.border }]}>
            <Image
              source={Icons.lock}
              style={[styles.icon, { tintColor: theme.textSecondary }]}
            />
            <TextInput
              style={[styles.input, { color: theme.text }]}
              placeholder={t('linkDoorDash.passwordPlaceholder')}
              placeholderTextColor={theme.textSecondary}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
                style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Text style={styles.forgot}>{t('linkDoorDash.forgot')}</Text>
          </TouchableOpacity>
        </>
      )}

      {/* Continue Button */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('linkDoorDash.continue')}
                  onPress={() => navigation.replace('VerifyDoorDashOTP')}
        />
      </View>

      {/* Switch Login */}
      <TouchableOpacity
        style={styles.footerAlt}
        onPress={() => setUsePhone(!usePhone)}
      >
        <Text style={[styles.footerText, { color: theme.primary }]}>
          {usePhone
            ? t('linkDoorDash.switchToEmail')
            : t('linkDoorDash.switchToPhone')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  logo: { width: 120, height: 120, alignSelf: 'center', marginVertical: 15 },
  subtitle: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 15,
  },
  icon: { width: 22, height: 22, marginRight: 8 },
  input: { flex: 1, fontSize: 13, fontFamily: typography.fontRegular },
  eyeIcon: { width: 22, height: 22 },
  forgot: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: colors.primary,
    textAlign: 'right',
    marginBottom: 10,
  },
  primaryButtonWrapper: { width: '110%', alignSelf: 'center' },
  footerAlt: {
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  footerText: { fontSize: 14, fontFamily: typography.fontMedium },
});

export default DoorDashAuthScreen;

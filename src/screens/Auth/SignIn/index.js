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
import PrimaryButton from '../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Logo */}
      <Image
        source={theme.background === '#121212' ? Images.logoDark : Images.logoLight}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Heading */}
      <Text style={[styles.title, { color: theme.text }]}>{t('signin.title')}</Text>
      <Text style={[styles.subtitle, { color: theme.subheading }]}>
        {t('signin.subtitle')}
      </Text>

      <Text style={[styles.inputLabel, { color: theme.text }]}>{t('signin.email')}</Text>
      {/* Email */}
      <View style={[styles.inputContainer, { borderColor: theme.border }]}>
        <Image source={Icons.mail} style={[styles.icon, { tintColor: theme.textSecondary }]} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="johndoe@gmail.com"
          placeholderTextColor={theme.textSecondary}
          keyboardType="email-address"
        />
      </View>

      <Text style={[styles.inputLabel, { color: theme.text }]}>{t('signin.password')}</Text>
      {/* Password */}
      <View style={[styles.inputContainer, { borderColor: theme.border }]}>
        <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder="******"
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

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={[styles.forgot, { color: theme.primary }]}>{t('signin.forgot')}</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('signin.signinBtn')}
          onPress={() => navigation.replace('Home')}
        />
      </View>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
        <Text style={[styles.dividerText, { color: theme.textSecondary }]}>
          {t('signin.or')}
        </Text>
        <View style={[styles.divider, { backgroundColor: theme.border }]} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={[styles.socialButton, { borderColor: theme.border }]}>
          <Image source={Icons.google} style={styles.socialIcon} />
          <Text style={[styles.socialText, { color: theme.text }]}>{t('signin.google')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { borderColor: theme.border }]}>
          <Image source={Icons.apple} style={styles.socialIcon} />
          <Text style={[styles.socialText, { color: theme.text }]}>{t('signin.apple')}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={[styles.footerText, { color: theme.textSecondary }]}>
          {t('signin.noAccount')}{' '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={[styles.footerLink, { color: theme.primary }]}>{t('signin.create')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logo: {
    width: 179,
    height: 64,
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  title: {
    fontSize: 25,
    fontFamily: typography.fontBold,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 8,
  },
  primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3,
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  forgot: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    textAlign: 'right',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  divider: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 13,
    fontFamily: typography.fontMedium,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 103,
    height: 44,
    marginHorizontal: 5,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  socialText: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  footerLink: {
    fontSize: 13,
    fontFamily: typography.fontBold,
  },
});

export default SignInScreen;

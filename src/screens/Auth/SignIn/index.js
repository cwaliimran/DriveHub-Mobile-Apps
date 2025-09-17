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

const SignInScreen = ({ navigation }) => {
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={Images.logo} style={styles.logo} resizeMode="contain" />

      {/* Heading */}
      <Text style={styles.title}>{t('signin.title')}</Text>
      
      <Text style={styles.subtitle}>{t('signin.subtitle')}</Text>
<Text style={styles.inputLabel}>{t('signin.email')}</Text>
      {/* Email */}
      <View style={styles.inputContainer}>
        <Image source={Icons.mail} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('signin.email')}
          placeholderTextColor="#999"
          keyboardType="email-address"
        />
      </View>
<Text style={styles.inputLabel}>{t('signin.password')}</Text>
      {/* Password */}
      <View style={styles.inputContainer}>
        <Image source={Icons.lock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('signin.password')}
          placeholderTextColor="#999"
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Image
            source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
            style={styles.eyeIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.forgot}>{t('signin.forgot')}</Text>
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
        <View style={styles.divider} />
        <Text style={styles.dividerText}>{t('signin.or')}</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Buttons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Icons.google} style={styles.socialIcon} />
          <Text style={styles.socialText}>{t('signin.google')}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={Icons.apple} style={styles.socialIcon} />
          <Text style={styles.socialText}>{t('signin.apple')}</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>{t('signin.noAccount')} </Text>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.footerLink}>{t('signin.create')}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  inputLabel: {
  fontSize: 14,
  fontFamily: typography.fontMedium,
  color: colors.textLight,
  marginBottom: 8,
//   marginTop: 2,
},

primaryButtonWrapper: {
  width: '110%',       // match input box width
//   marginTop: 20,
  alignSelf: 'center', // center horizontally inside container
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
    color: colors.textLight,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: '#666',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 3, // ⬅️ Extra padding makes the box taller
    marginBottom: 8,
  },

  icon: {
    width: 24,
    height: 24,
    tintColor: '#888',
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
  },
  eyeIcon: {
    width: 24,
    height: 24,
    tintColor: '#888',
  },
  forgot: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: colors.primary,
    textAlign: 'right',
    // marginBottom: 5,
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
    fontFamily: typography.fontMedium,
    color: '#666',
  },
// Replace your existing socialButton style with this:
socialButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center', // Center the content
  borderWidth: 1,
  borderColor: '#ddd',
  borderRadius: 10,
  paddingVertical: 10,
  paddingHorizontal: 20,
  width: 103,  // Fixed width
  height: 44,  // Fixed height
  marginHorizontal: 5,
},

// You might also want to update the socialContainer to center the buttons:
socialContainer: {
  flexDirection: 'row',
  justifyContent: 'center', // Center the buttons instead of space-between
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
    color: colors.secondary,
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
    color: '#666',
  },
  footerLink: {
    fontSize: 13,
    fontFamily: typography.fontBold,
    color: colors.primary,
  },
});

export default SignInScreen;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
} from 'react-native';
import { Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';

const ForgotPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      {/* App Header */}
      <AppHeader title={t('forgotPassword.title')}onBack={() => navigation.goBack()} />

      <View style={styles.content}>

        <Text style={styles.subtitle}>{t('forgotPassword.subtitle')}</Text>

        {/* Email Label */}
        <Text style={styles.label}>{t('forgotPassword.email')}</Text>

        {/* Email Input */}
        <View style={styles.inputContainer}>
          <Image source={Icons.mail} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="johndoe@gmail.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
          />
        </View>

        {/* Continue Button */}
                <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('forgotPassword.continue')}
          onPress={() => navigation.navigate('ForgotVerifyOTP')}
        />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: {
    fontSize: 20,
    fontFamily: typography.fontBold,
    marginBottom: 10,
    color: colors.textLight,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: '#666',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
    marginBottom: 8,
  },
  inputContainer: {
      paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 10,
  },
  primaryButtonWrapper: {
  width: '110%',       // match input box width
  alignSelf: 'center', // center horizontally inside container
},
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: colors.textLight,
  },
});

export default ForgotPasswordScreen;

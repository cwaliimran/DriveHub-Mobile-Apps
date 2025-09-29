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
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';
const FIELD_HEIGHT = 50; 
const ForgotPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* App Header */}
      <AppHeader title={t('forgotPassword.title')} onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          {t('forgotPassword.subtitle')}
        </Text>

        {/* Email Label */}
        <Text style={[styles.label, { color: theme.text }]}>
          {t('forgotPassword.email')}
        </Text>

        {/* Email Input */}
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.mail} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="johndoe@gmail.com"
            placeholderTextColor={theme.textSecondary}
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
  container: { flex: 1 },
  content: { padding: 20 },
  title: { fontSize: 20, fontFamily: typography.fontBold, marginBottom: 10 },
  subtitle: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 20 },
  label: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 8 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: FIELD_HEIGHT,                 // ← consistent field height
    marginBottom: 8,
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  input: { flex: 1, fontSize: 13, fontFamily: typography.fontRegular },
});

export default ForgotPasswordScreen;

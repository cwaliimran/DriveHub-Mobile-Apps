import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import typography from '../../../theme/typography';
import PrimaryButton from '../../../components/common/PrimaryButton';
import OTPInput from '../../../components/common/OTPInput';
import ResendButton from '../../../components/common/ResendButton';
import useTheme from '../../../hooks/useTheme';

const ForgotVerifyOTPScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [code, setCode] = useState('');
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title="Verify OTP" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        {/* Subtitle */}
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          {t('otp.subtitle')} <Text style={{ fontFamily: typography.fontBold, color: theme.primary }}>johndoe@gmail.com</Text>
        </Text>

        {/* Enter Code */}
        <Text style={[styles.label, { color: theme.text }]}>{t('otp.enterCode')}</Text>
        <OTPInput code={code} setCode={setCode} />

        {/* Verify Button */}
        <View style={styles.primaryButtonWrapper}>
          <PrimaryButton
            title={t('otp.verify')}
            onPress={() => navigation.navigate('ResetPassword')}
          />
        </View>

        {/* Did not receive */}
        <Text style={[styles.didnt, { color: theme.text }]}>
          {t('otp.didntReceive')}
        </Text>
        {seconds > 0 ? (
          <Text style={[styles.timer, { color: theme.textSecondary }]}>
            {t('otp.sendAgain', { seconds })}
          </Text>
        ) : (
          <ResendButton
            title={t('otp.resend')}
            onPress={() => {
              setSeconds(45);
              console.log('Resend OTP triggered');
            }}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 10,
  },
  didnt: {
    fontSize: 15,
    fontFamily: typography.fontBold,
    marginTop: 15,
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
  },
  timer: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    marginTop: 10,
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
  },
});

export default ForgotVerifyOTPScreen;

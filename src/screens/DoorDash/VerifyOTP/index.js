import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import DoorDashOTPInput from '../../../components/common/DoorDashOTPInput';
import PrimaryButton from '../../../components/common/PrimaryButton';
import ResendButton from '../../../components/common/ResendButton';
import typography from '../../../theme/typography';
import useTheme from '../../../hooks/useTheme';

const VerifyDoorDashOTPScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendAvailable, setResendAvailable] = useState(false);
  const theme = useTheme();

  const { destination, loginType } = route.params || {}; 
  // loginType: "phone" | "email"

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('verifyDoorDash.title')} />

      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        {loginType === 'phone'
          ? t('verifyDoorDash.subtitleSMS')
          : t('verifyDoorDash.subtitleEmail')}
      </Text>
      <Text style={[styles.highlight, { color: theme.primary }]}>
        {destination}{' '}
        <Text style={{ color: 'red' }}>{t('verifyDoorDash.otpExpire')}</Text>
      </Text>

      {/* OTP */}
      <View style={styles.otpSection}>
        <Text style={[styles.label, { color: theme.text }]}>
          {t('verifyDoorDash.enterCode')}
        </Text>
        <View style={styles.otpInputWrapper}>
          <DoorDashOTPInput code={code} setCode={setCode} length={4} />
        </View>
      </View>

      {/* Verify */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('verifyDoorDash.verify')}
          onPress={() => navigation.replace('SetupAccessibility')}
        />
      </View>

      {/* Resend */}
      <Text style={[styles.didnt, { color: theme.text }]}>
        {t('verifyDoorDash.didNotReceive')}
      </Text>
      {resendAvailable ? (
        <ResendButton
          title={t('verifyDoorDash.resend')}
          onPress={() => {
            setTimer(45);
            setResendAvailable(false);
          }}
          style={styles.resendButton}
        />
      ) : (
        <Text style={[styles.timer, { color: theme.textSecondary }]}>
          {t('verifyDoorDash.sendAgain', { seconds: timer })}
        </Text>
      )}

      {/* Switch Login */}
      <TouchableOpacity style={styles.footerAlt}>
        <Text style={[styles.footerText, { color: theme.primary }]}>
          {loginType === 'phone'
            ? t('verifyDoorDash.switchToEmail')
            : t('verifyDoorDash.switchToPhone')}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  subtitle: { fontSize: 14, fontFamily: typography.fontRegular, marginTop: 10, marginLeft: 10 },
  highlight: { fontSize: 14, fontFamily: typography.fontBold, marginBottom: 20, marginLeft: 10 },
  otpSection: { marginBottom: 10, marginTop: 10, width: '100%' },
  label: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 10, marginLeft: 10 },
  otpInputWrapper: {
    width: '105%',
    alignSelf: 'center',
    alignItems: 'center',
  },
  didnt: { fontSize: 15, fontFamily: typography.fontBold, marginTop: 15, alignSelf: 'center' },
  timer: { fontSize: 13, fontFamily: typography.fontRegular, marginTop: 5, textAlign: 'center' },
  primaryButtonWrapper: { width: '105%', alignSelf: 'center' },
  footerAlt: {
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  footerText: { fontSize: 14, fontFamily: typography.fontMedium },
  resendButton: {
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
});

export default VerifyDoorDashOTPScreen;
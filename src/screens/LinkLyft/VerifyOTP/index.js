import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import LyftOTPInput from '../../../components/common/LyftOTPInput';
import PrimaryButton from '../../../components/common/PrimaryButton';
import ResendButton from '../../../components/common/ResendButton';
import typography from '../../../theme/typography';
import useTheme from '../../../hooks/useTheme';

const VerifyLyftOTPScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendAvailable, setResendAvailable] = useState(false);
  const theme = useTheme();

  const destination = route.params?.destination || '(973) 281-6376';

  // Timer countdown
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
      {/* Header */}
      <AppHeader title={t('linkLyft.title')} />

      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        {t('verifyLyft.subtitle')}
      </Text>
      <Text style={[styles.highlight, { color: theme.primary }]}>
        {destination}
      </Text>

      {/* OTP Input */}
      <View style={styles.otpSection}>
        <Text style={[styles.label, { color: theme.text }]}>
          {t('verifyLyft.enterCode')}
        </Text>
        
        <LyftOTPInput code={code} setCode={setCode} />
      </View>

      {/* Verify Button */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('verifyLyft.verify')}
          onPress={() => navigation.replace('LinkLyftLicense')}
        />
      </View>

      {/* Resend Logic */}
      <Text style={[styles.didnt, { color: theme.text }]}>
        {t('verifyLyft.didNotReceive')}
      </Text>
      {resendAvailable ? (
        <ResendButton
          title={t('verifyLyft.resend')}
          onPress={() => {
            setTimer(45);
            setResendAvailable(false);
          }}
          style={styles.resendButton}
        />
      ) : (
        <Text style={[styles.timer, { color: theme.textSecondary }]}>
          {t('verifyLyft.sendAgain', { seconds: timer })}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 10 },
  subtitle: { fontSize: 14, fontFamily: typography.fontRegular, marginTop: 10, marginLeft: 10 },
  highlight: { fontSize: 14, fontFamily: typography.fontBold, marginBottom: 20, marginLeft: 10 },
  otpSection: { marginBottom: 10, marginTop: 10, width: '100%' },
  label: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 10, marginLeft: 10 },
  didnt: { fontSize: 15, fontFamily: typography.fontBold, marginTop: 15, alignSelf: 'center' },
  timer: { fontSize: 13, fontFamily: typography.fontRegular, marginTop: 5, textAlign: 'center' },
  primaryButtonWrapper: { width: '100%', alignSelf: 'center' },
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

export default VerifyLyftOTPScreen;

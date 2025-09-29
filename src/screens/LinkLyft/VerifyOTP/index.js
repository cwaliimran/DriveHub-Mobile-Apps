import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import LyftOTPInput from '../../../components/common/LyftOTPInput';
import PrimaryButton from '../../../components/common/PrimaryButton';
import ResendButton from '../../../components/common/ResendButton';
import typography from '../../../theme/typography';
import useTheme from '../../../hooks/useTheme';

const PADDING = 16; // ← match AppHeader’s internal horizontal padding if you know it

const VerifyLyftOTPScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendAvailable, setResendAvailable] = useState(false);
  const theme = useTheme();

  const destination = route.params?.destination || '(973) 281-6376';

  useEffect(() => {
    if (timer > 0) {
      const id = setTimeout(() => setTimer((s) => s - 1), 1000);
      return () => clearTimeout(id);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header flush to edges */}
      <AppHeader title={t('linkLyft.title')} />

      {/* Everything else gets the padding */}
      <View style={[styles.content, { paddingHorizontal: PADDING }]}>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          {t('verifyLyft.subtitle')}
        </Text>
        <Text style={[styles.highlight, { color: theme.primary }]}>
          {destination}
        </Text>

        <View style={styles.otpSection}>
          <Text style={[styles.label, { color: theme.text }]}>
            {t('verifyLyft.enterCode')}
          </Text>
          <LyftOTPInput code={code} setCode={setCode} />
        </View>

        {/* Buttons stretch within padded content */}
        <PrimaryButton
          title={t('verifyLyft.verify')}
          onPress={() => navigation.replace('LinkLyftLicense')}
          style={styles.fullWidth}
        />

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
            style={[styles.resendButton, { borderColor: theme.textSecondary }]}
          />
        ) : (
          <Text style={[styles.timer, { color: theme.textSecondary }]}>
            {t('verifyLyft.sendAgain', { seconds: timer })}
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1 },

  // removed marginLeft — let the content padding do the work
  subtitle: { fontSize: 14, fontFamily: typography.fontRegular, marginTop: 10 },
  highlight: { fontSize: 14, fontFamily: typography.fontBold, marginBottom: 20 },

  otpSection: { marginBottom: 10, marginTop: 10, width: '100%' },
  label: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 10 },

  // make buttons align to content width
  fullWidth: { alignSelf: 'stretch' },

  didnt: { fontSize: 15, fontFamily: typography.fontBold, marginTop: 15, textAlign: 'center' },
  timer: { fontSize: 13, fontFamily: typography.fontRegular, marginTop: 5, textAlign: 'center' },

  resendButton: {
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default VerifyLyftOTPScreen;

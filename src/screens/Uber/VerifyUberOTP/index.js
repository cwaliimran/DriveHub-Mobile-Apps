import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import UberOTPInput from '../../../components/common/UberOTPInput';
import PrimaryButton from '../../../components/common/PrimaryButton';
import ResendButton from '../../../components/common/ResendButton';
import typography from '../../../theme/typography';
import VerifyAlternativeModal from '../../../components/common/VerifyAlternativeModal';
import useTheme from '../../../hooks/useTheme';

const VerifyUberOTPScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendAvailable, setResendAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const destination = route.params?.destination || 'you****z@gmail.com';

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
      <AppHeader title={t('linkUber.title')} />

      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        {t('verifyUber.subtitle')}
      </Text>
      <Text style={[styles.highlight, { color: theme.primary }]}>{destination}</Text>

      <View style={styles.otpSection}>
        <Text style={[styles.label, { color: theme.text }]}>
          {t('verifyUber.enterCode')}
        </Text>
        <UberOTPInput code={code} setCode={setCode} length={4} />
      </View>

      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('verifyUber.verify')}
          onPress={() => navigation.navigate('LinkUberPassword')}
        />
      </View>

      <Text style={[styles.didnt, { color: theme.text }]}>
        {t('verifyUber.didNotReceive')}
      </Text>
      {resendAvailable ? (
        <ResendButton
          title={t('verifyUber.resend')}
          onPress={() => {
            setTimer(45);
            setResendAvailable(false);
          }}
          style={styles.resendButton}
        />
      ) : (
        <Text style={[styles.timer, { color: theme.textSecondary }]}>
          {t('verifyUber.sendAgain', { seconds: timer })}
        </Text>
      )}

      <TouchableOpacity style={styles.footerAlt} onPress={() => setModalVisible(true)}>
        <Text style={[styles.footerText, { color: theme.primary }]}>
          {t('verifyUber.tryAnother')}
        </Text>
      </TouchableOpacity>

      <VerifyAlternativeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        destination={destination}
        navigation={navigation}
      />
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

export default VerifyUberOTPScreen;

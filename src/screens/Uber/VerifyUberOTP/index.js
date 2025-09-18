import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import UberOTPInput from '../../../components/common/UberOTPInput';
import PrimaryButton from '../../../components/common/PrimaryButton';
import ResendButton from '../../../components/common/ResendButton'; // Import ResendButton
import colors from '../../../theme/colors';
import typography from '../../../theme/typography';
import VerifyAlternativeModal from '../../../components/common/VerifyAlternativeModal';

const VerifyUberOTPScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [timer, setTimer] = useState(45);
  const [resendAvailable, setResendAvailable] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  // Masked value
  const destination = route.params?.destination || 'you****z@gmail.com';

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setResendAvailable(true);
    }
  }, [timer]);

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader title={t('linkUber.title')} />

      {/* Subtitle */}
      <Text style={styles.subtitle}>{t('verifyUber.subtitle')}</Text>
      <Text style={styles.highlight}>{destination}</Text>

      {/* OTP Input */}
      <View style={styles.otpSection}>
        <Text style={styles.label}>{t('verifyUber.enterCode')}</Text>
        <UberOTPInput code={code} setCode={setCode} length={4} />
      </View>

{/* Verify Button */}
<View style={styles.primaryButtonWrapper}>
  <PrimaryButton
    title={t('verifyUber.verify')}
    onPress={() => {
      console.log('Verify pressed', code);
      // ✅ Navigate to Password screen
      navigation.navigate('LinkUberPassword');
    }}
  />
</View>


      {/* Did not receive */}
      <Text style={styles.didnt}>{t('verifyUber.didNotReceive')}</Text>
      {resendAvailable ? (
        <ResendButton
          title={t('verifyUber.resend')}
          onPress={() => {
            setTimer(45);
            setResendAvailable(false);
            console.log('Resend OTP triggered');
          }}
          style={styles.resendButton} // Apply consistent style
        />
      ) : (
        <Text style={styles.timer}>
          {t('verifyUber.sendAgain', { seconds: timer })}
        </Text>
      )}

      {/* Try Another Way */}
      <TouchableOpacity style={styles.footerAlt} onPress={() => setModalVisible(true)}>
        <Text style={styles.footerText}>{t('verifyUber.tryAnother')}</Text>
      </TouchableOpacity>

      {/* Modal */}
      <VerifyAlternativeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        destination={destination}
        navigation={navigation}  // pass nav
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    marginTop: 10,
    marginLeft: 10,
  },
  highlight: {
    fontSize: 14,
    fontFamily: typography.fontBold,
    color: colors.primary,
    marginBottom: 20,
    marginLeft: 10,
  },
  otpSection: {
    alignItems: 'stretch',
    marginBottom: 10,
    marginTop: 10,
    width: '100%',
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
    marginBottom: 10,
    marginLeft: 10,
  },
  resendWrapper: { marginTop: 20, alignItems: 'center' },
  didnt: {
    fontSize: 15,
    fontFamily: typography.fontBold,
    color: colors.textLight,
    marginTop: 15,
    alignSelf: 'center',
  },
  timer: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  primaryButtonWrapper: {
    width: '105%',
    alignSelf: 'center',
  },
  footerAlt: {
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    paddingHorizontal: 20, // Equal padding on both sides
  },
  footerText: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.primary,
  },
  resendButton: {
    paddingHorizontal: 20,  // Match the padding with the "Try Another Way" button
    paddingVertical: 14,    // Match the padding with the "Try Another Way" button
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',          // Ensure it's full width
    marginBottom: 20,       // Space from the next element
  },
});

export default VerifyUberOTPScreen;

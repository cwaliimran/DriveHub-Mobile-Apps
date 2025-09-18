import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import OTPInput from '../../../components/common/OTPInput';
import ResendButton from '../../../components/common/ResendButton';
import ConfirmationModal from '../../../components/common/ConfirmationModal';

const VerifyOTPScreen = ({ navigation }) => {
    const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  return (
    <View style={styles.container}>
      <AppHeader title="Drive Hub" onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        {/* Title */}
        <Text style={styles.title}>{t('otp.title')}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>
          {t('otp.subtitle')} <Text style={styles.email}>johndoe@gmail.com</Text>
        </Text>

        {/* Enter Code */}
        <Text style={styles.label}>{t('otp.enterCode')}</Text>
        <OTPInput code={code} setCode={setCode} />

        {/* Verify Button */}
                <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('otp.verify')}
            onPress={() => setShowModal(true)}
        />
        </View>
        <ConfirmationModal
  visible={showModal}
  onClose={() => {
    setShowModal(false);
    navigation.replace('PlatformSelection'); // or SignIn
  }}
/>

        {/* Did not receive */}
        <Text style={styles.didnt}>{t('otp.didntReceive')}</Text>
        {seconds > 0 ? (
          <Text style={styles.timer}>{t('otp.sendAgain', { seconds })}</Text>
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
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  title: {
    fontSize: 25,
    fontFamily: typography.fontBold,
    marginBottom: 10,
    color: colors.textLight,
  },
  primaryButtonWrapper: {
  width: '110%',       // match input box width
  alignSelf: 'center', // center horizontally inside container
},
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: '#666',
    marginBottom: 20,
  },
  email: {
    fontFamily: typography.fontBold,
    fontSize: 14,
    color: colors.primary,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
    marginBottom: 10,
  },
didnt: {
  fontSize: 15,
  fontFamily: typography.fontBold,
  color: colors.textLight,
  marginTop: 15,
  alignSelf: 'center',
  width: '100%',        // make it span the row
  textAlign: 'center',  // center the text
},
timer: {
  fontSize: 13,
  fontFamily: typography.fontRegular,
  color: '#666',
  marginTop: 10,
  alignSelf: 'center',
  width: '100%',
  textAlign: 'center',
},

});

export default VerifyOTPScreen;

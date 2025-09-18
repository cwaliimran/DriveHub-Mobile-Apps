import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import PrimaryButton from '../../../components/common/PrimaryButton';
import VerifyAlternativeModal from '../../../components/common/VerifyAlternativeModal';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import { Icons } from '../../../assets/assets';

const LinkUberPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // Mock user name
  const userName = 'John';

  return (
    <View style={styles.container}>
      {/* Header */}
      <AppHeader title={t('linkUber.title')} />

      {/* Welcome text */}
      <Text style={styles.welcome}>
        {t('linkUberPassword.welcome')} <Text style={styles.bold}>{userName}</Text>
      </Text>

      {/* Password Label */}
      <Text style={styles.inputLabel}>{t('linkUberPassword.password')}</Text>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <Image source={Icons.lock} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder={t('linkUberPassword.password')}
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

      {/* Continue Button */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
  title={t('linkUberPassword.continue')}
  onPress={() => navigation.replace('SetupAccessibility')}
        />
      </View>

      {/* Try Another Way */}
      <TouchableOpacity style={styles.footerAlt} onPress={() => setModalVisible(true)}>
        <Text style={styles.footerText}>{t('verifyUber.tryAnother')}</Text>
      </TouchableOpacity>

      {/* Modal with all 3 options */}
      <VerifyAlternativeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        destination="you****@gmail.com" // pass email so modal shows all 3
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#fff',
  paddingHorizontal: 15, // 👈 match AppHeader padding
},
  welcome: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    marginVertical: 15,
  },
  bold: {
    fontFamily: typography.fontBold,
    color: colors.textLight,
  },
  inputLabel: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
    marginBottom: 8,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginBottom: 20,
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: '#888',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
  },
  eyeIcon: {
    width: 22,
    height: 22,
    tintColor: '#888',
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
    paddingHorizontal: 20,
  },
  footerText: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.primary,
  },
});

export default LinkUberPasswordScreen;

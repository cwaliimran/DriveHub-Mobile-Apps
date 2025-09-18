import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Icons } from '../../../assets/assets';
import typography from '../../../theme/typography';
import colors from '../../../theme/colors';
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import ConfirmationModal from '../../../components/common/ConfirmationModal';
import { useTranslation } from 'react-i18next';
import PasswordUpdatedModal from '../../../components/common/PasswordUpdatedModal';

const ResetPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* App Header */}
      <AppHeader title={t('resetPassword.title')} onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={styles.subtitle}>{t('resetPassword.subtitle')}</Text>

        {/* Password */}
        <Text style={styles.label}>{t('resetPassword.password')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="******"
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

        {/* Confirm Password */}
        <Text style={styles.label}>{t('resetPassword.confirmPassword')}</Text>
        <View style={styles.inputContainer}>
          <Image source={Icons.lock} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="******"
            placeholderTextColor="#999"
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image
              source={showConfirmPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>

        {/* Reset Button */}
                        <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('resetPassword.resetBtn')}
          onPress={() => setModalVisible(true)}
        />
        </View>
        
      </View>

      {/* Confirmation Modal */}
<PasswordUpdatedModal
  visible={modalVisible}
  onClose={() => {
    setModalVisible(false);
    navigation.replace('SignIn'); // redirect to login
  }}
/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: '#666',
    marginBottom: 10,
  },
    primaryButtonWrapper: {
  width: '110%',       // match input box width
  alignSelf: 'center', // center horizontally inside container
},
  label: {
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
    marginBottom: 8,
  },
  icon: { width: 20, height: 20, tintColor: '#888', marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 14,
    fontFamily: typography.fontMedium,
    color: colors.textLight,
  },
  eyeIcon: { width: 20, height: 20, tintColor: '#888' },
});

export default ResetPasswordScreen;

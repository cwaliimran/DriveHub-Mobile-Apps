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
import PrimaryButton from '../../../components/common/PrimaryButton';
import AppHeader from '../../../components/common/AppHeader';
import { useTranslation } from 'react-i18next';
import PasswordUpdatedModal from '../../../components/common/PasswordUpdatedModal';
import useTheme from '../../../hooks/useTheme';
const FIELD_HEIGHT = 50; 
const ResetPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* App Header */}
      <AppHeader title={t('resetPassword.title')} onBack={() => navigation.goBack()} />

      <View style={styles.content}>
        <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
          {t('resetPassword.subtitle')}
        </Text>

        {/* Password */}
        <Text style={[styles.label, { color: theme.text }]}>
          {t('resetPassword.password')}
        </Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="******"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={[styles.label, { color: theme.text }]}>
          {t('resetPassword.confirmPassword')}
        </Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder="******"
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image
              source={showConfirmPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
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
          navigation.replace('SignIn');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 20 },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 10,
  },
  primaryButtonWrapper: {
    width: '100%',
    alignSelf: 'center',
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 8,
  },
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
  input: { flex: 1, fontSize: 14, fontFamily: typography.fontMedium },
  eyeIcon: { width: 20, height: 20 },
});

export default ResetPasswordScreen;

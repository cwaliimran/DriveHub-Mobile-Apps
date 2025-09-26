import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import AppHeader from '../../../../../components/common/AppHeader';
import PrimaryButton from '../../../../../components/common/PrimaryButton';
import typography from '../../../../../theme/typography';
import colors from '../../../../../theme/colors';
import { Icons } from '../../../../../assets/assets';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../../hooks/useTheme';
import ResetSuccessModal from '../../../../../components/more/ResetSuccessModal';

const ResetPasswordScreenMore = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleReset = () => {
    // Normally API call here
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header - no padding */}
      <AppHeader title={t('resetPassword.title')} onBack={() => navigation.goBack()} />

      {/* Content with padding */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>{t('resetPassword.subtitle')}</Text>

        {/* Password */}
        <Text style={[styles.label, { color: theme.text }]}>{t('resetPassword.password')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder={t('resetPassword.password')}
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={showPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password */}
        <Text style={[styles.label, { color: theme.text }]}>{t('resetPassword.confirmPassword')}</Text>
        <View style={[styles.inputContainer, { borderColor: theme.border }]}>
          <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
          <TextInput
            style={[styles.input, { color: theme.text }]}
            placeholder={t('resetPassword.confirmPassword')}
            placeholderTextColor={theme.textSecondary}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Image
              source={showConfirmPassword ? Icons.eyeOpen : Icons.eyeClose}
              style={[styles.eyeIcon, { tintColor: theme.textSecondary }]}
            />
          </TouchableOpacity>
        </View>

        {/* Button */}
        <View style={styles.btnWrapper}>
          <PrimaryButton title={t('resetPassword.title')} onPress={handleReset} />
        </View>
      </View>

      {/* Modal */}
      <ResetSuccessModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 }, // no padding here
  content: { flex: 1, padding: 16 }, // ✅ content has padding
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
  },
  icon: { width: 20, height: 20, marginRight: 10 },
  input: {
    flex: 1,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  eyeIcon: { width: 20, height: 20 },
  btnWrapper: { marginTop: 'auto', marginBottom: 20 },
});

export default ResetPasswordScreenMore;

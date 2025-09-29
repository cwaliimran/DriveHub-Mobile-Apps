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
import { Icons } from '../../../assets/assets';
import useTheme from '../../../hooks/useTheme';
const FIELD_HEIGHT = 50; 
const LinkUberPasswordScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [showPassword, setShowPassword] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const theme = useTheme();

  const userName = 'John';

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('linkUber.title')} />

      <Text style={[styles.welcome, { color: theme.textSecondary }]}>
        {t('linkUberPassword.welcome')} <Text style={[styles.bold, { color: theme.text }]}>{userName}</Text>
      </Text>

      <Text style={[styles.inputLabel, { color: theme.text }]}>{t('linkUberPassword.password')}</Text>

      <View style={[styles.inputContainer, { borderColor: theme.border }]}>
        <Image source={Icons.lock} style={[styles.icon, { tintColor: theme.textSecondary }]} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder={t('linkUberPassword.password')}
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

      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('linkUberPassword.continue')}
          onPress={() => navigation.replace('SetupAccessibility')}
        />
      </View>

      {/* Try Another Way */}
      <TouchableOpacity style={[styles.footerAlt, { borderColor: theme.primary }]} onPress={() => setModalVisible(true)}>
        <Text style={[styles.footerText, { color: theme.primary }]}>{t('verifyUber.tryAnother')}</Text>
      </TouchableOpacity>

      <VerifyAlternativeModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        destination="you****@gmail.com"
        navigation={navigation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  welcome: { fontSize: 14, fontFamily: typography.fontRegular, marginVertical: 15 },
  bold: { fontFamily: typography.fontBold },
  inputLabel: { fontSize: 14, fontFamily: typography.fontMedium, marginBottom: 8 },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: FIELD_HEIGHT,                 // ← consistent field height
    marginBottom: 8,
  },
  icon: { width: 22, height: 22, marginRight: 8 },
  input: { flex: 1, fontSize: 13, fontFamily: typography.fontRegular },
  eyeIcon: { width: 22, height: 22 },
  primaryButtonWrapper: { width: '100%', alignSelf: 'center' },
  footerAlt: {
    marginTop: 'auto',
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerText: { fontSize: 14, fontFamily: typography.fontMedium },
});

export default LinkUberPasswordScreen;

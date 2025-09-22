import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import PrimaryButton from '../../../components/common/PrimaryButton';
import typography from '../../../theme/typography';
import { Icons } from '../../../assets/assets'; // license.png
import useTheme from '../../../hooks/useTheme';

const LinkLyftLicenseScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [license, setLicense] = useState('');

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('linkLyft.title')} />

      {/* Subtitle */}
      <Text style={[styles.subtitle, { color: theme.textSecondary }]}>
        {t('linkLyftLicense.subtitle')}
      </Text>

      {/* Input Label */}
      <Text style={[styles.inputLabel, { color: theme.text }]}>
        {t('linkLyftLicense.inputLabel')}
      </Text>

      {/* Input */}
      <View style={[styles.inputContainer, { borderColor: theme.border }]}>
        <Image source={Icons.license} style={[styles.icon, { tintColor: theme.textSecondary }]} />
        <TextInput
          style={[styles.input, { color: theme.text }]}
          placeholder={t('linkLyftLicense.placeholder')}
          placeholderTextColor={theme.textSecondary}
          value={license}
          onChangeText={setLicense}
        />
      </View>

      {/* Continue */}
      <View style={styles.primaryButtonWrapper}>
        <PrimaryButton
          title={t('linkLyftLicense.continue')}
          disabled={!license.trim()}
          onPress={() => navigation.replace('SetupAccessibility')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 15 },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginVertical: 15,
  },
  inputLabel: {
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
    paddingVertical: 4,
    marginBottom: 20,
  },
  icon: { width: 22, height: 22, marginRight: 8 },
  input: { flex: 1, fontSize: 13, fontFamily: typography.fontRegular },
  primaryButtonWrapper: { width: '110%', alignSelf: 'center' },
});

export default LinkLyftLicenseScreen;

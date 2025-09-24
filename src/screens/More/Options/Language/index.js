import React, { useState } from 'react';
import { View, StyleSheet, useColorScheme } from 'react-native';
import { Icons } from '../../../../assets/assets';
import typography from '../../../../theme/typography';
import colors from '../../../../theme/colors';
import LanguageOption from '../../../../components/common/LanguageOption';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18n from '../../../../localization/i18n';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../../components/common/AppHeader';

const LanguageMoreScreen = ({ navigation }) => {
  const scheme = useColorScheme();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(null);

  const languages = [
    { key: 'en', label: 'English', flag: Icons.flagUK },
    { key: 'es', label: 'Spanish', flag: Icons.flagSpain },
    { key: 'tr', label: 'Turkish', flag: Icons.flagTurkey },
  ];

  return (
    <View style={[styles.container, { backgroundColor: scheme === 'dark' ? '#000' : '#fff' }]}>
      {/* ✅ Use common AppHeader */}
      <AppHeader title={t('select_language')} />

      {/* Language Options */}
      <View style={styles.optionsWrapper}>
        {languages.map(lang => (
          <LanguageOption
            key={lang.key}
            flag={lang.flag}
            label={lang.label}
            selected={selected === lang.key}
            onPress={() => setSelected(lang.key)}
          />
        ))}
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButton}>
        <PrimaryButton
          title={t('select')}
          onPress={async () => {
            try {
              await AsyncStorage.setItem('appLanguage', selected);
              await i18n.changeLanguage(selected);
            } catch (e) {
              console.log('Error saving language:', e);
            }
            navigation.navigate('More'); // ✅ back to More screen
          }}
          disabled={!selected}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  optionsWrapper: {
    flex: 1,
    paddingHorizontal: 0,
    paddingVertical: 0,
    marginTop: 10,
  },
  bottomButton: {
    marginBottom: 40,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
  },
});

export default LanguageMoreScreen;

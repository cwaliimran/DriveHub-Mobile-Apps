import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icons } from '../../../../assets/assets';
import typography from '../../../../theme/typography';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import ThemeOption from '../../../../components/more/ThemeOption';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../../components/common/AppHeader';
import useTheme from '../../../../hooks/useTheme';

const ThemeMoreScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selected, setSelected] = useState(null);

  const themes = [
    { key: 'dark', label: t('theme.dark'), icon: Icons.darkMode },
    { key: 'light', label: t('theme.light'), icon: Icons.lightMode },
  ];

  // Load saved theme
  useEffect(() => {
    const loadTheme = async () => {
      const savedTheme = await AsyncStorage.getItem('appTheme');
      setSelected(savedTheme || null);
    };
    loadTheme();
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* ✅ Common Header */}
      <AppHeader title={t('theme.title')} />

      {/* Options */}
      <View style={styles.optionsWrapper}>
        {themes.map(th => (
          <ThemeOption
            key={th.key}
            icon={th.icon}
            label={th.label}
            selected={selected === th.key}
            onPress={() => setSelected(th.key)}
          />
        ))}
      </View>

      {/* Bottom Button */}
      <View style={styles.bottomButton}>
        <PrimaryButton
          title={t('select')}
          onPress={async () => {
            try {
              await AsyncStorage.setItem('appTheme', selected);
              console.log('Theme saved:', selected);
            } catch (e) {
              console.log('Error saving theme:', e);
            }
            navigation.navigate('More'); // back to More
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
    marginTop: 20,
  },
  bottomButton: {
    marginBottom: 40,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
  },
});

export default ThemeMoreScreen;

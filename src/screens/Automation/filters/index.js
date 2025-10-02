import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import useTheme from '../../../hooks/useTheme';
import PlatformFilterItem from '../../../components/automation/filters/PlatformFilterItem';

const ConfigureFiltersScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('filters.title')} onBack={() => navigation.goBack()} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <PlatformFilterItem
          platform="lyft"
          label={t('filters.platform.lyft')}
          onPress={() => navigation.navigate('PlatformFilterMain', { platform: 'lyft' })}
        />
        <PlatformFilterItem
          platform="uber"
          label={t('filters.platform.uber')}
          onPress={() => navigation.navigate('PlatformFilterMain', { platform: 'uber' })}
        />
        <PlatformFilterItem
          platform="doordash"
          label={t('filters.platform.doordash')}
          onPress={() => navigation.navigate('PlatformFilterMain', { platform: 'doordash' })}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default ConfigureFiltersScreen;

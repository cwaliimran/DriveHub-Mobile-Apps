import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const PrivacyScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header - No padding affecting it */}
      <AppHeader title={t('more.options.privacy.title')} />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.text, { color: theme.text }]}>
          At Drive Hub, your privacy and trust matter to us. We explain how we collect, use, and protect 
          your data when you use our services. Information we collect includes profile details, location 
          data, and payment information – used only to enhance your ride experience.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  content: { padding: 16 },
  text: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    lineHeight: 22,
  },
});

export default PrivacyScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const TermsScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('more.options.terms.title')} />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.text, { color: theme.text }]}>
          By using Drive Hub, you agree to our terms and conditions. These include transparent fares, 
          trusted drivers, and a safe, reliable experience. Please review our policies to understand 
          your rights and responsibilities while using our service.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16 },
  text: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    lineHeight: 22,
  },
});

export default TermsScreen;

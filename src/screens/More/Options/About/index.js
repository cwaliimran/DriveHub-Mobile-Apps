import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const AboutScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header - No padding affecting it */}
      <AppHeader title={t('more.options.about.title')} />

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={[styles.text, { color: theme.text }]}>
          Welcome to Drive Hub – the smarter way to move. Whether it’s your daily commute, a night out, 
          or a last-minute trip, Drive Hub is here to make your ride seamless, transparent, and stress-free.
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

export default AboutScreen;

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const AnnouncementScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('more.options.updates.title')} />

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={[styles.heading, { color: theme.text }]}>Announcements</Text>
        <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
          Welcome to the Announcements section! Here’s where we share important news and highlights
          with you: Launch of new services and ride options, special promotions, seasonal discounts,
          and rewards, expansion into new cities or service areas, policy changes or safety
          guidelines, and community programs and partnerships.
        </Text>

        <Text style={[styles.heading, { color: theme.text }]}>Updates</Text>
        <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
          The Updates section is your space to see what’s new inside the app. Every update is
          designed to improve your journey.
        </Text>
        <Text style={[styles.paragraph, { color: theme.textSecondary }]}>
          Added new features to enhance ride booking, improved app speed and performance, fixed
          minor bugs for smoother trips, strengthened security and rider safety, polished design for
          a cleaner look. Keep your app updated to enjoy the best version of Drive Hub at all times.
        </Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 16 },
  heading: {
    fontSize: 16,
    fontFamily: typography.fontSemiBold,
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    lineHeight: 20,
    marginBottom: 10,
  },
});

export default AnnouncementScreen;
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import { Icons } from '../../../../assets/assets';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const faqData = [
  {
    id: '1',
    question: 'How do I book a ride on Drive Hub?',
    answer: 'To book a ride, open the app, select your destination, and confirm the request.',
  },
  {
    id: '2',
    question: 'How can drivers join Drive Hub?',
    answer: 'Drivers can join by signing up through the app and uploading their vehicle details.',
  },
  {
    id: '3',
    question: 'How do I contact support?',
    answer: 'You can contact support via the “More” section under “Contact Support”.',
  },
  {
    id: '4',
    question: 'How is the fare calculated?',
    answer: 'Fares are calculated based on time, distance, and surge pricing when applicable.',
  },
];

const FAQScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const renderItem = ({ item }) => {
    const isOpen = expanded === item.id;
    return (
      <View style={[styles.item, { borderBottomColor: theme.border }]}>
        <TouchableOpacity style={styles.questionRow} onPress={() => toggleExpand(item.id)}>
          <Text style={[styles.question, { color: theme.text }]}>{item.question}</Text>
          <Image
            source={isOpen ? Icons.faqStress : Icons.faqExpand}
            style={[styles.icon, { tintColor: theme.text }]}
          />
        </TouchableOpacity>
        {isOpen && <Text style={[styles.answer, { color: theme.textSecondary }]}>{item.answer}</Text>}
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      {/* Header - No padding affecting it */}
      <AppHeader title={t('more.options.faq.title')} />

      {/* Content */}
      <View style={styles.container}>
        {/* FAQ Intro */}
        <Text style={[styles.heading, { color: theme.text }]}>Frequently Asked Questions</Text>
        <Text style={[styles.subHeading, { color: theme.textSecondary }]}>
          Have a question about Drive Hub? Find the answers here!
        </Text>

        {/* FAQ List */}
        <FlatList
          data={faqData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 16 },
  heading: {
    fontSize: 16,
    fontFamily: typography.fontSemiBold,
    marginTop: 16,
  },
  subHeading: {
    fontSize: 13,
    fontFamily: typography.fontRegular,
    marginBottom: 16,
  },
  item: {
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  questionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  question: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    flex: 1,
    marginRight: 8,
  },
  answer: {
    marginTop: 6,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  icon: {
    width: 18,
    height: 18,
  },
});

export default FAQScreen;

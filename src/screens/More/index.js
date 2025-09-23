import React from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppHeader from '../../components/common/AppHeader';
import ProfileOverviewCard from '../../components/more/ProfileOverviewCard';
import MoreOptionCard from '../../components/more/MoreOptionCard';
import useTheme from '../../hooks/useTheme';
import { Icons } from '../../assets/assets';
import { useTranslation } from 'react-i18next';
import typography from '../../theme/typography';

const MoreScreen = ({ navigation }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('more.title')} />

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Card */}
        <ProfileOverviewCard onEdit={() => console.log('Edit Profile')} />

        {/* ---------------- Subscription ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.subscription')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.premiumPlan}
            title={t('more.options.premium.title')}
            description={t('more.options.premium.desc')}
          />
          <MoreOptionCard
            icon={Icons.paymentMethods}
            title={t('more.options.payment.title')}
            description={t('more.options.payment.desc')}
          />
        </View>

        {/* ---------------- Settings ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.settings')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.manageFilters}
            title={t('more.options.filters.title')}
            description={t('more.options.filters.desc')}
          />
          <MoreOptionCard
            icon={Icons.notifications}
            title={t('more.options.notifications.title')}
            description={t('more.options.notifications.desc')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.theme}
            title={t('more.options.theme.title')}
            description={t('more.options.theme.desc')}
          />
          <MoreOptionCard
            icon={Icons.language}
            title={t('more.options.language.title')}
            description={t('more.options.language.desc')}
          />
        </View>

        {/* ---------------- Terms ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.terms')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.privacy}
            title={t('more.options.privacy.title')}
            description={t('more.options.privacy.desc')}
          />
          <MoreOptionCard
            icon={Icons.about}
            title={t('more.options.about.title')}
            description={t('more.options.about.desc')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.terms}
            title={t('more.options.terms.title')}
            description={t('more.options.terms.desc')}
          />
        </View>

        {/* ---------------- Help & Support ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.support')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.faq}
            title={t('more.options.faq.title')}
            description={t('more.options.faq.desc')}
          />
          <MoreOptionCard
            icon={Icons.support}
            title={t('more.options.support.title')}
            description={t('more.options.support.desc')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.report}
            title={t('more.options.report.title')}
            description={t('more.options.report.desc')}
          />
          <MoreOptionCard
            icon={Icons.updates}
            title={t('more.options.updates.title')}
            description={t('more.options.updates.desc')}
          />
        </View>

        {/* ---------------- Account Management ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.account')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.cache}
            title={t('more.options.cache.title')}
            description={t('more.options.cache.desc')}
          />
          <MoreOptionCard
            icon={Icons.deleteAccount}
            title={t('more.options.delete.title')}
            description={t('more.options.delete.desc')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.logout}
            title={t('more.options.logout.title')}
            description={t('more.options.logout.desc')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionHeader: {
    fontSize: 14,
    fontFamily: typography.fontSemiBold,
    color: '#888',
    marginLeft: 16,
    marginTop: 10,
    marginBottom: 6,
  },
  gridRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 4,
  },
});

export default MoreScreen;

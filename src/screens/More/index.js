import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import AppHeader from '../../components/common/AppHeader';
import ProfileOverviewCard from '../../components/more/ProfileOverviewCard';
import MoreOptionCard from '../../components/more/MoreOptionCard';
import ActionModal from '../../components/more/ActionModal';
import useTheme from '../../hooks/useTheme';
import { Icons } from '../../assets/assets';
import { useTranslation } from 'react-i18next';
import typography from '../../theme/typography';

const MoreScreen = ({ navigation }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const [modalType, setModalType] = useState(null);

  const handleOpenModal = (type) => setModalType(type);
  const handleCloseModal = () => setModalType(null);

  const handleConfirm = () => {
    console.log(`${modalType} confirmed`);
    handleCloseModal();
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('more.title')} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <ProfileOverviewCard onEdit={() => navigation.navigate('Profile')} />

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
              onPress={() => navigation.navigate('Cards')}

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
              onPress={() => navigation.navigate('Theme')}

          />
          <MoreOptionCard
            icon={Icons.language}
            title={t('more.options.language.title')}
            description={t('more.options.language.desc')}
              onPress={() => navigation.navigate('LanguageMore')}
          />
        </View>

        {/* ---------------- Terms ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.terms')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.privacy}
            title={t('more.options.privacy.title')}
            description={t('more.options.privacy.desc')}
              onPress={() => navigation.navigate('Privacy')}
            
          />
          <MoreOptionCard
            icon={Icons.about}
            title={t('more.options.about.title')}
            description={t('more.options.about.desc')}
              onPress={() => navigation.navigate('About')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.terms}
            title={t('more.options.terms.title')}
            description={t('more.options.terms.desc')}
              onPress={() => navigation.navigate('Terms')}

          />
        </View>

        {/* ---------------- Help & Support ---------------- */}
        <Text style={styles.sectionHeader}>{t('more.sections.support')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.faq}
            title={t('more.options.faq.title')}
            description={t('more.options.faq.desc')}
              onPress={() => navigation.navigate('FAQ')}


          />
          <MoreOptionCard
            icon={Icons.support}
            title={t('more.options.support.title')}
            description={t('more.options.support.desc')}
            onPress={() => navigation.navigate('ContactSupport')}

          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.report}
            title={t('more.options.report.title')}
            description={t('more.options.report.desc')}
            onPress={() => navigation.navigate('ReportIssue')}
          />
          <MoreOptionCard
            icon={Icons.updates}
            title={t('more.options.updates.title')}
            description={t('more.options.updates.desc')}
            onPress={() => navigation.navigate('Announcements')}
          />
        </View>
        {/* Account Management */}
        <Text style={styles.sectionHeader}>{t('more.sections.account')}</Text>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.cache}
            title={t('more.options.cache.title')}
            description={t('more.options.cache.desc')}
            onPress={() => handleOpenModal('cache')}
          />
          <MoreOptionCard
            icon={Icons.delete}
            title={t('more.options.delete.title')}
            description={t('more.options.delete.desc')}
            onPress={() => handleOpenModal('delete')}
          />
        </View>
        <View style={styles.gridRow}>
          <MoreOptionCard
            icon={Icons.logout}
            title={t('more.options.logout.title')}
            description={t('more.options.logout.desc')}
            onPress={() => handleOpenModal('logout')}
          />
        </View>
      </ScrollView>

      {/* Modals */}
      <ActionModal
        visible={modalType === 'logout'}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        icon={Icons.logoutModal}
        type="logout"
      />
      <ActionModal
        visible={modalType === 'delete'}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        icon={Icons.deleteModal}
        type="delete"
      />
      <ActionModal
        visible={modalType === 'cache'}
        onClose={handleCloseModal}
        onConfirm={handleConfirm}
        icon={Icons.cacheModal}
        type="cache"
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionHeader: {
    fontSize: 14,
    fontFamily: typography.fontSemiBold,
    color: 'grey',
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

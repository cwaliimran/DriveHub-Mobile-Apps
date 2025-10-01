import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../components/common/AppHeader';
import useTheme from '../../hooks/useTheme';
import NotificationCard from '../../components/common/NotificationCard';
import { Icons } from '../../assets/assets';

const NotificationsScreen = ({ navigation }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('notifications.title')} onBack={() => navigation.goBack()} />

      <ScrollView
        style={styles.list}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
        showsVerticalScrollIndicator={false}
      >
        <NotificationCard
          image={Icons.notifExclusive}
          title={t('notifications.exclusive.title')}
          description={t('notifications.exclusive.desc')}
          onPress={() => {}}
        />
        <NotificationCard
          image={Icons.notifSafety}
          title={t('notifications.safety.title')}
          description={t('notifications.safety.desc')}
          onPress={() => {}}
        />
        <NotificationCard
          image={Icons.notifAnnouncements}
          title={t('notifications.announcements.title')}
          description={t('notifications.announcements.desc')}
          onPress={() => {}}
        />
        <NotificationCard
          image={Icons.notifUpdates}
          title={t('notifications.updates.title')}
          description={t('notifications.updates.desc')}
          onPress={() => {}}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { flex: 1 },
});

export default NotificationsScreen;

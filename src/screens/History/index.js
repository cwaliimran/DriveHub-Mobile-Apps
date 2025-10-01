import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';

const HistoryScreen = ({navigation}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
                onNotificationPress={()  => navigation.navigate('Notifications')}
        showNotificationDot={true}
      />
      <Text style={{ color: theme.text, marginTop: 20 }}>{t('history.title')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default HistoryScreen;

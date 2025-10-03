// src/screens/home/index.js
import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';
import HomeIntro from '../../components/home/intro';
import EarningsSummary from '../../components/home/earnings/EarningsSummary';
import { Icons } from '../../assets/assets';

const HomeScreen = ({ navigation }) => {
  const theme = useTheme();

  const summaryData = [
    { key: 'today', label: 'Today’s Earning', value: '$127', icon: Icons.moneyCircle },
    { key: 'week',  label: 'Week Earning',   value: '$892', icon: Icons.moneyCircle },
    { key: 'month', label: 'Month Earning',  value: '$2,436', icon: Icons.moneyCircle },
  ];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
        onNotificationPress={() => navigation.navigate('Notifications')}
        showNotificationDot
      />
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 28 }}
        showsVerticalScrollIndicator={false}
      >
        <HomeIntro name="John" />
        <EarningsSummary
          title={undefined} // uses i18n default
          data={summaryData.map(x => ({
            ...x,
            label:
              x.key === 'today' ? 'Today’s Earning' :
              x.key === 'week'  ? 'Week Earning' :
              'Month Earning'
          }))}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({ container: { flex: 1 } });
export default HomeScreen;

import React, { useState } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';
import EarningCard from '../../components/earnings/EarningCard';
import { Icons } from '../../assets/assets';
import QuickStats from '../../components/earnings/QuickStats';
import EarningsTrend from '../../components/earnings/EarningsTrend';

const EarningScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');

  // Sample data for different periods
  const getDataForPeriod = (period) => {
    switch (period) {
      case '7 Days':
        return [170, 190, 210, 200, 240, 220, 245];
      case 'Last 24 Hrs':
        return [150, 160, 140, 180, 200, 190, 220, 210, 240, 250, 260, 280];
      case '1 Month':
        return [200, 250, 300, 280, 320, 350, 380];
      default:
        return [170, 190, 210, 200, 240, 220, 245];
    }
  };

  const handlePeriodChange = (newPeriod) => {
    setSelectedPeriod(newPeriod);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
        onNotificationPress={() => navigation.navigate('Notifications')}
        showNotificationDot={true}
      />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          <EarningCard
            icon={Icons.earnDollar}
            title={t('automation.cards.totalEarnings')}
            value="$127"
            topRightLabel={t('automation.today')}
            onPress={() => {}}
          />
          <EarningCard
            icon={Icons.earnClock}
            title={t('automation.cards.activeTime')}
            value="8.5h 23m"
            topRightLabel={t('automation.today')}
            onPress={() => {}}
          />
          <EarningCard
            icon={Icons.earnRoute}
            title={t('automation.cards.milesDriven')}
            value="156"
            topRightLabel={t('automation.today')}
            onPress={() => {}}
          />
          <EarningCard
            icon={Icons.earnCar}
            title={t('automation.cards.trips')}
            value="23"
            topRightLabel={t('automation.today')}
            onPress={() => {}}
          />
        </View>
        <EarningsTrend
          data={getDataForPeriod(selectedPeriod)}
          periodLabel={selectedPeriod}
          onPressPeriod={handlePeriodChange}
          height={220}
        />

        <QuickStats
  title={t('automation.quickStats.title')}
  items={[
    { icon: Icons.statAcceptance, label: t('automation.quickStats.acceptance'), value: '82 %' },
    { icon: Icons.statRating,     label: t('automation.quickStats.rating'),     value: '4.9' },
    { icon: Icons.statDistance,   label: t('automation.quickStats.distance'),   value: '6.8 miles' },
    { icon: Icons.statPeak,       label: t('automation.quickStats.peak'),       value: '7–9 PM' },
  ]}
/>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default EarningScreen;

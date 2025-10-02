import React, { useMemo, useState, useRef } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import PagerView from 'react-native-pager-view';
import { useTranslation } from 'react-i18next';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import HistoryTabs from '../../components/history/HistoryTabs';
import InlineStatsBar from '../../components/history/InlineStatsBar';
import TripCard from '../../components/history/TripCard';
import { Icons } from '../../assets/assets';
import FilterModal from '../../components/history/FilterModal';

const HistoryScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);
  const pagerRef = useRef(null);
const [showFilter, setShowFilter] = useState(false);
const [sortKeys, setSortKeys] = useState([]); // store selected sort keys

  const tabs = [
    { key: 'all', label: t('history.tabs.all') },
    { key: 'uber', label: t('history.tabs.uber') },
    { key: 'lyft', label: t('history.tabs.lyft') },
    { key: 'doordash', label: t('history.tabs.doordash') },
  ];

  // mock data — shape matches TripCard props
  const allTrips = useMemo(() => ([
    {
      id: 't1',
      platform: 'uber',
      title: 'Uber Trip',
      date: 'Dec 15, 2025',
      time: '02:30 PM',
      pickup: "Elm’s Street",
      drop: 'Dockers Place',
      duration: '23 min',
      distance: '3.2 mi',
      rating: '4.9',
      fare: '$24.50',
      status: t('history.status.completed'),
    },
    {
      id: 't2',
      platform: 'lyft',
      title: 'Lyft Trip',
      date: 'Dec 15, 2025',
      time: '02:30 PM',
      pickup: "Elm’s Street",
      drop: 'Dockers Place',
      duration: '23 min',
      distance: '3.2 mi',
      rating: '4.9',
      fare: '$34.10',
      status: t('history.status.completed'),
    },
    {
      id: 't3',
      platform: 'doordash',
      title: 'DoorDash Trip',
      date: 'Dec 15, 2025',
      time: '02:30 PM',
      pickup: "Elm’s Street",
      drop: 'Dockers Place',
      duration: '23 min',
      distance: '3.2 mi',
      rating: '4.9',
      fare: '$32.10',
      status: t('history.status.completed'),
    },
  ]), [t]);

  const filtered = useMemo(() => {
    if (activeTab === 'all') return allTrips;
    return allTrips.filter(x => x.platform === activeTab);
  }, [activeTab, allTrips]);

  const handleTabChange = (tabKey) => {
    const newIndex = tabs.findIndex(tab => tab.key === tabKey);
    if (newIndex !== -1) {
      setActiveTab(tabKey);
      setActiveIndex(newIndex);
      pagerRef.current?.setPage(newIndex);
    }
  };

  const handlePageChange = (e) => {
    const newIndex = e.nativeEvent.position;
    const newTab = tabs[newIndex];
    if (newTab) {
      setActiveIndex(newIndex);
      setActiveTab(newTab.key);
    }
  };

  const getFilteredTripsForTab = (tabKey) => {
    if (tabKey === 'all') return allTrips;
    return allTrips.filter(x => x.platform === tabKey);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
        onNotificationPress={() => navigation.navigate('Notifications')}
        showNotificationDot={true}
      />

      {/* tabs */}
      <HistoryTabs tabs={tabs} activeTab={activeTab} onChange={handleTabChange} />

      {/* inline stats */}
      <InlineStatsBar
        items={[
          { value: '24',      label: t('history.stats.trips') },
          { value: '$342',    label: t('history.stats.earnings') },
          { value: '4.8',     label: t('history.stats.rating') },
        ]}
      />

      {/* section header with filter button */}
      <View style={[styles.sectionHeader]}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('history.tripsTitle')}</Text>
        <TouchableOpacity
  onPress={() => setShowFilter(true)}
  style={[styles.filterBtn, { borderColor: theme.border ?? '#E5E7EB' }]}
>
  <Image source={Icons.historyFilter} style={{ width: 32, height: 32, tintColor: theme.text }} />
</TouchableOpacity>

      </View>

      {/* pager view for swipeable tabs */}
      <PagerView
        ref={pagerRef}
        style={{ flex: 1 }}
        initialPage={activeIndex}
        onPageSelected={handlePageChange}
      >
        {tabs.map((tab) => (
          <View key={tab.key} style={{ flex: 1 }}>
            <ScrollView
              style={{ flex: 1 }}
              contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 100 }}
              showsVerticalScrollIndicator={false}
            >
              {getFilteredTripsForTab(tab.key).map(item => (
                <TripCard
  key={item.id}
  {...item}
  onPress={() => navigation.navigate('TripDetails', { trip: item })}
/>
              ))}
            </ScrollView>
            <FilterModal
  visible={showFilter}
  initial={sortKeys}
  onClose={() => setShowFilter(false)}
  onApply={(keys) => {
    setShowFilter(false);
    setSortKeys(keys);
    // OPTIONAL: apply a sort to your 'filtered' list here
    // e.g., sort by first selected key:
    // if (keys.includes('price_desc')) { ... } etc.
  }}
/>
          </View>
        ))}
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  sectionHeader: {
    marginTop: 6,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: { fontSize: 20, fontFamily: typography.fontSemiBold , fontWeight: '700' },
  filterBtn: {
    width: 32, height: 32, borderRadius: 18,
    alignItems: 'center', justifyContent: 'center',
    borderWidth: 1,
  },
});

export default HistoryScreen;

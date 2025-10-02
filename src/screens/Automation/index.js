import React from 'react';
import { View, Text, StyleSheet  ,ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import MainHeader from '../../components/common/MainHeader';
import useTheme from '../../hooks/useTheme';
// imports
import AutomationStatsCard from '../../components/automation/AutomationStatsCard';
import AutomationRuleCard from '../../components/automation/AutomationRuleCard';
import AppStatusControlCard from '../../components/automation/AppStatusControlCard';
import PlatformPriorityCard from '../../components/automation/PlatformPriorityCard';

import { Images } from '../../assets/assets';

const AutomationScreen = ({navigation}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [autoOnline, setAutoOnline] = React.useState(true);


  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <MainHeader
        onProfilePress={() => navigation.navigate('More')}
                onNotificationPress={()  => navigation.navigate('Notifications')}
        showNotificationDot={true}
      />
      <ScrollView
  style={{ flex: 1 }}
  contentContainerStyle={{ paddingBottom: 100 }}
  showsVerticalScrollIndicator={false}
>
  <AutomationStatsCard
    titlePrefix={t('automation.statsCard.titlePrefix')}
    titleEmph={t('automation.statsCard.titleEmph')}
    items={[
      { value: '28', label: t('automation.statsCard.executed') },          // blue by default
      { value: '16', label: t('automation.statsCard.skipped'), color: '#E11D48' }, // red
      // { value: '2', label: t('automation.statsCard.errors'), color: '#F59E0B' }, // optional 3rd
    ]}
  />
<AutomationRuleCard
  icon={Images.autoAccept}
  title={t('automation.rules.autoAccept.title')}
  subtitle={t('automation.rules.autoAccept.subtitle')}
  rows={[
    { label: t('automation.rules.autoAccept.fields.minFare'),    value: '$8.00' },
    { label: t('automation.rules.autoAccept.fields.maxDistance'), value: '15 miles' },
    { label: t('automation.rules.autoAccept.fields.tripTypes'),   value: 'Standard, Premium' },
  ]}
  onConfigure={() => navigation.navigate('ConfigureFilters')} // or open a modal
/>
<AppStatusControlCard
  icon={Images.appStatus}
  title={t('automation.statusCard.title')}
  subtitle={t('automation.statusCard.subtitle')}
  autoOnlineEnabled={autoOnline}
  onToggleAutoOnline={setAutoOnline}
  breakTimerText="30 min"
  onSetup={() => {
    // open a setup sheet or navigate to a config screen
    // navigation.navigate('AppStatusSetup')
  }}
/>
<PlatformPriorityCard
  priorities={[
    { key: 'uber', rank: 1 },
    { key: 'doordash', rank: 2 },
    { key: 'lyft', rank: 3 }, // include all 3 platforms as needed
  ]}
  onManage={() => {
    // open sheet or navigate to a manage screen
    // navigation.navigate('PlatformPriorityManage')
  }}
/>

</ScrollView>

  
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default AutomationScreen;

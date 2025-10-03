import React, { useState } from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import DurationPicker from '../../../components/automation/time/DurationPicker';

const AppStatusControlScreen = ({ navigation, route }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // initial state (you can pass via route?.params)
  const [autoOnline, setAutoOnline] = useState(route?.params?.autoOnline ?? false);
  const [breakEnabled, setBreakEnabled] = useState(route?.params?.breakEnabled ?? false);
  const [breakSeconds, setBreakSeconds] = useState(route?.params?.breakSeconds ?? 15); // default 15s

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('appStatus.title')} onBack={() => navigation.goBack()} />

      {/* Auto Online row */}
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.rowTitle, { color: theme.text }]}>{t('appStatus.autoOnline')}</Text>
          <Text style={[styles.rowHint, { color: theme.textSecondary }]}>{t('status.autoOnlineHint')}</Text>
        </View>
        <Switch
          value={autoOnline}
          onValueChange={setAutoOnline}
          thumbColor={'#fff'}
          trackColor={{ false: 'rgba(255,255,255,0.25)', true: theme.primary }}
        />
      </View>

      {/* Break time row */}
      <View style={[styles.row, { borderBottomWidth: 0 }]}>
        <View style={{ flex: 1 }}>
          <Text style={[styles.rowTitle, { color: theme.text }]}>{t('appStatus.breakTime')}</Text>
        </View>
        <Switch
          value={breakEnabled}
          onValueChange={setBreakEnabled}
          thumbColor={'#fff'}
          trackColor={{ false: 'rgba(255,255,255,0.25)', true: theme.primary }}
        />
      </View>

      {/* Time picker (only when enabled) */}
      {breakEnabled && (
        <View style={styles.pickerWrap}>
          <DurationPicker
            valueSeconds={breakSeconds}
            onChange={setBreakSeconds}
            minLabel={t('status.minutes')}
            secLabel={t('status.seconds')}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.1)',
  },
  rowTitle: { fontSize: 16, fontFamily: typography.fontSemiBold },
  rowHint: { marginTop: 4, fontSize: 12, fontFamily: typography.fontRegular },
  pickerWrap: { paddingHorizontal: 16, paddingTop: 28 },
});

export default AppStatusControlScreen;

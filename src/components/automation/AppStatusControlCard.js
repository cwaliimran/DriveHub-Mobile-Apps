import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Switch } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

/**
 * Props
 * - icon: ImageSource                    // e.g., Images.appStatus
 * - title: string                        // e.g., "App Status Control"
 * - subtitle: string                     // e.g., "Auto Online/Offline"
 * - autoOnlineEnabled: boolean           // switch state
 * - onToggleAutoOnline: (val:boolean) => void
 * - breakTimerText: string               // e.g., "30 min"
 * - onSetup: () => void                  // tap on "Setup" pill
 */
const AppStatusControlCard = ({
  icon,
  title,
  subtitle,
  autoOnlineEnabled = false,
  onToggleAutoOnline,
  breakTimerText = '30 min',
  onSetup,
}) => {
  const theme = useTheme();

  return (
    <View style={styles.wrap}>
      <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
        {/* blue left accent like other cards */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.card}>
          {/* header */}
          <View style={styles.headerRow}>
            <View style={styles.leftHeader}>
              <View style={[styles.iconWrap, { backgroundColor: theme.background }]}>
                {icon ? <Image source={icon} style={styles.icon} resizeMode="contain" /> : null}
              </View>
              <View>
                <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>{title}</Text>
                {!!subtitle && (
                  <Text style={[styles.subtitle, { color: theme.textSecondary }]} numberOfLines={1}>
                    {subtitle}
                  </Text>
                )}
              </View>
            </View>

            <TouchableOpacity onPress={onSetup} activeOpacity={0.9} style={[styles.pill, { borderColor: theme.border, backgroundColor: theme.background }]}>
              <Text style={[styles.pillText, { color: theme.primary }]}>Setup</Text>
            </TouchableOpacity>
          </View>

          {/* rows */}
          <View style={styles.rows}>
            {/* Auto Online after Trip */}
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: theme.textSecondary }]} numberOfLines={1}>
                Auto Online after Trip
              </Text>
              <Switch
                value={autoOnlineEnabled}
                onValueChange={onToggleAutoOnline}
                thumbColor={autoOnlineEnabled ? '#fff' : '#fff'}
                trackColor={{ false: theme.border, true: theme.primary }}
              />
            </View>

            {/* Break Timer */}
            <View style={styles.row}>
              <Text style={[styles.rowLabel, { color: theme.textSecondary }]} numberOfLines={1}>
                Break Timer
              </Text>
              <Text style={[styles.rowValue, { color: theme.text }]} numberOfLines={1}>{breakTimerText}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const R = 18;

const styles = StyleSheet.create({
  wrap: { 
    marginHorizontal: 16, 
    marginTop: 14 
  },
  cardContainer: {
    flexDirection: 'row',
    borderRadius: 18,
    shadowOpacity: 0.12,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 8 },
    elevation: 3,
    overflow: 'hidden',
  },
  accent: {
    width: 4,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  card: {
    flex: 1,
    padding: 14,
  },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  leftHeader: { flexDirection: 'row', alignItems: 'center', gap: 10, flex: 1 },
  iconWrap: { width: 56, height: 56, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  icon: { width: 32, height: 32 },
  title: { fontSize: 14, lineHeight: 24, fontFamily: typography.fontBold },
  subtitle: { fontSize: 12, lineHeight: 18, fontFamily: typography.fontRegular, marginTop: 2 },
  pill: {
    paddingHorizontal: 10, 
    height: 25, 
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  pillText: { fontSize: 12, fontFamily: typography.fontRegular },
  rows: { marginTop: 2, gap: 0},
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 2},
  rowLabel: { fontSize: 12, fontFamily: typography.fontRegular },
  rowValue: { fontSize: 12, fontFamily: typography.fontRegular },
});

export default AppStatusControlCard;

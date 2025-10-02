import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

/**
 * Props:
 * - icon: ImageSource     // e.g., Images.autoAccept
 * - title: string         // e.g., "Auto Accept/Decline"
 * - subtitle: string      // e.g., "Smart Trip Filtering"
 * - rows: [{label:string, value:string}]
 * - onConfigure: () => void
 */
const AutomationRuleCard = ({ icon, title, subtitle, rows = [], onConfigure }) => {
  const theme = useTheme();

  return (
    <View style={styles.wrap}>
      <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
        {/* blue left accent like TripCard */}
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

            <TouchableOpacity onPress={onConfigure} activeOpacity={0.9} style={[styles.pill, { borderColor: theme.border, backgroundColor: theme.background }]}>
              <Text style={[styles.pillText, { color: theme.primary }]}>Configure</Text>
            </TouchableOpacity>
          </View>

          {/* rows */}
          <View style={{ marginTop: 12 }}>
            {rows.map((r, idx) => (
              <View key={idx} style={styles.row}>
                <Text style={[styles.rowLabel, { color: theme.textSecondary }]} numberOfLines={1}>
                  {r.label}
                </Text>
                <Text style={[styles.rowValue, { color: theme.textSecondary }]} numberOfLines={1}>
                  {r.value}
                </Text>
              </View>
            ))}
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
  iconWrap: {
    width: 56, height: 56, borderRadius: 10,
    alignItems: 'center', justifyContent: 'center',
  },
  icon: { width: 32, height: 32 }, // subtle neon tint; change if needed
  title: { fontSize: 14, lineHeight: 24, fontFamily: typography.fontBold },
  subtitle: { fontSize: 12, lineHeight: 18, fontFamily: typography.fontRegular, marginTop: 2 },
  pill: {
    paddingHorizontal: 5, 
    height: 25, 
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  pillText: { fontSize: 12, fontFamily: typography.fontRegular },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 8 },
  rowLabel: { fontSize: 12, fontFamily: typography.fontRegular },
  rowValue: { fontSize: 12, fontFamily: typography.fontRegular },
});

export default AutomationRuleCard;

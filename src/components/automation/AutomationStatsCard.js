import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

/**
 * Props:
 * - items: [{ value: string|number, label: string, color?: string }]
 *   e.g., [{ value:'28', label:'Executed', color: theme.primary }, { value:'16', label:'Skipped', color:'#E11D48' }]
 * - titlePrefix?: string   // default: "Today's Automation"
 * - titleEmph?: string     // default: "Stats"
 */
const AutomationStatsCard = ({ items = [], titlePrefix = "Today's Automation", titleEmph = "Stats" }) => {
  const theme = useTheme();
  const cols = items.slice(0, 3); // up to 3 stats like your layout

  return (
    <View style={styles.wrap}>
      <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
        {/* blue left accent like TripCard */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.card}>
          {/* Title: "Today's Automation" + blue "Stats" */}
          <Text style={[styles.title, { color: theme.text }]}>
            {titlePrefix}{' '}
            <Text style={[styles.title, { color: theme.primary }]}>{titleEmph}</Text>
          </Text>

          {/* Numbers row */}
          <View style={styles.row}>
            {cols.map((it, idx) => (
              <View key={idx} style={styles.col}>
                <Text
                  style={[
                    styles.value,
                    { color: it.color || theme.primary }
                  ]}
                  numberOfLines={1}
                >
                  {it.value}
                </Text>
                <Text style={[styles.label, { color: theme.textSecondary }]} numberOfLines={1}>
                  {it.label}
                </Text>

                {/* dotted vertical separator (except last) */}
                {idx < cols.length - 1 && (
                  <View style={[styles.sep, { borderColor: theme.border }]} pointerEvents="none" />
                )}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
};

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
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 17,
    lineHeight: 28,
    fontFamily: typography.fontBold,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 6,
    position: 'relative',
  },
  value: {
    fontSize: 35,
    lineHeight: 41,
    fontFamily: typography.fontBold,
  },
  label: {
    marginTop: 4,
    fontSize: 11,
    lineHeight: 18,
    fontFamily: typography.fontRegular,
  },
  sep: {
    position: 'absolute',
    right: 0, 
    top: 6, 
    bottom: 6,
    borderRightWidth: 1,
    borderStyle: 'dashed',
  },
});

export default AutomationStatsCard;

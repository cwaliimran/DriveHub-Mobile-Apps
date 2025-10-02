import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

/**
 * items: [{ value: string|number, label: string }]
 * example:
 * [
 *   { value: '24',       label: 'Total Trips' },
 *   { value: '$342.60',  label: 'Total Earnings' },
 *   { value: '4.8',      label: 'Avg. Rating' },
 * ]
 */
const InlineStatsBar = ({ items = [] }) => {
  const theme = useTheme();
  const cols = items.slice(0, 3); // show max 3 like the mock

  return (
    <View style={styles.wrap}>
      <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
        {/* blue left accent */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.card}>
          <View style={styles.row}>
            {cols.map((it, idx) => (
              <View key={idx} style={styles.col}>
                <Text style={[styles.value, { color: theme.primary }]} numberOfLines={1}>
                  {it.value}
                </Text>
                <Text style={[styles.label, { color: theme.textSecondary }]} numberOfLines={1}>
                  {it.label}
                </Text>

                {/* dotted separator except last */}
                {idx < cols.length - 1 && (
                  <View
                    pointerEvents="none"
                    style={[
                      styles.sep,
                      { borderColor: theme.border ?? 'rgba(0,0,0,0.15)' },
                    ]}
                  />
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
    marginTop: 14, 
    marginBottom: 8,
    marginHorizontal: 16,
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
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  col: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 8,
    position: 'relative',
  },
  value: {
    fontSize: 24,
    lineHeight: 28,
    fontFamily: typography.fontSemiBold,
    marginBottom: 4,
  },
  label: {
    fontSize: 11,
    lineHeight: 16,
    fontFamily: typography.fontRegular,
  },
  sep: {
    position: 'absolute',
    right: 0,
    top: 8,
    bottom: 8,
    borderRightWidth: 1,
    borderStyle: 'dashed',
    opacity: 0.6,
  },
});

export default InlineStatsBar;

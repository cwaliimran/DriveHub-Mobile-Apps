import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const Row = ({ icon, label, value }) => {
  const theme = useTheme();
  return (
    <View style={styles.row}>
      <View style={styles.leftWrap}>
        {icon ? <Image source={icon} style={styles.icon} resizeMode="contain" /> : null}
        <Text style={[styles.label, { color: theme.textSecondary }]} numberOfLines={1}>
          {label}
        </Text>
      </View>
      <Text style={[styles.value, { color: theme.text }]} numberOfLines={1}>
        {value}
      </Text>
    </View>
  );
};

const QuickStats = ({ title = 'Quick Stats', items = [] }) => {
  const theme = useTheme();

  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>

      {/* Blue left line */}
      <View style={[styles.leftBlueLine, { backgroundColor: theme.primary }]} />
      
      <View style={[styles.card, { backgroundColor: theme.card_theme }]}>
        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

        {items.map((it, idx) => (
          <Row
            key={`${it.label}-${idx}`}
            icon={it.icon}
            label={it.label}
            value={it.value}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 8,
    borderRadius: 20,
    // elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    overflow: 'hidden',
  },
  leftBlueLine: {
    width: 4,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  card: {
    flex: 1,
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 18,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    marginBottom: 5,
    fontFamily: typography.fontBold,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
    justifyContent: 'space-between',
  },
  leftWrap: { flexDirection: 'row', alignItems: 'center', flex: 1, marginRight: 12 },
  icon: { width: 16, height: 16, marginRight: 10, tintColor: '#9AA0A6' },
  label: { fontSize: 13, lineHeight: 24, fontFamily: typography.fontRegular },
  value: { fontSize: 13, lineHeight: 24, fontFamily: typography.fontMedium },
});

export default QuickStats;
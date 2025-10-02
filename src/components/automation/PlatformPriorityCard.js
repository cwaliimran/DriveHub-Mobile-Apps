import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import { Images, Icons } from '../../assets/assets';

/**
 * Props:
 * - priorities: Array<{ key:'uber'|'lyft'|'doordash', rank:number }>
 * - onManage: () => void
 */
const PlatformPriorityCard = ({ priorities = [], onManage }) => {
  const theme = useTheme();

  const logoFor = (key) =>
    key === 'uber' ? Images.uber :
    key === 'lyft' ? Images.lyft :
    Images.doorDash;

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
                <Image source={Icons.priorityStar} style={[styles.starIcon, { tintColor: theme.primary }]} />
              </View>
              <View>
                <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
                  Platform Priority
                </Text>
                <Text style={[styles.subtitle, { color: theme.textSecondary }]} numberOfLines={1}>
                  Order Preferences
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={onManage} activeOpacity={0.9} style={[styles.managePill, { borderColor: theme.border, backgroundColor: theme.background }]}>
              <Text style={[styles.manageText, { color: theme.primary }]}>Manage</Text>
            </TouchableOpacity>
          </View>

          {/* rows */}
          <View style={{ marginTop: 14 }}>
            {priorities.map((p) => (
              <View key={p.key} style={styles.row}>
                <View style={styles.rowLeft}>
                  <View style={[styles.logoWrap, { backgroundColor: theme.background }]}>
                    <Image source={logoFor(p.key)} style={styles.logo} resizeMode="contain" />
                  </View>
                  <Text style={[styles.rowTitle, { color: theme.text }]}>
                    {p.key === 'uber' ? 'Uber' : p.key === 'lyft' ? 'Lyft' : 'DoorDash'}
                  </Text>
                </View>

                <View style={[styles.badge, { borderColor: theme.border, backgroundColor: theme.background }]}>
                  <Text style={[styles.badgeText, { color: theme.primary }]}>{`Priority ${p.rank}`}</Text>
                </View>
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
  iconWrap: { width: 56, height: 56, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  starIcon: { width: 32, height: 32 },

  title: { fontSize: 14, lineHeight: 24, fontFamily: typography.fontBold },
  subtitle: { fontSize: 12, lineHeight: 18, fontFamily: typography.fontRegular, marginTop: 2 },

  managePill: {
    paddingHorizontal: 10, 
    height: 25, 
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  manageText: { fontSize: 12, fontFamily: typography.fontRegular },

  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 4 },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  logoWrap: { width: 38, height: 38, borderRadius: 10, alignItems: 'center', justifyContent: 'center' },
  logo: { width: 27, height: 27, borderRadius: 6 },
  rowTitle: { fontSize: 16, fontFamily: typography.fontSemiBold },

  badge: {
    paddingHorizontal: 10, 
    height: 25, 
    borderRadius: 10, 
    borderWidth: 1,
    alignItems: 'center', 
    justifyContent: 'center',
  },
  badgeText: { fontSize: 12, fontFamily: typography.fontRegular },
});

export default PlatformPriorityCard;

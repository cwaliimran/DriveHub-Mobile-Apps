import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import { Icons, Images } from '../../assets/assets';

/**
 * Props:
 * - platform: 'uber' | 'lyft' | 'doordash'
 * - title: string (e.g., "Uber Trip")
 * - date: string (e.g., "Dec 15, 2025")
 * - time: string (e.g., "02:30 PM")
 * - pickup: string
 * - drop: string
 * - duration: string (e.g., "23 min")
 * - distance: string (e.g., "3.2 mi")
 * - rating: string|number (e.g., "4.9")
 * - fare: string (e.g., "$24.50")
 * - status: string (e.g., "Completed")
 * - onPress?: () => void
 */
const TripCard = ({
  platform = 'uber',
  title = 'Trip',
  date,
  time,
  pickup,
  drop,
  duration,
  distance,
  rating,
  fare,
  status = 'Completed',
  onPress,
}) => {
  const theme = useTheme();

  // platform logo from Images
  const platformLogo =
    platform === 'uber' ? Images.uber :
    platform === 'lyft' ? Images.lyft :
    Images.doorDash;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={styles.wrap}
    >
      <View style={[styles.cardContainer, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
        {/* blue left accent */}
        <View style={[styles.accent, { backgroundColor: theme.primary }]} />

        <View style={styles.card}>
          {/* Status button positioned like edit button */}
          <View style={[styles.statusBtn, { backgroundColor: theme.primary }]}>
            <Text style={styles.statusText}>{status}</Text>
          </View>

          {/* header row: logo + title + date/time | fare */}
          <View style={styles.headerRow}>
            <View style={styles.leftHead}>
              <View style={[styles.logoWrap, { backgroundColor: theme.background}]}>
                <Image source={platformLogo} style={styles.logo} resizeMode="contain" />
              </View>
              <View style={styles.titleSection}>
                <Text style={[styles.title, { color: theme.text }]} numberOfLines={1}>
                  {title}
                </Text>
                <View style={styles.dateTimeRow}>
                  <IconText icon={Icons.historyCalendar} text={date} />
                  <IconText icon={Icons.historyClock} text={time} />
                </View>
              </View>
            </View>

            <View style={styles.rightHead}>
              <Text style={[styles.fare, { color: theme.primary }]}>{fare}</Text>
            </View>
          </View>

          {/* pickup / drop */}
          <View style={styles.row}>
            <IconText icon={Icons.historyPickup} text={`Pickup: ${pickup}`} />
          </View>
          <View style={styles.row}>
            <IconText icon={Icons.historyDrop} text={`Drop: ${drop}`} />
          </View>

          {/* duration / distance / rating */}
          <View style={[styles.row, { justifyContent: 'flex-start', gap: 18, marginTop: 8 }]}>
            <IconText icon={Icons.historyDuration} text={duration} />
            <IconText icon={Icons.historyDistance} text={distance} />
            <IconText icon={Icons.historyStar} text={String(rating)} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const IconText = ({ icon, text }) => {
  const theme = useTheme();
  return (
    <View style={styles.iconText}>
      {!!icon && <Image source={icon} style={[styles.smallIcon, { tintColor: theme.textSecondary }]} />}
      <Text style={[styles.meta, { color: theme.text }]} numberOfLines={1}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { marginTop: 12 },
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
    position: 'relative',
  },
  statusBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  statusText: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
  headerRow: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' },
  leftHead: { flexDirection: 'row', alignItems: 'flex-start', flex: 1, gap: 12 },
  logoWrap: {
    width: 56, height: 56, borderRadius: 12,
    alignItems: 'center', justifyContent: 'center',
  },
  logo: { width: 40, height: 40, borderRadius: 6 },
  titleSection: { flex: 1, paddingTop: 2 },
  title: { fontSize: 18, lineHeight: 24, fontFamily: typography.fontBold, marginBottom: 4 },
  dateTimeRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  rightHead: { alignItems: 'flex-end', paddingTop: 2 },
  fare: { marginTop: 6, fontSize: 20, fontFamily: typography.fontBold },

  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 },
  iconText: { flexDirection: 'row', alignItems: 'center', gap: 6, flexShrink: 1 },
  smallIcon: { width: 16, height: 16 },
  meta: { fontSize: 11, lineHeight: 14, fontFamily: typography.fontRegular },
});

export default TripCard;

import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import PrimaryButton from '../../../components/common/PrimaryButton';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images, Icons } from '../../../assets/assets';

const Pill = ({ icon, text }) => {
  const theme = useTheme();
  return (
    <View style={[styles.pill, { borderColor: theme.border ?? 'rgba(0,0,0,0.08)' }]}>
      <Image source={icon} style={[styles.pillIcon, { tintColor: theme.primary }]} />
      <Text style={[styles.pillText, { color: theme.primary }]}>{text}</Text>
    </View>
  );
};

const Badge = ({ icon, text }) => {
  const theme = useTheme();
  return (
    <View style={[styles.badge, { backgroundColor: theme.primary }]}>
      <Image source={icon} style={[styles.badgeIcon, { tintColor: '#ffffff' }]} />
      <Text style={styles.badgeText}>{text}</Text>
    </View>
  );
};

const Row = ({ icon, label, value, accent }) => {
  const theme = useTheme();
  return (
    <View style={styles.row}>
      <View style={styles.rowLeft}>
        {!!accent && <View style={[styles.vBar, { backgroundColor: theme.primary }]} />}
        {!!icon && <Image source={icon} style={[styles.rowIcon, { tintColor: theme.textSecondary }]} />}
        <Text style={[styles.rowLabel, { color: theme.textSecondary }]}>{label}</Text>
      </View>
      <Text style={[styles.rowValue, { color: theme.text }]} numberOfLines={1}>{value}</Text>
    </View>
  );
};

const TripDetailsScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  // Expect a 'trip' param passed from History (fallbacks provided)
  const trip = route?.params?.trip ?? {
    platform: 'uber',
    title: 'Uber Trip',
    date: 'Dec 15, 2025',
    rating: '4.9',
    distance: '3.2 mi',
    pickup: "921, Main Street, Elm's",
    drop: "221, Main Street, Elm's",
    duration: '23 Min',
    startTime: '02:30 PM',
    endTime: '03:30 PM',
    fare: '$24.50',
    status: t('history.status.completed'),
  };

  const logo =
    trip.platform === 'uber' ? Images.uber :
    trip.platform === 'lyft' ? Images.lyft :
    Images.doorDash;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('history.details.title')} onBack={() => navigation.goBack()} />

      {/* Top header row: logo + title/date + distance pill */}
      <View style={styles.topRow}>
        <View style={[styles.logoWrap, { backgroundColor:  theme.bottom_background }]}>
          <Image source={logo} style={styles.logo} resizeMode="contain" />
        </View>

        <View style={{ flex: 1, marginLeft: 12 }}>
          <Text style={[styles.tripTitle, { color: theme.text }]} numberOfLines={1}>
            {trip.title}
          </Text>
          <View style={styles.inline}>
            <Image source={Icons.historyCalendar} style={[styles.smallIcon, { tintColor: theme.textSecondary }]} />
            <Text style={[styles.dateText, { color: theme.textSecondary }]}>{trip.date}</Text>
          </View>
        </View>

        <Pill icon={Icons.historyDistance} text={trip.distance} />
      </View>

      {/* Info card with light stripes + rating badge */}
      <View style={[styles.infoCard, { backgroundColor: theme.trip_card}]}>
        <View style={[styles.diagStripe, { right: 20, backgroundColor: theme.isDark ? 'rgba(255,255,255,0.05)' : 'rgba(59,130,246,0.08)' }]} />
        <View style={[styles.diagStripe, { right: 70, backgroundColor: theme.isDark ? 'rgba(255,255,255,0.03)' : 'rgba(59,130,246,0.05)' }]} />
        <View style={[styles.diagStripe, { right: 120, backgroundColor: theme.isDark ? 'rgba(255,255,255,0.02)' : 'rgba(59,130,246,0.03)' }]} />
        <Badge icon={Icons.historyStar} text={String(trip.rating)} />

        {/* Trip journey layout */}
        <View style={styles.journeyContainer}>
          {/* Pickup */}
          <View style={styles.locationRow}>
            <View style={styles.iconContainer}>
              <Image source={Icons.historyPickup} style={[styles.locationIcon, { tintColor: theme.textSecondary }]} />
            </View>
            <View style={styles.locationDetails}>
              <Text style={[styles.locationLabel, { color: theme.textSecondary }]}>Pickup: </Text>
              <Text style={[styles.locationValue, { color: theme.text }]}>{trip.pickup}</Text>
            </View>
          </View>

          {/* Vertical line with duration */}
          <View style={styles.journeyLine}>
            <View style={styles.verticalLineContainer}>
              {/* Top solid gray line */}
              <View style={[styles.solidLinegrey, { backgroundColor: theme.textSecondary }]} />
              {/* Middle dashed lines */}
              <View style={[styles.dashLine, { backgroundColor: theme.textSecondary }]} />
              <View style={[styles.dashGap]} />
              <View style={[styles.dashLine, { backgroundColor: theme.textSecondary }]} />
              <View style={[styles.dashGap]} />
              <View style={[styles.dashLine, { backgroundColor: theme.textSecondary }]} />
              <View style={[styles.dashGap]} />
              <View style={[styles.dashLine, { backgroundColor: theme.textSecondary }]} />
              {/* Bottom solid blue line */}
              <View style={[styles.solidLineblue, { backgroundColor: theme.primary }]} />
            </View>
            <View style={styles.durationContainer}>
              <Image source={Icons.historyDuration} style={[styles.durationIcon, { tintColor: theme.textSecondary }]} />
              <Text style={[styles.durationText, { color: theme.text }]}>{trip.duration}</Text>
            </View>
          </View>

          {/* Drop-off */}
          <View style={styles.locationRow}>
            <View style={styles.iconContainer}>
              <Image source={Icons.historyDrop} style={[styles.locationIcon, { tintColor: theme.primary }]} />
            </View>
            <View style={styles.locationDetails}>
              <Text style={[styles.locationLabel, { color: theme.textSecondary }]}>Drop-Off: </Text>
              <Text style={[styles.locationValue, { color: theme.text }]}>{trip.drop}</Text>
            </View>
          </View>
        </View>

        {/* Start and End Time */}
        <View style={styles.timeSection}>
          <View style={styles.timeItem}>
            <View style={[styles.timeIconBg]}>
               <Image source={Icons.historyClock} style={[styles.timeIcon, { tintColor: theme.primary }]} />
            </View>
            <View style={styles.timeTextContainer}>
              <Text style={[styles.timeLabel, { color: theme.textSecondary }]}>Start Time: 02:30</Text>
              <Text style={[styles.timeValue, { color: theme.text }]}>{trip.startTime}</Text>
            </View>
          </View>
          <View style={styles.timeItem}>
            <View style={[styles.timeIconBg]}>
              <Image source={Icons.historyClock} style={[styles.timeIcon, { tintColor: theme.primary }]} />
            </View>
            <View style={styles.timeTextContainer}>
              <Text style={[styles.timeLabel, { color: theme.textSecondary }]}>End Time: 03:30 </Text>
              <Text style={[styles.timeValue, { color: theme.text }]}>{trip.endTime}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Bottom area: fare + status button */}
      <View style={styles.bottomBar}>
        <Text style={[styles.fare, { color: theme.primary }]}>{trip.fare}</Text>
        <View style={styles.buttonContainer}>
          <View style={[styles.buttonTopView]} />
          <PrimaryButton
            title={trip.status}
            onPress={() => {}}
            style={{ width: 200 }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 6,
  },
  logoWrap: {
    width: 54, height: 54, borderRadius: 14,
    alignItems: 'center', justifyContent: 'center',
  },
  logo: { width: 36, height: 36, borderRadius: 8 },

  tripTitle: { fontSize: 18, fontFamily: typography.fontBold, lineHeight: 24 },
  inline: { flexDirection: 'row', alignItems: 'center', marginTop: 4, gap: 6 },
  smallIcon: { width: 16, height: 16 },

  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 30,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
  },
  pillIcon: { width: 16, height: 16 },
  pillText: { fontSize: 14, fontFamily: typography.fontSemiBold },

  infoCard: {
    marginTop: 20,
    marginHorizontal: 16,
    borderRadius: 20,
    padding: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  diagStripe: {
    position: 'absolute',
    top: -10,
    bottom: -10,
    width: 80,
    backgroundColor: 'rgba(0,0,0,0.03)',
    borderRadius: 8,
    transform: [{ skewX: '-15deg' }, { translateX: 20 }],
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  badgeIcon: { width: 12, height: 12, tintColor: '#fff' },
  badgeText: { color: '#fff', fontSize: 12, fontFamily: typography.fontMedium },

  vBar: { width: 2, height: 16, borderRadius: 2, marginRight: 8 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 10, justifyContent: 'space-between' },
  rowLeft: { flexDirection: 'row', alignItems: 'center' },
  rowIcon: { width: 18, height: 18, marginRight: 8 },
  rowLabel: { fontSize: 14, fontFamily: typography.fontSemiBold },
  rowValue: { fontSize: 14, fontFamily: typography.fontRegular, flexShrink: 1, marginLeft: 10 },

  journeyContainer: {
    marginTop: 0,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  iconContainer: {
    width: 24,
    alignItems: 'center',
    marginTop: 2,
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  locationDetails: {
    flex: 1,
    marginLeft: 12,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  locationLabel: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
  },
  locationValue: {
    fontSize: 14,
    fontFamily: typography.fontSemiBold,
    flex: 1,
  },
  journeyLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
    marginVertical: 8,
    position: 'relative',
  },
  verticalLineContainer: {
    width: 2,
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  solidLinegrey: {
    width: 2,
    height: 10,
    borderRadius: 1,
    marginBottom: 4,
  },
    solidLineblue: {
    width: 2,
    height: 10,
    borderRadius: 1,
    marginTop: 4,
  },
  dashLine: {
    width: 2,
    height: 3,
    borderRadius: 1,
  },
  dashGap: {
    width: 2,
    height: 2,
  },
  durationContainer: {
    position: 'absolute',
    left: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  durationIcon: {
    width: 16,
    height: 16,
  },
  durationText: {
    fontSize: 14,
    fontFamily: typography.fontSemiBold,
  },
  timeSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    gap: 12,
  },
  timeItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    // gap: 5,
  },
  timeIconBg: {
    width: 20,
    height: 20,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  timeIcon: {
    width: 20,
    height: 20,
    tintColor: '#fff',
  },
  timeTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  timeLabel: {
    fontSize: 12,
    fontFamily: typography.fontRegular,
  },
  timeValue: {
    fontSize: 12,
    fontFamily: typography.fontSemiBold,
  },

  bottomBar: {
    marginTop: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  buttonTopView: {
    width: 200,
    height: 8,
    borderRadius: 4,
    marginBottom: 0,
  },
  fare: { fontSize: 30, fontFamily: typography.fontSemiBold },
  dateText: { fontSize: 13, fontFamily: typography.fontRegular },
});

export default TripDetailsScreen;
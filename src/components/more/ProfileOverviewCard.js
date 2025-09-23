import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icons, Images } from '../../assets/assets';
import typography from '../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../hooks/useTheme';

const ProfileOverviewCard = ({
  name = 'John Anderson',
  memberStatus = 'profileCard.member',
  rating = 4.9,
  trips = 127,
  earnings = '$2,847',
  thisMonth = 18,
  onEdit,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.cardContainer, { backgroundColor: theme.bottom_background }]}>
      {/* Blue left line */}
      <View style={[styles.leftBlueLine, { backgroundColor: theme.primary }]} />

      <View style={[styles.card, { backgroundColor: theme.bottom_background }]}>
        {/* Edit button (unchanged) */}
        <TouchableOpacity style={styles.editBtn} onPress={onEdit}>
          <Image source={Icons.edit} style={styles.editIcon} />
          <Text style={styles.editText}>{t('profileCard.edit')}</Text>
        </TouchableOpacity>

        {/* Left Section */}
        <View style={styles.left}>
          <Image source={Images.userProfile} style={styles.avatar} />
          <Text style={[styles.name, { color: theme.text }]}>{name}</Text>
          <Text style={[styles.member, { color: theme.textSecondary }]}>{t(memberStatus)}</Text>
          <View style={styles.rating}>
            <Image source={Icons.star} style={styles.starIcon} />
            <Text style={[styles.ratingText, { color: theme.text }]}>{rating}</Text>
          </View>
        </View>

        {/* Divider */}
        <View style={[styles.divider, { borderColor: theme.border }]} />

        {/* Right Section */}
        <View style={styles.right}>
          <View style={styles.statBlock}>
            <Text style={[styles.value, { color: theme.text }]}>{trips}</Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>{t('profileCard.trips')}</Text>
          </View>

          <View style={styles.statBlock}>
            <Text style={[styles.value, { color: theme.text }]}>{earnings}</Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>{t('profileCard.earnings')}</Text>
          </View>

          <View style={styles.statBlock}>
            <Text style={[styles.value, { color: theme.text }]}>{thisMonth}</Text>
            <Text style={[styles.label, { color: theme.textSecondary }]}>{t('profileCard.thisMonth')}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    margin: 16,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    overflow: 'hidden',
  },
  leftBlueLine: {
    width: 4,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    position: 'relative',
  },
  editBtn: {
    position: 'absolute',
    top: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF', // stays the same
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  editIcon: {
    width: 16,
    height: 16,
    tintColor: '#fff', // stays the same
    marginRight: 4,
  },
  editText: {
    fontSize: 12,
    fontFamily: typography.fontMedium,
    color: '#fff', // stays the same
  },
  left: { flex: 1 },
  avatar: { width: 70, height: 70, borderRadius: 35, marginBottom: 10 },
  name: { fontSize: 17, fontFamily: typography.fontSemiBold },
  member: { fontSize: 12, fontFamily: typography.fontRegular },
  rating: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  starIcon: { width: 16, height: 16, tintColor: '#f4a261', marginRight: 4 },
  ratingText: { fontSize: 13, fontFamily: typography.fontMedium },
  divider: {
    width: 1,
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    marginHorizontal: 15,
  },
  right: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  statBlock: { alignItems: 'center', marginBottom: 8 },
  value: { fontSize: 20, fontFamily: typography.fontMedium },
  label: { fontSize: 12, fontFamily: typography.fontRegular },
});

export default ProfileOverviewCard;

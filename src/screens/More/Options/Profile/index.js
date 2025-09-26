import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import ProfileHeader from '../../../../components/more/ProfileHeader';
import { Icons } from '../../../../assets/assets';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const ProfileScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <ProfileHeader
        title={t('profile.title')}
        onBack={() => navigation.goBack()}
        onEdit={() => navigation.navigate('EditProfile')}
      />

     <ScrollView contentContainerStyle={styles.content}>
  {/* Avatar */}
  <View style={styles.avatarWrapper}>
    <Image source={Icons.avatar} style={styles.avatar} resizeMode="contain" />
  </View>

  {/* Fields */}
  <View style={styles.fieldWrapper}>
    <Text style={[styles.label, { color: theme.text }]}>{t('profile.fullname')}</Text>
    <View style={styles.row}>
      <Image source={Icons.person} style={styles.icon} />
      <Text style={[styles.value, { color: theme.textSecondary }]}>John Diaz</Text>
    </View>
    <View style={styles.divider} />   {/* ✅ Divider */}
  </View>

  <View style={styles.fieldWrapper}>
    <Text style={[styles.label, { color: theme.text }]}>{t('profile.phone')}</Text>
    <View style={styles.row}>
      <Image source={Icons.phone} style={styles.icon} />
      <Text style={[styles.value, { color: theme.textSecondary }]}>+1 (555) 010-1234</Text>
    </View>
    <View style={styles.divider} />   {/* ✅ Divider */}
  </View>

  <View style={styles.fieldWrapper}>
    <Text style={[styles.label, { color: theme.text }]}>{t('profile.email')}</Text>
    <View style={styles.row}>
      <Image source={Icons.mail} style={styles.icon} />
      <Text style={[styles.value, { color: theme.textSecondary }]}>johndiaz@gmail.com</Text>
    </View>
    <View style={styles.divider} />   {/* ✅ Divider */}
  </View>

  <View style={styles.fieldWrapper}>
    <Text style={[styles.label, { color: theme.text }]}>{t('profile.vehicleName')}</Text>
    <View style={styles.row}>
      <Image source={Icons.vehicle} style={styles.icon} />
      <Text style={[styles.value, { color: theme.textSecondary }]}>Toyota Camry</Text>
    </View>
    <View style={styles.divider} />   {/* ✅ Divider */}
  </View>

  <View style={styles.fieldWrapper}>
    <Text style={[styles.label, { color: theme.text }]}>{t('profile.vehicleModel')}</Text>
    <View style={styles.row}>
      <Image source={Icons.calendar} style={styles.icon} />
      <Text style={[styles.value, { color: theme.textSecondary }]}>2021</Text>
    </View>
    <View style={styles.divider} />   {/* ✅ Divider */}
  </View>
</ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  divider: {
  height: 1,
  backgroundColor: '#E0E0E0',  // light gray line
  marginTop: 10,
},

  content: { padding: 20, paddingBottom: 40 },
  avatarWrapper: { alignItems: 'center' }, 
  avatar: { width: 100, height: 100, borderRadius: 40 },
  fieldWrapper: { marginBottom: 16 },
  label: { fontSize: 15, fontFamily: typography.fontSemiBold, marginBottom: 6 },
  row: { flexDirection: 'row', alignItems: 'center' },
  icon: { width: 24, height: 24, marginRight: 10, tintColor: '#888' },
  value: { fontSize: 14, fontFamily: typography.fontRegular },
});

export default ProfileScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/assets';
import typography from '../../theme/typography';
import useTheme from '../../hooks/useTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ProfileHeader = ({ title, onBack, onEdit }) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { borderColor: theme.border}]}>
      {/* Back */}
      <TouchableOpacity onPress={onBack} style={styles.iconWrapper}>
        <Image source={Icons.back} style={[styles.icon, { tintColor: theme.text }]} />
      </TouchableOpacity>

      {/* Title */}
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

      {/* Edit Profile */}
      <TouchableOpacity onPress={onEdit} style={styles.iconWrapper}>
        <Image source={Icons.editProfile} style={[styles.icon, { tintColor: theme.text }]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 25,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  iconWrapper: { width: 40, height: 40, justifyContent: 'center', alignItems: 'center' },
  icon: { width: 40, height: 40 },
  title: {
    fontSize: 17,
    fontFamily: typography.fontSemiBold,
  },
});

export default ProfileHeader;
 
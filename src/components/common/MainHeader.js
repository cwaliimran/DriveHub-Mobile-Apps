import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Images, Icons } from '../../assets/assets';
import useTheme from '../../hooks/useTheme';

const MainHeader = ({ onProfilePress, onNotificationPress, showNotificationDot = true }) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const isDark = theme.background === '#121212';

  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      {/* Logo */}
      <Image
        source={isDark ? Images.logoDark : Images.logoLight}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Right actions */}
      <View style={styles.actions}>
        {/* Profile */}
        <TouchableOpacity style={styles.iconWrapper} onPress={onProfilePress}>
          <Image
            source={isDark ? Icons.darkHeaderProfile : Icons.lightHeaderProfile}
            style={styles.icon}
            resizeMode="contain"
          />
        </TouchableOpacity>

        {/* Notification */}
        <TouchableOpacity style={styles.iconWrapper} onPress={onNotificationPress}>
          <Image
            source={isDark ? Icons.darkHeaderNotification : Icons.lightHeaderNotification}
            style={styles.icon}
            resizeMode="contain"
          />
          {showNotificationDot && <View style={styles.dot} />}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    // top: 15,
  },
  logo: {
    width: 90,
    height: 36,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 34,
    height: 34,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 12,
  },
  icon: {
    width: 36,
    height: 36,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    top: 6,
    right: 6,
  },
});

export default MainHeader;

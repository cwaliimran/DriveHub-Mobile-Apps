import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Icons } from '../../assets/assets';
import typography from '../../theme/typography';
import colors from '../../theme/colors';

const AppHeader = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Image source={Icons.back} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <View style={{ width: 40 }} /> {/* spacer */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    // paddingVertical: 12,
    // borderBottomWidth: 1,
    borderColor: '#eee',
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  backIcon: {
    width: 40,
    height: 40,
    tintColor: colors.textLight,
  },
  title: {
    fontSize: 17,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
  },
});

export default AppHeader;

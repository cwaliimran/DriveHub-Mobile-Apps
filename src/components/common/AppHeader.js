import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Icons } from '../../assets/assets';
import typography from '../../theme/typography';
import useTheme from '../../hooks/useTheme';

const AppHeader = ({ title, onBack }) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();

  return (
   <View style={[styles.container, { borderColor: theme.border}]}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Image source={Icons.back} style={[styles.backIcon, { tintColor: theme.text }]} />
      </TouchableOpacity>
      <Text style={[styles.title, { color: theme.text }]}>{title}</Text>
      <View style={{ width: 40 }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginTop: 25,
    paddingHorizontal: 17,
    justifyContent: 'space-between',
  },
  backButton: {
    width: 40,
    alignItems: 'flex-start',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 17,
    fontFamily: typography.fontSemiBold,
  },
});

export default AppHeader;

import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const LanguageOption = ({ flag, label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.container, selected && styles.selectedContainer]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <Image source={flag} style={styles.flag} resizeMode="contain" />
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
      </View>
      <Image
        source={selected ? Icons.uncheck : Icons.check}
        style={styles.checkIcon}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.16)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 12,
    // backgroundColor: '#fff',
  },
  selectedContainer: {
    backgroundColor: '#007BFF',
    borderColor: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 12,
    marginLeft: 0,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.textLight,
  },
  selectedLabel: {
    color: '#fff',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
});

export default LanguageOption;
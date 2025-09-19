import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';

const LanguageOption = ({ flag, label, selected, onPress }) => {
  const scheme = useColorScheme();
  const isDark = scheme === 'dark';

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: isDark ? colors.borderDark : colors.borderLight,
          backgroundColor: isDark ? colors.backgroundDark : colors.backgroundLight,
        },
        selected && {
          backgroundColor: colors.primary,
          borderColor: colors.primary,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <Image source={flag} style={styles.flag} resizeMode="contain" />
        <Text
          style={[
            styles.label,
            { color: isDark ? colors.textDark : colors.textLight },
            selected && styles.selectedLabel,
          ]}
        >
          {label}
        </Text>
      </View>
      <Image
        source={selected ? Icons.uncheck : Icons.check}
        style={[
          styles.checkIcon,
          { tintColor: selected ? '#fff' : isDark ? colors.textDark : colors.secondary },
        ]}
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
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
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

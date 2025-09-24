import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import typography from '../../theme/typography';
import { Icons } from '../../assets/assets';
import useTheme from '../../hooks/useTheme';

const ThemeOption = ({ icon, label, selected, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          borderColor: theme.border,
          backgroundColor: theme.card,
        },
        selected && {
          backgroundColor: theme.primary,
          borderColor: theme.primary,
        },
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.row}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text
          style={[
            styles.label,
            { color: theme.text },
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
          { tintColor: selected ? '#fff' : theme.textSecondary },
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
  icon: {
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

export default ThemeOption;

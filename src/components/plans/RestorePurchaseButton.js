import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const RestorePurchaseButton = ({ onPress }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btn, { borderColor: theme.primary }]}
      activeOpacity={0.7}
    >
      <Text style={[styles.label, { color: theme.primary }]}>Restore Purchase</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 12,
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { fontSize: 16, fontFamily: typography.fontSemiBold },
});

export default RestorePurchaseButton;

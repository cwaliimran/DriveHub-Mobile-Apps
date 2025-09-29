import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const AutoRenewRow = ({ text }) => {
  const theme = useTheme();
  return (
   <View style={[styles.row, { backgroundColor: 'rgba(0, 123, 255, 0.2)',borderRadius:12 }]}>
      <View style={[styles.dot, { backgroundColor: theme.primary }]} />
      <Text style={[styles.text, { color: theme.text }]}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 14, borderRadius: 12, marginTop: 6 },
  dot: { width: 12, height: 12, borderRadius: 6 },
  text: { fontSize: 12, lineHeight: 18, fontFamily: typography.fontRegular }, // regular 12
});

export default AutoRenewRow;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Icons } from '../../../assets/assets';

/**
 * Props: { label, op, value, onEdit, onRemove }
 */
const FilterRuleRow = ({ label, op, value, onEdit, onRemove }) => {
  const theme = useTheme();
  return (
    <View style={[styles.wrap, { backgroundColor: theme.isDark ? '#0D0F10' : theme.card_theme, borderColor: 'rgba(255,255,255,0.08)' }]}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6, flexShrink: 1 }}>
        <View ><Text style={[styles.pillTypeText, { color: theme.text }]}>{label}</Text></View>
        <Text style={[styles.op, { color: theme.textSecondary }]} numberOfLines={1}>{op}</Text>
      </View>

      <View style={styles.right}>
        <TouchableOpacity onPress={onEdit} activeOpacity={0.9} style={[styles.valuePill, { backgroundColor: 'rgba(37, 99, 235, 0.15)', borderColor: 'rgba(37, 99, 235, 0.35)' }]}>
          <Text style={[styles.valueText]} numberOfLines={1}>{value}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onRemove} activeOpacity={0.8} >
          <Image source={Icons.close} style={[styles.closeIcon, { tintColor: '#EF4444' }]} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { borderWidth: 1, borderRadius: 12, padding: 12, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 10 },
  pillType: { backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 6 },
  pillTypeText: { fontSize: 13, fontFamily: typography.fontSemiBold },
  op: { fontSize: 14, fontFamily: typography.fontRegular },
  right: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  valuePill: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 5, paddingVertical: 3 },
  valueText: { color: '#3B82F6', fontSize: 13, fontFamily: typography.fontSemiBold },
  removeBtn: { width: 28, height: 28, borderRadius: 14, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(239,68,68,0.08)' },
  closeIcon: { width: 24, height: 24 },
});

export default FilterRuleRow;

import React, { useMemo } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';

/**
 * Props:
 * - valueSeconds: number
 * - onChange: (seconds:number) => void
 * - minLabel: string
 * - secLabel: string
 */
const DurationPicker = ({ valueSeconds = 0, onChange, minLabel = 'Min', secLabel = 'Sec' }) => {
  const theme = useTheme();
  const m = Math.max(0, Math.floor(valueSeconds / 60));
  const s = Math.max(0, valueSeconds % 60);

  const setM = (nm) => onChange(Math.max(0, nm) * 60 + s);
  const setS = (ns) => onChange(m * 60 + Math.max(0, Math.min(59, ns)));

  const Box = ({ value, active, onDec, onInc, label }) => (
    <View style={styles.boxWrap}>
      <TouchableOpacity onPress={onDec} activeOpacity={0.8} style={[styles.bump, { backgroundColor: 'rgba(255,255,255,0.06)' }]}>
        <Text style={[styles.bumpText, { color: theme.text }]}>–</Text>
      </TouchableOpacity>

      <View style={[
        styles.valueBox,
        {
          backgroundColor: active ? 'rgba(59,130,246,0.2)' : theme.bottom_background,
          borderColor: active ? 'rgba(59,130,246,0.4)' : 'transparent',
        }
      ]}>
        <Text style={[styles.valueText, { color: active ? theme.primary : theme.text }]}>{value.toString().padStart(2,'0')}</Text>
      </View>

      <TouchableOpacity onPress={onInc} activeOpacity={0.8} style={[styles.bump, { backgroundColor: 'rgba(255,255,255,0.06)' }]}>
        <Text style={[styles.bumpText, { color: theme.text }]}>+</Text>
      </TouchableOpacity>

      <Text style={[styles.unit, { color: theme.textSecondary }]}>{label}</Text>
    </View>
  );

  return (
    <View style={styles.row}>
      <Box
        value={m}
        active={false}
        onDec={() => setM(Math.max(0, m - 1))}
        onInc={() => setM(m + 1)}
        label={minLabel}
      />
      <Text style={[styles.colon, { color: theme.textSecondary }]}>:</Text>
      <Box
        value={s}
        active={true}
        onDec={() => setS(Math.max(0, s - 1))}
        onInc={() => setS(Math.min(59, s + 1))}
        label={secLabel}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 18 },
  colon: { fontSize: 28, fontFamily: typography.fontSemiBold, marginBottom: 30 },
  boxWrap: { alignItems: 'center' },
  bump: {
    width: 68, height: 40, borderRadius: 16,
    alignItems: 'center', justifyContent: 'center',
    marginVertical: 8,
  },
  bumpText: { fontSize: 22, fontFamily: typography.fontSemiBold },
  valueBox: {
    width: 96, height: 64, borderRadius: 20, borderWidth: 1,
    alignItems: 'center', justifyContent: 'center',
  },
  valueText: { fontSize: 32, fontFamily: typography.fontBold },
  unit: { marginTop: 10, fontSize: 13, fontFamily: typography.fontRegular },
});

export default DurationPicker;

import React, { useMemo, useState, useEffect } from 'react';
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';
import PrimaryButton from '../common/PrimaryButton';
import { useTranslation } from 'react-i18next';

const CheckRow = ({ label, checked, onToggle }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onToggle} activeOpacity={0.8} style={styles.row}>
      <View
        style={[
          styles.checkbox,
          {
            borderColor: checked ? theme.primary : theme.textSecondary,
            backgroundColor: checked ? theme.primary : 'transparent',
          },
        ]}
      />
      <Text style={[styles.rowLabel, { color: theme.text }]}>{label}</Text>
    </TouchableOpacity>
  );
};

/**
 * Props:
 * - visible: boolean
 * - initial: string[] (e.g., ['price_desc'])
 * - onClose: () => void
 * - onApply: (selectedKeys: string[]) => void
 */
const FilterModal = ({ visible, initial = [], onClose, onApply }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [selected, setSelected] = useState(new Set(initial));

  // keep in sync with prop when reopened
  useEffect(() => setSelected(new Set(initial)), [visible]);

  // all options (keys are stable for sorting logic)
  const options = useMemo(
    () => [
      { key: 'price_desc',  label: t('history.filter.highestPrice') },
      { key: 'price_asc',   label: t('history.filter.lowestPrice') },
      { key: 'time_asc',    label: t('history.filter.quickestTime') },
      { key: 'time_desc',   label: t('history.filter.slowestTime') },
      { key: 'dist_asc',    label: t('history.filter.leastDistance') },
      { key: 'dist_desc',   label: t('history.filter.mostDistance') },
      { key: 'rate_desc',   label: t('history.filter.highestReview') },
      { key: 'rate_asc',    label: t('history.filter.leastReview') },
    ],
    [t]
  );

  const toggle = (key) => {
    setSelected((prev) => {
      const copy = new Set(prev);
      copy.has(key) ? copy.delete(key) : copy.add(key);
      return copy;
    });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      {/* dim backdrop */}
      <Pressable style={styles.backdrop} onPress={onClose} />

      {/* sheet */}
      <View style={[styles.sheetWrap]}>
        <View style={[styles.sheet, { backgroundColor: theme.card_theme }]}>
          <Text style={[styles.title, { color: theme.text }]}>{t('history.filter.title')}</Text>

          <ScrollView contentContainerStyle={{ paddingVertical: 6 }}>
            {/* 2-column grid like your mock */}
            <View style={styles.grid}>
              {options.map((opt) => (
                <View key={opt.key} style={styles.cell}>
                  <CheckRow
                    label={opt.label}
                    checked={selected.has(opt.key)}
                    onToggle={() => toggle(opt.key)}
                  />
                </View>
              ))}
            </View>
          </ScrollView>

          <PrimaryButton
            title={t('history.filter.go')}
            onPress={() => onApply(Array.from(selected))}
            style={{ marginTop: 10 }}
          />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
  },
  sheetWrap: {
    position: 'absolute',
    left: 0, right: 0, bottom: 0, top: 0,
    justifyContent: 'flex-end',
  },
  sheet: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: 24,
    minHeight: 300,
  },
  title: {
    fontSize: 17,
    fontFamily: typography.fontSemiBold,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  cell: { width: '50%', paddingHorizontal: 6, paddingVertical: 6 },
  row: { flexDirection: 'row', alignItems: 'center' },
  checkbox: {
    width: 20, height: 20, borderRadius: 4,
    borderWidth: 1.5, marginRight: 10,
  },
  rowLabel: { fontSize: 14, fontFamily: typography.fontRegular },
});

export default FilterModal;

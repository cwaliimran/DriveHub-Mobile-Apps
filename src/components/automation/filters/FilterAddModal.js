import React, { useMemo, useState } from 'react';
import { Modal, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import PrimaryButton from '../../common/PrimaryButton';

const Checkbox = ({ checked, onToggle }) => {
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onToggle} style={[styles.cbBox, { borderColor: checked ? theme.primary : theme.border, backgroundColor: checked ? theme.primary : 'transparent' }]} />
  );
};

const Section = ({ title, onSelectAll, children }) => {
  const theme = useTheme();
  return (
    <View style={{ marginBottom: 18 }}>
      <View style={styles.sectionHeader}>
        <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
        <TouchableOpacity onPress={onSelectAll}><Text style={[styles.selectAll, { color: theme.primary }]}>Select All</Text></TouchableOpacity>
      </View>
      {children}
    </View>
  );
};

const FilterAddModal = ({ visible, onClose, onAdd }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [selected, setSelected] = useState(new Set());

  const groups = useMemo(() => ([
    {
      key: 'earnings', title: t('platformFilter.add.earnings'),
      items: ['fare', 'totalPay', 'surgeBonus', 'dollarPerMile', 'dollarPerHour', 'surgeMulti'],
    },
    {
      key: 'location', title: t('platformFilter.add.location'),
      items: ['pickupEta', 'pickupDistance', 'minTripTime', 'maxTripTime', 'minTotalDistance', 'maxTotalDistance'],
    },
    {
      key: 'trip', title: t('platformFilter.add.trip'),
      items: ['rideType', 'userRating', 'stackedRide', 'multipleStops', 'tripRadar', 'topTipper', 'longTrip', 'towardDestination'],
    }
  ]), [t]);

  const toggle = (key) => {
    setSelected(prev => {
      const c = new Set(prev);
      c.has(key) ? c.delete(key) : c.add(key);
      return c;
    });
  };

  const selectAll = (keys) => {
    setSelected(prev => {
      const c = new Set(prev);
      keys.forEach(k => c.add(k));
      return c;
    });
  };

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.backdrop}>
        <View style={[styles.sheet, { backgroundColor: theme.card_theme }]}>
          <ScrollView contentContainerStyle={{ paddingBottom: 14 }} showsVerticalScrollIndicator={false}>
            {groups.map(g => (
              <Section key={g.key} title={g.title} onSelectAll={() => selectAll(g.items)}>
                <View style={styles.grid}>
                  {g.items.map(k => (
                    <View key={k} style={styles.cell}>
                      <View style={styles.cbRow}>
                        <Checkbox checked={selected.has(k)} onToggle={() => toggle(k)} />
                        <Text style={[styles.cbLabel, { color: theme.text }]}>{t(`filterFields.${k}.name`)}</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </Section>
            ))}
          </ScrollView>

          <PrimaryButton title={t('platformFilter.add.cta')} onPress={() => onAdd(Array.from(selected))} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' },
  sheet: { borderTopLeftRadius: 18, borderTopRightRadius: 18, padding: 16, maxHeight: '82%' },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontFamily: typography.fontBold },
  selectAll: { fontSize: 14, fontFamily: typography.fontSemiBold },
  grid: { flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: -6 },
  cell: { width: '50%', paddingHorizontal: 6, paddingVertical: 8 },
  cbRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  cbBox: { width: 20, height: 20, borderRadius: 4, borderWidth: 1.5 },
  cbLabel: { fontSize: 14, fontFamily: typography.fontRegular },
});

export default FilterAddModal;

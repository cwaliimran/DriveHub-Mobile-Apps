import React, { useMemo, useState } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Switch, TouchableOpacity, TextInput, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import PrimaryButton from '../../../components/common/PrimaryButton';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images, Icons } from '../../../assets/assets';
import FilterAddModal from '../../../components/automation/filters/FilterAddModal';
import FilterRuleRow from '../../../components/automation/filters/FilterRuleRow';

const PlatformFilterMain = ({ route, navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const platform = route?.params?.platform ?? 'uber'; // 'uber' | 'lyft' | 'doordash'

  const logo = platform === 'uber' ? Images.uber : platform === 'lyft' ? Images.lyft : Images.doorDash;
  const title = platform === 'uber' ? t('filters.platform.uber') : platform === 'lyft' ? t('filters.platform.lyft') : t('filters.platform.doordash');

  // Toggles
  const [autoAccept, setAutoAccept] = useState(false);
  const [autoReject, setAutoReject] = useState(false);

  // Rules: each item -> { id, fieldKey, label, op, value }
  const [acceptRules, setAcceptRules] = useState([]);
  const [rejectRules, setRejectRules] = useState([]);

  // Which modal target: 'accept' | 'reject'
  const [showPickerFor, setShowPickerFor] = useState(null); // null | 'accept' | 'reject'

  // Value editor (when tapping blue pill)
  const [editing, setEditing] = useState(null); // {list:'accept'|'reject', id, fieldKey, label, value} | null

  const openPicker = (forList) => setShowPickerFor(forList);
  const closePicker = () => setShowPickerFor(null);

  const handleAddFilters = (selectedKeys) => {
    const toAdd = selectedKeys.map((k, idx) => ({
      id: `${k}-${Date.now()}-${idx}`,
      fieldKey: k,
      label: t(`filterFields.${k}.label`),
      op: t(`filterFields.${k}.opDefault`),  // e.g., "is less than"
      value: t(`filterFields.${k}.valueDefault`) // e.g., "$15.00"
    }));
    if (showPickerFor === 'accept') setAcceptRules((prev) => [...prev, ...toAdd]);
    if (showPickerFor === 'reject') setRejectRules((prev) => [...prev, ...toAdd]);
    closePicker();
  };

  const removeRule = (list, id) => {
    if (list === 'accept') setAcceptRules((prev) => prev.filter(r => r.id !== id));
    else setRejectRules((prev) => prev.filter(r => r.id !== id));
  };

  const updateRuleValue = (list, id, newValue) => {
    const upd = (arr) => arr.map(r => (r.id === id ? { ...r, value: newValue } : r));
    if (list === 'accept') setAcceptRules(upd);
    else setRejectRules(upd);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={title} onBack={() => navigation.goBack()} />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingHorizontal: 14, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >


        {/* Auto-Accept */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('platformFilter.autoAccept.title')}</Text>
              {autoAccept && (
                <TouchableOpacity onPress={() => openPicker('accept')} activeOpacity={0.9}>
                  <Image source={Icons.plus} style={[styles.plusIcon, { tintColor: theme.primary }]} />
                </TouchableOpacity>
              )}
            </View>
            <Switch
              value={autoAccept}
              onValueChange={setAutoAccept}
              thumbColor={'#fff'}
              trackColor={{ false: 'rgba(255,255,255,0.2)', true: theme.primary }}
            />
          </View>
          <Text style={[styles.caption, { color: theme.textSecondary }]}>
            {t('platformFilter.autoAccept.desc')}
          </Text>

          {/* rules */}
          {acceptRules.map((r) => (
            <FilterRuleRow
              key={r.id}
              label={r.label}
              op={r.op}
              value={r.value}
              onEdit={() => setEditing({ list: 'accept', ...r })}
              onRemove={() => removeRule('accept', r.id)}
            />
          ))}
        </View>

        {/* Auto-Reject */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionTitleRow}>
              <Text style={[styles.sectionTitle, { color: theme.text }]}>{t('platformFilter.autoReject.title')}</Text>
              {autoReject && (
                <TouchableOpacity onPress={() => openPicker('reject')} activeOpacity={0.9} >
                  <Image source={Icons.plus} style={[styles.plusIcon, { tintColor: theme.primary }]} />
                </TouchableOpacity>
              )}
            </View>
            <Switch
              value={autoReject}
              onValueChange={setAutoReject}
              thumbColor={'#fff'}
              trackColor={{ false: 'rgba(255,255,255,0.2)', true: theme.primary }}
            />
          </View>
          <Text style={[styles.caption, { color: theme.textSecondary }]}>
            {t('platformFilter.autoReject.desc')}
          </Text>

          {rejectRules.map((r) => (
            <FilterRuleRow
              key={r.id}
              label={r.label}
              op={r.op}
              value={r.value}
              onEdit={() => setEditing({ list: 'reject', ...r })}
              onRemove={() => removeRule('reject', r.id)}
            />
          ))}
        </View>

        {/* (Optional) Save button */}
        {/* <PrimaryButton label={t('common.save')} onPress={() => {}} /> */}
      </ScrollView>

      {/* Add filters modal */}
      <FilterAddModal
        visible={!!showPickerFor}
        onClose={() => setShowPickerFor(null)}
        onAdd={handleAddFilters}
      />

      {/* Value editor */}
      {editing && (
        <ValueEditModal
          current={editing.value}
          onCancel={() => setEditing(null)}
          onSave={(val) => { updateRuleValue(editing.list, editing.id, val); setEditing(null); }}
        />
      )}
    </View>
  );
};

/* small inline modal for editing a value pill */
const ValueEditModal = ({ current, onCancel, onSave }) => {
  const theme = useTheme();
  const [text, setText] = useState(String(current ?? ''));
  
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={true}
      onRequestClose={onCancel}
      presentationStyle="overFullScreen"
    >
      <View style={styles.editBackdrop}>
        <View style={[styles.editSheet, { backgroundColor: theme.card_theme }]}>
          <Text style={[styles.editTitle, { color: theme.text }]}>Edit Value</Text>
          <View style={[styles.inputWrap, { borderColor: theme.border ?? 'rgba(255,255,255,0.15)'}]}>
            <TextInput
              style={[styles.textInput, { color: theme.text }]}
              value={text}
              onChangeText={setText}
              placeholder="Enter value"
              placeholderTextColor={theme.textSecondary}
              autoFocus={false}
              selectTextOnFocus={false}
              autoCorrect={false}
              autoCapitalize="none"
            />
          </View>
          <View style={{ height: 8 }} />
          <PrimaryButton title="Save" onPress={() => onSave(text)} />
          <View style={{ height: 8 }} />
          <PrimaryButton title="Cancel" onPress={onCancel} variant="ghost" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  brandRow: {
    flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 8, paddingHorizontal: 2,
  },
  brandLogoWrap: { width: 44, height: 44, borderRadius: 12, alignItems: 'center', justifyContent: 'center' },
  brandLogo: { width: 28, height: 28 },
  brandName: { fontSize: 20, fontFamily: typography.fontSemiBold },

  section: { marginTop: 10, borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: 'rgba(255,255,255,0.1)', paddingTop: 12 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  sectionTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  sectionTitle: { fontSize: 18, fontFamily: typography.fontBold },
  caption: { marginTop: 4, fontSize: 12, fontFamily: typography.fontRegular },

  plusPill: { height: 22, paddingHorizontal: 8, borderRadius: 8, borderWidth: 1, alignItems: 'center', justifyContent: 'center' },
  plusIcon: { width: 22, height: 22 },

  editBackdrop: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.45)', 
    alignItems: 'center', 
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  editSheet: { 
    width: '100%', 
    maxWidth: 400,
    borderRadius: 14, 
    padding: 16,
    position: 'relative',
  },
  editTitle: { fontSize: 16, fontFamily: typography.fontSemiBold, marginBottom: 8 },
  inputWrap: { borderWidth: 1, borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12 },
  textInput: { fontSize: 16, fontFamily: typography.fontRegular, minHeight: 20 },
});

export default PlatformFilterMain;

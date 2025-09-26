import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import EditCardSuccessModal from '../../../../components/more/EditCardSuccessModal';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const EditCardScreen = ({ route, navigation }) => {
  const { t } = useTranslation();
  const { card } = route.params; // ✅ data passed from CardsScreen
  const [holderName, setHolderName] = useState(card.name);
  const [cardNumber, setCardNumber] = useState(card.number);
  const [expiry, setExpiry] = useState(card.expiry || '');
  const [cvc, setCvc] = useState(card.cvc || '');
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();

  const handleUpdateCard = () => {
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('more.modals.editCard.title')} />

      <View style={styles.content}>
        {/* Card holder */}
        <Text style={[styles.label, { color: theme.text }]}>
          {t('more.modals.editCard.holderName')}
        </Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
          placeholder={t('more.modals.editCard.holderName')}
          placeholderTextColor={theme.textSecondary}
          value={holderName}
          onChangeText={setHolderName}
        />

        {/* Card Number */}
        <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.editCard.number')}</Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
          placeholder={t('more.modals.editCard.number')}
          placeholderTextColor={theme.textSecondary}
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        {/* Expiry + CVC */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.editCard.expiry')}</Text>
            <TextInput
              style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
              placeholder={t('more.modals.editCard.expiry')}
              placeholderTextColor={theme.textSecondary}
              value={expiry}
              onChangeText={setExpiry}
            />
          </View>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.editCard.cvc')}</Text>
            <TextInput
              style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
              placeholder={t('more.modals.editCard.cvc')}
              placeholderTextColor={theme.textSecondary}
              value={cvc}
              onChangeText={setCvc}
            />
          </View>
        </View>

        {/* Button */}
        <View style={styles.btnWrapper}>
          <PrimaryButton title={t('more.modals.editCard.button')} onPress={handleUpdateCard} />
        </View>
      </View>

      {/* Success Modal */}
      <EditCardSuccessModal
        visible={modalVisible}
        onClose={() => {
          setModalVisible(false);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 16 },
  label: {
    fontSize: 14,
    fontFamily: typography.fontMedium,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginBottom: 16,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  half: { flex: 1, marginRight: 8 },
  btnWrapper: { width: '100%', marginTop: 'auto', marginBottom: 20 },
});

export default EditCardScreen;

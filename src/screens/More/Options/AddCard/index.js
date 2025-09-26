import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import AddCardSuccessModal from '../../../../components/more/AddCardSuccessModal';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const AddCardScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const [holderName, setHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const theme = useTheme();

  const handleAddCard = () => {
    // ✅ Normally API call here
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('more.modals.addCard.title')} />

      {/* Content */}
      <View style={styles.content}>
        {/* Card holder */}
        <Text style={[styles.label, { color: theme.text }]}>
          {t('more.modals.addCard.holderName')}
        </Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
          placeholder={t('more.modals.addCard.holderName')}
          placeholderTextColor={theme.textSecondary}
          value={holderName}
          onChangeText={setHolderName}
        />

        {/* Card Number */}
        <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.addCard.number')}</Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
          placeholder={t('more.modals.addCard.number')}
          placeholderTextColor={theme.textSecondary}
          keyboardType="numeric"
          value={cardNumber}
          onChangeText={setCardNumber}
        />

        {/* Expiry + CVC */}
        <View style={styles.row}>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.addCard.expiry')}</Text>
            <TextInput
              style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
              placeholder={t('more.modals.addCard.expiry')}
              placeholderTextColor={theme.textSecondary}
              value={expiry}
              onChangeText={setExpiry}
            />
          </View>
          <View style={styles.half}>
            <Text style={[styles.label, { color: theme.text }]}>{t('more.modals.addCard.cvc')}</Text>
            <TextInput
              style={[styles.input, { color: theme.text, borderColor: theme.border, backgroundColor: theme.card }]}
              placeholder={t('more.modals.addCard.cvc')}
              placeholderTextColor={theme.textSecondary}
              value={cvc}
              onChangeText={setCvc}
            />
          </View>
        </View>

        <View style={styles.btnWrapper}>
          <PrimaryButton title={t('more.modals.addCard.button')} onPress={handleAddCard} />
        </View>
      </View>

      {/* Success Modal */}
      <AddCardSuccessModal
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  half: {
    flex: 1,
    marginRight: 8,
  },
  btnWrapper: {
    width: '100%',
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default AddCardScreen;

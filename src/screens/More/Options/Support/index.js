import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import SuccessModal from '../../../../components/more/SuccessModal';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const ContactSupportScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleSend = () => {
    setModalVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <AppHeader title={t('more.modals.contactSupport.title')} />

      <View style={styles.container}>
        <Text style={[styles.label, { color: theme.text }]}>
          {t('more.modals.contactSupport.name')}
        </Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border }]}
          placeholder={t('more.modals.contactSupport.namePlaceholder')}
          placeholderTextColor={theme.textSecondary}
          value={name}
          onChangeText={setName}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          {t('more.modals.contactSupport.subject')}
        </Text>
        <TextInput
          style={[styles.input, { color: theme.text, borderColor: theme.border }]}
          placeholder={t('more.modals.contactSupport.subjectPlaceholder')}
          placeholderTextColor={theme.textSecondary}
          value={subject}
          onChangeText={setSubject}
        />

        <Text style={[styles.label, { color: theme.text }]}>
          {t('more.modals.contactSupport.message')}
        </Text>
        <TextInput
          style={[styles.input, styles.textArea, { color: theme.text, borderColor: theme.border }]}
          placeholder={t('more.modals.contactSupport.messagePlaceholder')}
          placeholderTextColor={theme.textSecondary}
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <View style={styles.btnWrapper}>
          <PrimaryButton
            title={t('more.modals.contactSupport.sendBtn')}
            onPress={handleSend}
          />
        </View>
      </View>

      <SuccessModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        type="contactSupport"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  label: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginTop: 20,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 13,
    fontFamily: typography.fontRegular,
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  btnWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default ContactSupportScreen;

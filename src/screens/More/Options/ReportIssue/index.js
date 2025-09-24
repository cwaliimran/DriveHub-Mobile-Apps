import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import SuccessModal from '../../../../components/more/SuccessModal';
import typography from '../../../../theme/typography';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';

const ReportIssueScreen = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [bugDetail, setBugDetail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Header */}
      <AppHeader title={t('more.modals.reportIssue.title')} />

      {/* Bug Detail */}
      <Text style={[styles.label, { color: theme.text }]}>
        {t('more.modals.reportIssue.bugDetail')}
      </Text>
      <TextInput
        style={[
          styles.textArea,
          { color: theme.text, borderColor: theme.border },
        ]}
        placeholder={t('more.modals.reportIssue.placeholder')}
        placeholderTextColor={theme.textSecondary}
        multiline
        value={bugDetail}
        onChangeText={setBugDetail}
      />

      {/* Report Button */}
      <View style={styles.btnWrapper}>
        <PrimaryButton
          title={t('more.modals.reportIssue.reportBtn')}
          onPress={() => setModalVisible(true)}
        />
      </View>

      {/* Success Modal */}
      <SuccessModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  label: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    marginTop: 20,
    marginBottom: 8,
    paddingHorizontal: 16, // Padding for label and text area
  },
  textArea: {
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    fontSize: 13,
    fontFamily: typography.fontRegular,
    height: 120,
    textAlignVertical: 'top',
    marginHorizontal: 16, // Padding for text area
  },
  btnWrapper: {
    marginTop: 'auto',
    marginBottom: 20,
    paddingHorizontal: 16, // Padding for the button
  },
});

export default ReportIssueScreen;

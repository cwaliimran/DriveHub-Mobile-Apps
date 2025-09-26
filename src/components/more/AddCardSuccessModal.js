import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
} from 'react-native';
import typography from '../../theme/typography';
import { Icons } from '../../assets/assets';
import { useTranslation } from 'react-i18next';
import useTheme from '../../hooks/useTheme';

const AddCardSuccessModal = ({ visible, onClose }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        <TouchableOpacity style={StyleSheet.absoluteFill} activeOpacity={1} onPress={onClose} />
        <View style={[styles.container, { backgroundColor: theme.card }]}>
          <Image source={Icons.successModal} style={styles.icon} resizeMode="contain" />
          <Text style={[styles.title, { color: theme.text }]}>
            {t('more.modals.addCard.success.title')}
          </Text>
          <Text style={[styles.desc, { color: theme.textSecondary }]}>
            {t('more.modals.addCard.success.desc')}
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: theme.primary }]}
            onPress={onClose}
          >
            <Text style={styles.buttonText}>
              {t('more.modals.addCard.success.button')}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  icon: { width: 150, height: 120, marginBottom: 15 },
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff', // ✅ always white for contrast
  },
});

export default AddCardSuccessModal;

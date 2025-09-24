import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const SuccessModal = ({ visible, onClose }) => {
  const { t } = useTranslation();

  if (!visible) return null;

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={onClose}
      statusBarTranslucent={true} // 👈 ensures overlay covers status bar
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose} // 👈 tapping overlay closes modal
      >
        <TouchableOpacity
          style={styles.container}
          activeOpacity={1} // prevent closing when clicking inside modal
        >
          {/* Icon */}
          <Image source={Icons.successModal} style={styles.icon} resizeMode="contain" />

          {/* Title */}
          <Text style={styles.title}>{t('more.modals.reportIssue.success.title')}</Text>

          {/* Description */}
          <Text style={styles.desc}>{t('more.modals.reportIssue.success.desc')}</Text>

          {/* Confirm Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>
              {t('more.modals.reportIssue.success.button')}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </TouchableOpacity>
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
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  icon: { width: 147, height: 120, marginBottom: 15 },
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
    marginBottom: 8,
    textAlign: 'center',
  },
  desc: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
});

export default SuccessModal;

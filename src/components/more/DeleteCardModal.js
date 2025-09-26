import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { Icons } from '../../assets/assets';
import { useTranslation } from 'react-i18next';

const DeleteCardModal = ({ visible, onClose, onConfirm }) => {
  const { t } = useTranslation();

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <View style={styles.overlay}>
        {/* Background clickable */}
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={StyleSheet.absoluteFill} />
        </TouchableWithoutFeedback>

        {/* Modal box */}
        <View style={styles.container}>
          {/* Icon */}
          <Image source={Icons.deleteCardModal} style={styles.icon} resizeMode="contain" />

          {/* Title */}
          <Text style={styles.title}>{t('cards.deleteModal.title')}</Text>

          {/* Description */}
          <Text style={styles.desc}>{t('cards.deleteModal.desc')}</Text>

          {/* Confirm Button */}
          <TouchableOpacity
            style={[styles.confirmBtn, { backgroundColor: '#A50000' }]}
            onPress={onConfirm}
          >
            <Text style={styles.confirmText}>{t('cards.deleteModal.button')}</Text>
          </TouchableOpacity>

          {/* Cancel */}
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>{t('more.modals.cancel')}</Text>
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
    paddingTop: 50,
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  icon: { width: 147, height: 120, marginBottom: 15},
  title: {
    fontSize: 20,
    fontFamily: typography.fontSemiBold,
    color: colors.textLight,
    textAlign: 'center',
    marginBottom: 8,
  },
  desc: {
    fontSize: 15,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    textAlign: 'center',
    marginBottom: 20,
  },
  confirmBtn: {
    paddingVertical: 13,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  confirmText: {
    fontSize: 15,
    fontFamily: typography.fontMedium,
    color: '#fff',
  },
  cancel: {
    fontSize: 14,
    fontFamily: typography.fontRegular,
    color: colors.secondary,
    marginTop: 15,
  },
});

export default DeleteCardModal;

import React from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Image, StatusBar, TouchableWithoutFeedback } from 'react-native';
import typography from '../../theme/typography';
import colors from '../../theme/colors';
import { useTranslation } from 'react-i18next';

const ActionModal = ({ visible, onClose, onConfirm, icon, type }) => {
  const { t } = useTranslation();

  if (!visible) return null;

  const getButtonColor = () => {
    if (type === 'logout') {
      return colors.primary; // blue
    } else if (type === 'delete' || type === 'cache') {
      return '#A50000'; // red
    }
    return colors.primary;
  };


  

  return (
    <Modal transparent animationType="fade" visible={visible} onRequestClose={onClose}>
      <StatusBar barStyle="light-content" backgroundColor="rgba(0, 0, 0, 0.4)" />
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.container}>
              {/* Icon */}
              <Image source={icon} style={styles.icon} resizeMode="contain" />

              {/* Title */}
              <Text style={styles.title}>{t(`more.modals.${type}.title`)}</Text>

              {/* Description */}
              <Text style={styles.desc}>{t(`more.modals.${type}.desc`)}</Text>

              {/* Confirm Button */}
              <TouchableOpacity
                style={[styles.confirmBtn, { backgroundColor: getButtonColor() }]}
                onPress={onConfirm}
              >
                <Text style={styles.confirmText}>{t(`more.modals.${type}.button`)}</Text>
              </TouchableOpacity>

              {/* Cancel */}
              <TouchableOpacity onPress={onClose}>
                <Text style={styles.cancel}>{t('more.modals.cancel')}</Text>
              </TouchableOpacity>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50, // Add padding to cover notch area
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
    paddingHorizontal: 30,
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

export default ActionModal;

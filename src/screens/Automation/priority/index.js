import React, { useState } from 'react';
import { View, StyleSheet, Text, ImageBackground, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import AppHeader from '../../../components/common/AppHeader';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Images, Icons } from '../../../assets/assets';
import PlatformPriorityTile from '../../../components/automation/priority/PlatformPriorityTile';
import DraggablePriorityList from '../../../components/automation/priority/DraggablePriorityList';

const PlatformPriorityScreen = ({ navigation }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [order, setOrder] = useState([
    { key: 'lyft',     title: t('automation.priorityCard.lyft') },
    { key: 'uber',     title: t('automation.priorityCard.uber') },
    { key: 'doordash', title: t('automation.priorityCard.doordash') },
  ]);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('priority.title')} onBack={() => navigation.goBack()} />

      {/* banner */}
      <View style={[styles.banner, { backgroundColor: '#4A90E2' }]}>
        <View style={styles.bannerInner}>
          <View style={styles.iconCircle}>
            <Image source={Icons.infoCircle} style={[styles.bannerIcon, { tintColor: '#FFFFFF' }]} />
          </View>
          <Text style={[styles.bannerText, { color: '#FFFFFF' }]} numberOfLines={2}>
            {t('priority.banner')}
          </Text>
        </View>
      </View>

      {/* Drag list */}
      <DraggablePriorityList
        data={order}
        itemHeight={84}                // matches tile height
        onChange={setOrder}            // get new order back
        renderTile={(item, rank, isActive) => (
          <PlatformPriorityTile platform={item.key} title={item.title} rank={rank} isActive={isActive} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  banner: { 
    marginHorizontal: 16, 
    marginTop: 8, 
    borderRadius: 16, 
    overflow: 'hidden'
  },
  bannerInner: {
    flexDirection: 'row', 
    alignItems: 'center', 
    paddingHorizontal: 16, 
    paddingVertical: 14,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bannerIcon: { width: 32, height: 32 },
  bannerText: { 
    flex: 1,
    fontSize: 12, 
    fontFamily: typography.fontRegular 
  },
});

export default PlatformPriorityScreen;

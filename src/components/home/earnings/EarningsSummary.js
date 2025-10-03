import React, { memo } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../hooks/useTheme';
import typography from '../../../theme/typography';
import { Icons } from '../../../assets/assets';

/**
 * Props:
 *  - data: Array<{ key: string; label: string; value: string | number; icon?: any }>
 *      e.g. [{ key:'today', label:t('home.earnings.today'), value:'$127' }, ...]
 *  - title?: string
 */
const EarningsSummary = ({ data = [], title }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  const renderItem = ({ item }) => (
    <View style={[styles.card, { backgroundColor: theme.card_theme, shadowColor: '#000' }]}>
      <View style={[styles.iconWrap]}>
        <Image source={item.icon || Icons.moneyCircle} style={styles.icon} />
      </View>
      <Text style={[styles.label, { color: theme.textSecondary }]} numberOfLines={1}>
        {item.label}
      </Text>
      <Text style={[styles.value, { color: theme.primary, textAlign: 'right' }]} numberOfLines={1}>
        {String(item.value)}
      </Text>
    </View>
  );

  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { color: theme.text }]}>{title || t('home.earnings.title')}</Text>

      <FlatList
        data={data}
        keyExtractor={(it) => it.key}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 14 }} />}
        snapToAlignment="start"
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrap: { marginTop: 10 },
  title: {
    marginLeft: 16,
    marginBottom: 10,
    fontSize: 24,
    fontFamily: typography.fontSemiBold,
  },
  card: {
    flex:   1,
    borderRadius: 20,
    padding: 16,
    justifyContent: 'flex-start',
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },
  iconWrap: {
    width: 40, height: 40, borderRadius: 20,
    alignItems: 'center', justifyContent: 'center',
    marginBottom: 10,
  },
  icon: { width: 40, height: 40 },
  label: { fontSize: 13, fontFamily: typography.fontSemiBold, marginTop: 2 },
  value: { fontSize: 30, lineHeight: 44, fontFamily: typography.fontExtraBold ?? typography.fontBold, marginTop: 5 },
});

export default memo(EarningsSummary);

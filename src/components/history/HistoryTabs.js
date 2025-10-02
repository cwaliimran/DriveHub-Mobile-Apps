import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import useTheme from '../../hooks/useTheme';
import typography from '../../theme/typography';

const HistoryTabs = ({ tabs = [], activeTab, onChange }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { borderBottomColor: theme.border ?? '#E5E7EB' }]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scroll}
      >
        {tabs.map((tab, i) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[
                styles.tab,
                isActive && [styles.activeTab, { backgroundColor: theme.primary }]
              ]}
              onPress={() => onChange(tab.key)}
              activeOpacity={0.8}
            >
              <Text
                style={[
                  styles.label,
                  isActive ? styles.activeLabel : styles.inactiveLabel,
                  {
                    color: isActive ? '#fff' : theme.textSecondary,
                    fontFamily: isActive ? typography.fontMedium : typography.fontRegular,
                  },
                ]}
              >
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    // height: 50,
    // justifyContent: 'center',
  },
  scroll: {
    paddingHorizontal: 16,
    flexGrow: 0,
    height: 42,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 0,
    marginRight: 8,
    minWidth: 80,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: -2 },
    elevation: 2,
  },
  label: {
    textAlign: 'center',
  },
  activeLabel: {
    fontSize: 13,
  },
  inactiveLabel: {
    fontSize: 12,
  },
});

export default HistoryTabs;

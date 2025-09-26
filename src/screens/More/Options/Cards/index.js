import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import AppHeader from '../../../../components/common/AppHeader';
import CardItem from '../../../../components/more/CardItem';
import PrimaryButton from '../../../../components/common/PrimaryButton';
import { useTranslation } from 'react-i18next';
import useTheme from '../../../../hooks/useTheme';
import DeleteCardModal from '../../../../components/more/DeleteCardModal';

const CardsScreen = ({ navigation })  => {
  const { t } = useTranslation();
  const theme = useTheme();

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);

  const [cards, setCards] = useState([
    { id: '1', name: 'John Doe', number: 'xxxx xxxx xxxx 3214' },
    { id: '2', name: 'Jane Doe', number: 'xxxx xxxx xxxx 9876' },
  ]);

  const handleDeleteConfirm = () => {
    if (selectedCardId) {
      setCards(prev => prev.filter(card => card.id !== selectedCardId));
      setSelectedCardId(null); // reset
    }
    setDeleteModalVisible(false);
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <AppHeader title={t('cards.title')} />

      {/* Cards List */}
      <FlatList
        data={cards}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CardItem
            name={item.name}
            maskedNumber={item.number}
            onEdit={() => navigation.navigate('EditCard', { card: item })}
            onDelete={() => {
                console.log("Delete pressed for:", item.id);

              setSelectedCardId(item.id);  // ✅ store card id
              setDeleteModalVisible(true); // ✅ show modal
            }}
          />
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      {/* Add New Card */}
      <View style={styles.btnWrapper}>
        <PrimaryButton
          title={t('cards.addNew')}
          onPress={() => navigation.navigate('AddCard')}
        />
      </View>

      {/* Delete Modal */}
      <DeleteCardModal
        visible={deleteModalVisible}
        onClose={() => {
          setDeleteModalVisible(false);
          setSelectedCardId(null);
        }}
        onConfirm={handleDeleteConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  btnWrapper: {
    margin: 20,
  },
});

export default CardsScreen;

import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  PanResponder,
  Animated,
  StyleSheet,
} from 'react-native';

/**
 * Props:
 * - data: Array<{ key: string, title: string }>
 * - renderTile: (item, rank, isActive) => ReactNode
 * - onChange: (newOrder) => void
 * - itemHeight?: number (default 84)
 */
const DraggablePriorityList = ({
  data,
  renderTile,
  onChange,
  itemHeight = 84,
}) => {
  const [order, setOrder] = useState(data);
  const [activeKey, setActiveKey] = useState(null);
  const panRefs = useRef({});

  const getPan = (key) => {
    if (!panRefs.current[key]) {
      panRefs.current[key] = new Animated.ValueXY({ x: 0, y: 0 });
    }
    return panRefs.current[key];
  };

  const renderItem = ({ item, index }) => {
    const pan = getPan(item.key);
    const isActive = activeKey === item.key;

    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setActiveKey(item.key);
        pan.setOffset({ x: pan.x._value, y: pan.y._value });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gesture) => {
        pan.flattenOffset();
        const moved = Math.round(gesture.dy / itemHeight);
        let newIndex = index + moved;
        newIndex = Math.max(0, Math.min(order.length - 1, newIndex));

        if (newIndex !== index) {
          const updated = [...order];
          updated.splice(index, 1);
          updated.splice(newIndex, 0, item);
          setOrder(updated);
          onChange?.(updated);
        }

        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start(() => setActiveKey(null));
      },
    });

    return (
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          { height: itemHeight },
          { transform: pan.getTranslateTransform() },
          isActive && { zIndex: 999, elevation: 999 },
        ]}
      >
        {renderTile(item, index + 1, isActive)}
      </Animated.View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={order}
        keyExtractor={(it) => it.key}
        renderItem={renderItem}
        scrollEnabled={activeKey === null}
        contentContainerStyle={{ paddingBottom: 40 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default DraggablePriorityList;
import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import ListItem from "./ListItem";

//data
const data = [
  {
    id: "1",
    isViewable: true,
  },
  {
    id: "2",
    isViewable: true,
  },
  {
    id: "3",
    isViewable: true,
  },
  {
    id: "4",
    isViewable: true,
  },
  {
    id: "5",
    isViewable: true,
  },
  {
    id: "6",
    isViewable: true,
  },
  {
    id: "7",
    isViewable: true,
  },
  {
    id: "8",
    isViewable: true,
  },
  {
    id: "9",
    isViewable: true,
  },
  {
    id: "10",
    isViewable: true,
  },
  {
    id: "11",
    isViewable: true,
  },
  {
    id: "12",
    isViewable: true,
  },
  {
    id: "13",
    isViewable: true,
  },
  {
    id: "14",
    isViewable: true,
  },
  {
    id: "15",
    isViewable: true,
  },
];
const Lab3_b2 = () => {

  const viewableItems = useSharedValue([]);
  return (
    <View style={styles.container}>
      
      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
        showsVerticalScrollIndicator={false}
      />
    
    </View>
  )
}

export default Lab3_b2

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
})
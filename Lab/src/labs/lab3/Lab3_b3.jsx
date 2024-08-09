import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withTiming,
  useAnimatedProps
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
const Lab3_b3 = () => {


  const viewableItems = useSharedValue([]);

  //view
  const height_view = useSharedValue(250);
  //img
  const width_img = useSharedValue(150);
  const height_img = useSharedValue(150);
  //txt
  const marginLeft_txt = useSharedValue(20);
  const marginTop_txt = useSharedValue(180);

  const animatedStyles_view = useAnimatedStyle(() => ({
    height: withSpring(height_view.value),
  }));
  const animatedStyles_img = useAnimatedStyle(() => ({
    height: withSpring(height_img.value),
    width: withSpring(width_img.value),
  }));
  const animatedStyles_txt = useAnimatedStyle(() => ({
    marginLeft: withSpring(marginLeft_txt.value),
    marginTop: withSpring(marginTop_txt.value),
  }));

  const handleScroll = (event) => {

    //height của scroll
    const positionY = event.nativeEvent.contentOffset.y;
    console.log(positionY);

    if (positionY == 0) {
      //view
      height_view.value = 250;
      //img
      height_img.value = 150;
      width_img.value = 150;
      //txt
      marginLeft_txt.value = 20;
      marginTop_txt.value = 180;
    }else{
      //view
      height_view.value = 100;
      //img
      height_img.value = 50;
      width_img.value = 50;
      //txt
      marginLeft_txt.value = 100;
      marginTop_txt.value = 30;
    }

  };


  return (
    <View style={styles.container}>

      <Animated.View style={[styles.header,animatedStyles_view]} >

        <Animated.Image
          // resizeMode="center"
          style={[styles.avatar,animatedStyles_img]}
          source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zEEISvcs1XuhHOPNI0aUElsa46Fmv5NLDg&s" }}
        />
        <Animated.Text
          style={[styles.txt,animatedStyles_txt]}
        >
          Nguyen Van A
        </Animated.Text>

      </Animated.View>

      <FlatList
        data={data}
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems;
        }}
        renderItem={({ item }) => {
          return <ListItem item={item} viewableItems={viewableItems} />;
        }}
        showsVerticalScrollIndicator={false}
        // onScrollEndDrag={() => console.log("end")}
        // onScrollBeginDrag={() => console.log("start")}
        onScroll={handleScroll}
      />

    </View>
  )
}

export default Lab3_b3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    // height: 250,
    width: "100%",
    backgroundColor: 'green',
    
  },
  avatar: {
    // width: 200,
    // height: 200,
    margin: 20,
  },
  txt:{
    color: "white",
    fontSize: 20,
    width: 150,
    position: "absolute",
    //marginLeft: 20,
  },  
})
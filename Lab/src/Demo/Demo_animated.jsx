import { StyleSheet, Text, View, Button } from 'react-native'
import React, {useState} from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Demo_animated = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const handlePress = (index) => {
    if(index == 1) {
      translateY.value += 70;
      setTimeout(() => {
        handlePress(2);
      }, 1000)
    }else if(index == 2){
      translateX.value += 70;
      setTimeout(() => {
        handlePress(3);
      }, 1000)
    }else if(index == 3){
      translateY.value -= 70;
      setTimeout(() => {
        handlePress(4);
      }, 1000)
    }else if(index == 4){
      translateX.value -= 70;
      setTimeout(() => {
        handlePress(1);
      }, 1000)
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(translateX.value * 4) },
      { translateY: withSpring(translateY.value * 4) },
    ]
  }));


  return (
    <>
      <Animated.View style={[styles.box,animatedStyles]} />
      <View style={styles.container}>
        <Button 
          onPress={() => {
            handlePress(1)
          }} 
          title="Click me" />
      </View>
    </>
  );
}

export default Demo_animated

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
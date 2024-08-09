import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';

const Lab3_b1 = () => {

  const offset = useSharedValue(0);

  const handlePress = () => {
    offset.value += Math.floor(Math.random() * 200);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateY: withSpring(offset.value, {
        mass: 1,
        damping: 10,
        stiffness: 100,
        overshootClamping: false,
        restDisplacementThreshold: 0.01,
        restSpeedThreshold: 2,
        // reduceMotion: ReduceMotion.System,
      })},
    ]
  }));
  return (
    <View style={styles.container}>
      
      <Button
          onPress={() => {
            handlePress(1)
          }}
          title="Click me" />

      <Animated.View style={[styles.box, animatedStyles]} />
  
    </View>
  )
}

export default Lab3_b1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
})
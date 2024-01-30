import React, { useRef } from 'react';
import {
  Image,
  PanResponder,
  StyleSheet,
  Text,
  View,
  Animated,
} from 'react-native';

import arrow from '../images/arrow-down.png';
import spinWheel from '../images/Spinning-Wheel-Vector-PNG-File.png';

const SpinningWheel = () => {
  // animated value to rotate the wheel

  const rotateValue = useRef(new Animated.Value(0)).current; // useRef makes it always the same value

  //Allows you to swipe the circle
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (
      event: GestureResponderEvent,
      gestureState: PanResponderGestureState
    ) => {
      rotateValue.setValue(gestureState.dy);
      // console.warn(gestureState.dy); //For Testing
    },
  });
  // map the num of pixels to the rotation num of degree
  //interpolate is a function
  const spinnerRotation = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '1deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Spin For Tasks</Text>
      <Image source={arrow} style={styles.arrow} />

      <Animated.Image
        source={spinWheel}
        style={[styles.spinWheel, { transform: [{ rotate: spinnerRotation }] }]} //add rotation to image and will start to see image spine// }
        {...panResponder.panHandlers}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    // color: '#FF0000',
    width: 52,
    height: 52,
  },
  header: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    // fontWeight: 'bold',
    letterSpacing: 4,
    textShadowColor: '#fff',
    textShadowRadius: 6,
  },
  spinWheel: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
});

export default SpinningWheel;

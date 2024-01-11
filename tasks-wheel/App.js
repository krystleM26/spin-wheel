import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import WheelTasks from './wheel/WheelTasks.js';
import SpinningWheel from './wheel/SpinningWheel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <SpinningWheel />
        {/* <WheelTasks /> */}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    text: 'center',
  },
});

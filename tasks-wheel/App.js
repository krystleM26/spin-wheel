import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WheelTasks from './wheel/WheelTasks.js';
import SpinningWheel from './wheel/SpinningWheel';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
export default function App() {
  const handleSpinPress = (task) => {
    console.log('Spinning wheel with task: ${task}');
  };

  return (
    <GestureHandlerRootView style={styles.container}>
      <WheelTasks onSpinPress={handleSpinPress} />

      <SpinningWheel onSpinPress={handleSpinPress} />
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
    top: 130,
  },
});

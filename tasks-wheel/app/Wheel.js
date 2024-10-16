import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Animated } from 'react-native';

const Wheel = ({ tasks }) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');
  const spinValue = new Animated.Value(0);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    const randomIndex = Math.floor(Math.random() * tasks.length);
    const randomDegrees = 360 * 5 + randomIndex * (360 / tasks.length);

    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: randomDegrees,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      setSelectedTask(tasks[randomIndex]);
      setSpinning(false);
    });
  };

  const spinInterpolate = spinValue.interpolate({
    inputRange: [0, 360 * 10],
    outputRange: ['0deg', '3600deg'],
  });

  return (
    <View style={styles.wheelContainer}>
      <Animated.View style={{ transform: [{ rotate: spinInterpolate }] }}>
        <View style={styles.wheel}>
          {tasks.map((task, index) => (
            <View
              key={index}
              style={{
                ...styles.task,
                transform: [{ rotate: `${(360 / tasks.length) * index}deg` }],
              }}
            >
              <Text>{task}</Text>
            </View>
          ))}
        </View>
      </Animated.View>
      <Button title="Spin the Wheel" onPress={spinWheel} disabled={spinning} />
      {selectedTask && <Text style={styles.selectedTask}>Selected Task: {selectedTask}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wheelContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  wheel: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 10,
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  task: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    top: 0,
    left: '50%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  selectedTask: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Wheel;
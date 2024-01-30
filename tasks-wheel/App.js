import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WheelTasks from './wheel/WheelTasks.js';
// import SpinningWheel from './wheel/SpinningWheel';

import SpinWheel from './wheel/SpinWheel.js';

export default function App() {
  const [tasks, setTasks] = useState([
  
  ]);
 

 
  const handleTasks = (newTask) => {
    if (tasks.length > 5) {
      tasks.shift(); // Remove the first element
      
    }
    tasks.push(newTask);
    setTasks([...tasks]); // Update state with the modified data
    console.log(tasks)
  };

  console.log(tasks)

  return (
    <View style={styles.container}>
      <WheelTasks onAddTask={handleTasks} />
      <SpinWheel data={tasks}  />
     
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    text: 'center',
    // top: 130,
  },
});

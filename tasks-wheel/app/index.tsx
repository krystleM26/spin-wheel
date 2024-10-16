import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Wheel from './Wheel'; // This will be the component for the spinning wheel

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Wheel</Text>
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Enter a task"
      />
      <Button title="Add Task" onPress={addTask} />
      {tasks.length > 0 && <Wheel tasks={tasks} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
});



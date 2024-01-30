import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

const WheelTasks = ({ onAddTask }) => {
  const [inputText, setInputText] = useState('');
  const[ tasks, setTasks] = useState([])

  const addTasks = () => {
    if (!inputText) {
      Alert.alert('Error', 'Please Add Tasks');
      return;
    }

    setTasks([...tasks, inputText])

    setInputText('');
  };
  console.log(tasks)

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder=" Enter Task Here"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />

      <TouchableOpacity style={styles.button} onPress={addTasks}>
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  input: {
    height: 30,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WheelTasks;

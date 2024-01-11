import React, { useState } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  StyleSheet,
} from 'react-native';

const WheelTasks = () => {
  const [inputText, setInputText] = useState('');

  const spinWheel = () => {
    if (!inputText) {
      Alert.alert('Error', 'Please enter something to spin');
      return;
    }
  };

  return (
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder=" Enter Task Here"
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
         <TouchableOpacity onPress={spinWheel}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Add Task</Text>
        </View>
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

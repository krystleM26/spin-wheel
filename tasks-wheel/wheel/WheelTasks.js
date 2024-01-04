import React, { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

const WheelTasks = () => {
  const [inputText, setInputText] = useState('');
  
  const spinWheel = () => {
    if(!inputText){
        Alert.alert('Error', 'Please enter something to spin');
        return;

    }
  }
  
  

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        style={{
          height: 40,
          borderColor: ' gray',
          borderWidth: 1,
          marginBottom: 20,
          paddingHorizontal: 10,
        }}
        placeholder=" Enter Task Here"
        value={inputText}
        onChange={(text) => setInputText(text)}
      />

      <TouchableOpacity onPress={spinWheel}></TouchableOpacity>
    </View>
  );
};

export default WheelTasks;

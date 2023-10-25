import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

export default function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  function handleInput(text) {
    setInput(text);
  }

  function addTaskHandler() {
    addTask(input);
    setInput('');
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Task"
        onChangeText={handleInput}
        value={input}
      />
      {/* buttons not like web */}
      <Button onPress={addTaskHandler} color="steelblue" title="Add" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    padding: 8,
  },
});

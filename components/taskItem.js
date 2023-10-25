import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

export default function TaskItem({ text, deleteTask }) {
  return (
    <View style={styles.taskItem}>
      <Pressable
        android_ripple={{ color: '#210644' }}
        onLongPress={deleteTask}
        style={({ pressed }) => pressed && styles.pressedItem} // for ios
      >
        <Text style={styles.taskText}>{text}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  taskItem: {
    margin: 6,
    borderRadius: 6,
    backgroundColor: 'steelblue',
  },
  pressedItem: {
    opacity: 0.5,
  }, // for ios
  taskText: {
    color: 'white', //react native doesn't inheirt text styling fron parent so we have to give the styling to text
    padding: 8,
  },
});

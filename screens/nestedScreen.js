import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function NestedScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.textStyle}> hi from nested screen </Text>

      {/* <Button
        title="Update the title"
        onPress={() => navigation.setOptions({ title: 'Updated!' })}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.appContainer}>
      <Text style={styles.textStyle}> hi from welcome screen </Text>

      <Button
        title="Start Using App"
        //    onPress={() => navigation.push('Main')}
        onPress={() => navigation.navigate('HomeStack')}
      />

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
  textStyle: {
    margin: 20,
  },
});

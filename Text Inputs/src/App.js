import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

export default function App() {
  const [name, setName] = useState('faris');
  const [age, setAge] = useState('40');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter Name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="your name"
        onChangeText={(val) => setName(val)}
      />

      <Text style={styles.text}>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="your age"
        onChangeText={(val) => setAge(val)}
      />
      <Text style={styles.text}>
        name: {name} age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    width: 200,
  },
  text: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

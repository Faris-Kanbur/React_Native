import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('faris');
  

  const clicHander = () => {
    setName('kanbur');
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clicHander} />
      </View>
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
  buttonContainer: {
    marginTop: 20,
  },
});

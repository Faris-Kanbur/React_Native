import React, {useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

export default function App() {
  const [name, setName] = useState('faris');
  const [person, setPerson] = useState({name: 'mario', age: 40});

  const clicHander = () => {
    setName('kanbur');
    setPerson({name: 'selim', age: 18});
  };

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>
        My name is {person.name} and my age is {person.age}
      </Text>
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

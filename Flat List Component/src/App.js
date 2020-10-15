import React, {useState} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'faris', id: '1'},
    {name: 'ali', id: '2'},
    {name: 'yusuf', id: '3'},
    {name: 'kemal', id: '4'},
    {name: 'hasan', id: '5'},
    {name: 'bekir', id: '6'},
    {name: 'kadir', id: '7'},
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24,
    textAlign: 'center',
    marginHorizontal: 10,
    marginTop:24,
  },
});

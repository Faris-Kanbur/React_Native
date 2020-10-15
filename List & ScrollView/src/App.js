import React, {useState} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    {name: 'faris', key: '1'},
    {name: 'ali', key: '2'},
    {name: 'yusuf', key: '3'},
    {name: 'kemal', key: '4'},
    {name: 'hasan', key: '5'},
    {name: 'bekir', key: '6'},
    {name: 'kadir', key: '7'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) => {
          return (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
          );
        })}

        {/* {people.map(item => (
            <View key={item.key}>
              <Text style={styles.item}>{item.name}</Text>
            </View>
        ))} */}
      </ScrollView>
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
  },
});

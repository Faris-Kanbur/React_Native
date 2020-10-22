import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';

const App = () => {
  const change = () => {
    //Spread Operator
    const user = {
      name: 'faris',
      age: 27,
      isAdmin: false,
    };

    const member = {
      ...user,
      password: '12345',
      type: null,
    };

    const myArr = [1, 2, 3, 4];
    const secArr = ['izmir', 'ankara', 'bursa', ...myArr]; // to add

    const newArr = [...myArr]; // to copy

    // Destruction Operator

    const myObj = {
      url: 'www-google.com',
      data: [1, 2, 3],
      config: 'EMPTY',
    };

    console.log(myObj.config)
    //         or
    const {config,url} = myObj
    console.log(config);
    console.log(url);
  };

  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize: 50}}>Hello There</Text>
        <Button title="log" onPress={change} />
      </View>
    </SafeAreaView>
  );
};

export default App;

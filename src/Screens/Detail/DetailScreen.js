import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {routes} from '../../routes';

const DetailsScreen = ({navigation}) => {
  const initialState = {
    name: 'Raja',
    age: 18,
  };
  const [state, setState] = useState(initialState);
  const {name, age} = state;

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={() => navigation.navigate(routes.HomeScreen)}>
        Detail Screen
      </Text>
      <TextInput
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setState({...state, name: text})}
        value={name}
      />
      <TextInput
        keyboardType="numeric"
        style={{width: 200, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => setState({...state, age: Number(text)})}
        value={age + ''}
      />
    </View>
  );
};

export default DetailsScreen;

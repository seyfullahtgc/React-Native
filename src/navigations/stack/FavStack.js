import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavScreen from '../../screens/Fav/FavScreen';
const FavStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="FavPage" component={FavScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default FavStack;

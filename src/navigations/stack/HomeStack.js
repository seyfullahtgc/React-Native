import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/Home/HomeScreen';
const HomeStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomePage" component={HomeScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default HomeStack;

import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartScreen from '../../screens/Cart/CartScreen';
const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="CartPage" component={CartScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default CartStack;

import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/Profile/ProfileScreen';
const ProfileStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfilePage" component={ProfileScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProfileStack;

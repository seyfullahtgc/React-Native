import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from '../stack/HomeStack';
import CartStack from '../stack/CartStack';
import FavStack from '../stack/FavStack';
import ProfileStack from '../stack/ProfileStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import CartContext from '../../store/CartContext';
const MainTab = () => {
  const Tab = createBottomTabNavigator();

  const {cart} = useContext(CartContext);
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
          name="Home"
          component={HomeStack}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="cart" color={color} size={26} />
            ),
            tabBarBadge: cart.length,
          }}
          name="Cart"
          component={CartStack}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="cards-heart-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="Fav"
          component={FavStack}></Tab.Screen>
        <Tab.Screen
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
          name="Profile"
          component={ProfileStack}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTab;

import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Profile from '../components/user/Profile';
import QandA from '../components/product/QandA';

const StackProfile = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
      <StackProfile.Screen name="Profile" component={Profile} />
      <StackProfile.Screen name="QandA" component={QandA} />
    </StackProfile.Navigator>
  )
}

import Home from '../components/product/Home';
import Search from '../components/product/Search';
import Notification from '../components/product/Notification';

const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Search" component={Search} />
      <Tab.Screen name="Notification" component={Notification} />
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} />
    </Tab.Navigator>
  )
}

import Detail from '../components/product/Detail';
import Cart from '../components/product/Cart';
import EditProfile from '../components/product/EditProfile';
const StackHome = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Detail" component={Detail} />
      <StackHome.Screen name="Cart" component={Cart} />
      <StackHome.Screen name="EditProfile" component={EditProfile} />
    </StackHome.Navigator>
  )
}

export default ProductNavigation
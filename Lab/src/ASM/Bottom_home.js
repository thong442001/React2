import { BackHandler, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Trang_chu/Home';
import Gio_hang from './Trang_chu/Gio_hang';
import Thong_tin_ca_nhan from './Trang_chu/Thong_tin_ca_nhan';
import Chi_tiet_san_pham from './Trang_chu/Chi_tiet_san_pham';
import Tim_kiem from './Trang_chu/Tim_kiem';



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//để chạy trang chi tiếp ( tắc bottom tab)
const Stack_home = () => {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      {/* <Stack.Screen name="Chi_tiet_sp" component={Chi_tiet_sp} /> */}
    </Stack.Navigator>
  )
}
const Stack_thong_tin = () => {
  return (
    <Stack.Navigator initialRouteName='Thong_tin_ca_nhan' screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Thong_tin_ca_nhan" component={Thong_tin_ca_nhan} />
      {/* <Stack.Screen name="Chi_tiet_sp" component={Chi_tiet_sp} /> */}
    </Stack.Navigator>
  )
}

const Bottom_home = () => {
  return (
    <Tab.Navigator
      initialRouteName='Stack_home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let src;

          if (route.name === 'Stack_home') {
            src = focused
              ? require("../img/Icon_home_black.png")
              : require('../img/Icon_home_white.png');

          } else if (route.name === 'Tim_kiem') {
            src = focused
              ? require('../img/Icon_search_black.png')
              : require('../img/Icon_search_white.png');

          } else if (route.name === 'Gio_hang') {
            src = focused
              ? require('../img/Icon_gio_hang_black.png')
              : require('../img/Icon_gio_hang_white.png');

          } else if (route.name === 'Stack_thong_tin') {
            src = focused
              ? require('../img/Icon_person_black.png')
              : require('../img/Icon_person_white.png');

          }

          return <Image
            style={{ width: 30, height: 30, marginTop: 10 }}
            source={src}
            resizeMode='contain' />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#D17842',
        tabBarActiveBackgroundColor: "red",
        tabBarInactiveBackgroundColor: "red"
      })}
    >
      <Tab.Screen name="Stack_home" component={Stack_home} options={{ title: '' }} />
      <Tab.Screen name="Tim_kiem" component={Tim_kiem} options={{ title: '' }} />
      <Tab.Screen name="Gio_hang" component={Gio_hang} options={{ title: '' }} />
      <Tab.Screen name="Stack_thong_tin" component={Stack_thong_tin} options={{ title: '' }} />
      {/* Chi_tiet_san_pham bên app */}
    </Tab.Navigator>
  )
}

export default Bottom_home

const styles = StyleSheet.create({})
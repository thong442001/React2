import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//tab tổng
import Thi from '../components/user/Thi';

const oTab = {
  Thi: { name: 'Thi', component: Thi },
  Thi1: { name: 'Thi1', component: Thi },
  Thi2: { name: 'Thi2', component: Thi },
  Thi3: { name: 'Thi3', component: Thi },
}
const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='Thi'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let src;
          if (route.name === 'Thi') {
            src = focused
              ? require("../img/Icon_home_black.png")
              : require('../img/Icon_home_white.png');
          } else if (route.name === 'Thi1') {
            src = focused
              ? require('../img/Icon_search_black.png')
              : require('../img/Icon_search_white.png');
          } else if (route.name === 'Thi2') {
            src = focused
              ? require('../img/Icon_gio_hang_black.png')
              : require('../img/Icon_gio_hang_white.png');
          } else if (route.name === 'Thi3') {
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
        tabBarActiveBackgroundColor: "grey",
        tabBarInactiveBackgroundColor: "grey",
        //tabBarStyle: styles.tab,
        //ẩn bottom khi bàn phím xuất hiện
        tabBarHideOnKeyboard: true,


      })}
    >
      {
        Object.keys(oTab).map((item, index) => {
          return <Tab.Screen
            key={index}
            name={oTab[item].name}
            component={oTab[item].component}
            options={{ title: oTab[item].name }} />
        })
      }
      {/* <Tab.Screen name="Home" component={Home} options={{ title: '' }} />
      <Tab.Screen name="Gio_hang" component={Gio_hang} options={{ title: '' }} />
      <Tab.Screen name="Notification" component={Notification} options={{ title: '' }} /> */}
    </Tab.Navigator>
  )
}

//stack home

const oStackHome = {
  TabHome: { name: 'TabHome', component: TabHome },
}
const StackHome = createNativeStackNavigator();
const ProductNavigation = () => {
  return (
    <StackHome.Navigator screenOptions={{ headerShown: false }} initialRouteName='TabHome'>
      {/* bottom navigation (TabHome)*/}
      {
        Object.keys(oStackHome).map((item, index) => {
          return <StackHome.Screen
            key={index}
            name={oStackHome[item].name}
            component={oStackHome[item].component} />
        })
      }
      {/* <StackHome.Screen name="TabHome" component={TabHome} />
      <StackHome.Screen name="Chi_tiet_san_pham" component={Chi_tiet_san_pham} />
      <StackHome.Screen name="Chinh_sua_thong_tin_ca_nhan" component={Chinh_sua_thong_tin_ca_nhan} /> */}
    </StackHome.Navigator>
  )
}


export { oTab, oStackHome }
export default ProductNavigation
const styles = StyleSheet.create({
  tab: {
    backgroundColor: 'black',
    height: 50, position: 'absolute',
    bottom: 14,
    right: 14,
    left: 14,
    borderRadius: 100,
  },
})
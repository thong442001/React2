import { StyleSheet, Image } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//tab tổng
import Home from '../components/product/Home';
import Gio_hang from '../components/product/Gio_hang';
import Notification from '../components/product/Notification';
const oTab = {
  Home: { name: 'Home', component: Home },
  // Gio_hang: { name: 'Gio_hang', component: Gio_hang },
  Notification: { name: 'Notification', component: Notification },
  //ProfileNavigation: { name: 'ProfileNavigation', component: ProfileNavigation },
}
const Tab = createBottomTabNavigator();
const TabHome = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let src;
          if (route.name === 'Home') {
            src = focused
              ? require("../img/Icon_home_black.png")
              : require('../img/Icon_home_white.png');
          } else if (route.name === 'Gio_hang') {
            src = focused
              ? require('../img/Icon_gio_hang_black.png')
              : require('../img/Icon_gio_hang_white.png');
          } else if (route.name === 'Notification') {
            src = focused
              ? require('../img/Icon_don_hang_black.png')
              : require('../img/Icon_don_hang_white.png');
          } else if (route.name === 'ProfileNavigation') {
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
        tabBarInactiveBackgroundColor: "red",
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
            options={{ title: '' }} />
        })
      }
      {/* <Tab.Screen name="Home" component={Home} options={{ title: '' }} />
      <Tab.Screen name="Gio_hang" component={Gio_hang} options={{ title: '' }} />
      <Tab.Screen name="Notification" component={Notification} options={{ title: '' }} /> */}
      <Tab.Screen name="ProfileNavigation" component={ProfileNavigation} options={{ title: '' }} />
    </Tab.Navigator>
  )
}


//stack home
import Chi_tiet_san_pham from '../components/product/Chi_tiet_san_pham';
import Chinh_sua_thong_tin_ca_nhan from '../components/user/Chinh_sua_thong_tin_ca_nhan';
const oStackHome = {
  TabHome: { name: 'TabHome', component: TabHome },
  Chi_tiet_san_pham: { name: 'Chi_tiet_san_pham', component: Chi_tiet_san_pham },
  Chinh_sua_thong_tin_ca_nhan: { name: 'Chinh_sua_thong_tin_ca_nhan', component: Chinh_sua_thong_tin_ca_nhan },
  Gio_hang: { name: 'Gio_hang', component: Gio_hang },
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


//stack setting
import Thong_tin_ca_nhan from '../components/user/Thong_tin_ca_nhan';
import QandA from '../components/product/QandA';
const oStackProfile = {
  Thong_tin_ca_nhan: { name: 'Thong_tin_ca_nhan', component: Thong_tin_ca_nhan },
  QandA: { name: 'QandA', component: QandA },
}
const StackProfile = createNativeStackNavigator();
const ProfileNavigation = () => {
  return (
    <StackProfile.Navigator screenOptions={{ headerShown: false }} initialRouteName='Thong_tin_ca_nhan'>
      {
        Object.keys(oStackProfile).map((item, index) => {
          return <StackProfile.Screen
            key={index}
            name={oStackProfile[item].name}
            component={oStackProfile[item].component} />
        })
      }
      {/* <StackProfile.Screen name="Thong_tin_ca_nhan" component={Thong_tin_ca_nhan} />
      <StackProfile.Screen name="QandA" component={QandA} /> */}
    </StackProfile.Navigator>
  )
}

export { oTab, oStackHome, oStackProfile }
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
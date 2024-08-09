import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Stack_menu from './src/Stack_menu';
import Stack_menu_lab1 from './src/labs/lab1/Stack_menu';
import Login from './src/ASM/Login';
import Game_do_vui from './src/Demo/Game_do_vui';
import Stack_menu_demo from './src/Demo/Stack_menu_demo';
import Dang_ki from './src/ASM/Dang_ki';
import Lab1_b1 from './src/labs/lab1/Lab1_b1';
import Lab1_b2 from './src/labs/lab1/Lab1_b2';
import Stack_hooks from './src/hooks/Stack_hooks';
import Demo_useRef from './src/hooks/Demo_useRef';
import Demo_useReducer from './src/hooks/Demo_useReducer';
import Demo_useCallback from './src/hooks/Demo_useCallback';
import Demo_useMemo from './src/hooks/Demo_useMemo';
import Demo_lazy from './src/hooks/Demo_lazy';
import Main_Lab2 from './src/labs/lab2/Main_Lab2';
import Custom_hook from './src/hooks/Custom_hook';
import Main_redux from './src/Redux/Main_redux';
import Demo_animated from './src/Demo/Demo_animated';
import Stack_lab3 from './src/labs/lab3/Stack_lab3';
import Lab3_b1 from './src/labs/lab3/Lab3_b1';
import Lab3_b2 from './src/labs/lab3/Lab3_b2';
import Lab3_b3 from './src/labs/lab3/Lab3_b3';
import Bottom_home from './src/ASM/Bottom_home';
import Chi_tiet_san_pham from './src/ASM/Trang_chu/Chi_tiet_san_pham';
import Man_hinh_chao from './src/ASM/Man_hinh_chao';
import Chinh_sua_thong_tin_ca_nhan from './src/ASM/Chinh_sua_thong_tin_ca_nhan';
import Camera from './src/Demo/Camera';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  
  return (
    <NavigationContainer> 
      <Stack.Navigator initialRouteName='Stack_menu'  screenOptions={{headerShown: true}}>

        {/* Menu tổng */}
        <Stack.Screen name="Stack_menu" component={Stack_menu} options={{ title: 'Menu' }}/>
        {/* Lab1 */}
        <Stack.Screen name="Stack_menu_lab1" component={Stack_menu_lab1} options={{ title: 'Lab1 Components' }}/>
        <Stack.Screen name="Lab1_b1" component={Lab1_b1} options={{ title: 'lab1_b1' }}/>
        <Stack.Screen name="Lab1_b2" component={Lab1_b2} options={{ title: 'lab1_b2' }}/>
        {/* Lab2 */}
        <Stack.Screen name="Main_Lab2" component={Main_Lab2} options={{ title: 'Lab2 Hooks' }}/>
        {/* Lab3 */}
        <Stack.Screen name="Stack_lab3" component={Stack_lab3} options={{ title: 'Lab3 Animated' }}/>
        <Stack.Screen name="Lab3_b1" component={Lab3_b1} options={{ title: 'lab3_b1' }}/>
        <Stack.Screen name="Lab3_b2" component={Lab3_b2} options={{ title: 'lab3_b2' }}/>
        <Stack.Screen name="Lab3_b3" component={Lab3_b3} options={{ title: 'lab3_b3' }}/>

        {/* Demo */}
        <Stack.Screen name="Stack_menu_demo" component={Stack_menu_demo} options={{ title: 'Demo' }}/>
        <Stack.Screen name="Game_do_vui" component={Game_do_vui} options={{ title: 'Đố vui' }}/>
        <Stack.Screen name="Demo_animated" component={Demo_animated} options={{ title: 'Animation' }}/>
        <Stack.Screen name="Camera" component={Camera} options={{ title: 'camera' }}/>
        {/* ASM */}
        <Stack.Screen name="Man_hinh_chao" component={Man_hinh_chao} options={{headerShown: false}}/>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Dang_ki" component={Dang_ki} options={{headerShown: false}}/>
        <Stack.Screen name="Chi_tiet_san_pham" component={Chi_tiet_san_pham} options={{headerShown: false}}/>
        <Stack.Screen name="Chinh_sua_thong_tin_ca_nhan" component={Chinh_sua_thong_tin_ca_nhan} options={{headerShown: false}}/>
        <Stack.Screen name="Bottom_home" component={Bottom_home} options={{headerShown: false}}/>
        
        {/* Hooks */}
        <Stack.Screen name="Stack_hooks" component={Stack_hooks} options={{ title: 'Hooks' }}/>
        <Stack.Screen name="Demo_useRef" component={Demo_useRef} options={{ title: 'useRef' }}/>
        <Stack.Screen name="Demo_useReducer" component={Demo_useReducer} options={{ title: 'useReducer' }}/>
        <Stack.Screen name="Demo_useCallback" component={Demo_useCallback} options={{ title: 'useCallback' }}/>
        <Stack.Screen name="Demo_useMemo" component={Demo_useMemo} options={{ title: 'useMemo' }}/>
        <Stack.Screen name="Demo_lazy" component={Demo_lazy} options={{ title: 'Lazy' }}/>
        <Stack.Screen name="Custom_hook" component={Custom_hook} options={{ title: 'Custom hook' }}/> 
        {/* Redux */}
        <Stack.Screen name="Main_redux" component={Main_redux} options={{ title: 'Redux' }}/>
        
      </Stack.Navigator>
    </NavigationContainer> 
  );
}

const styles = StyleSheet.create({
  
});

export default App;

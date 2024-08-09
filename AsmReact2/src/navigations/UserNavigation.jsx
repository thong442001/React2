import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../components/user/Login';
import Dang_ki from '../components/user/Dang_ki';

const oStack = {
    Login: { name: 'Login', component: Login },
    Dang_ki: { name: 'Dang_ki', component: Dang_ki },
}
const Stack = createNativeStackNavigator();
const UserNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Login'>
            {
                Object.keys(oStack).map((item, index) => {
                    return <Stack.Screen
                        key={index}
                        name={oStack[item].name}
                        component={oStack[item].component} />
                })
            }
            {/* <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dang_ki" component={Dang_ki} /> */}
        </Stack.Navigator>
    )
}

export { oStack }
export default UserNavigation
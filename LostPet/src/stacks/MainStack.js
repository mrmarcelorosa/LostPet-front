import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Preload from '../screens/Preload';
import SingIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';


const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown:false
            }}
        >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="SignIn" component={SingIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
    );
}
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from '../screens/Home';
import NewPet from '../screens/NewPet';
import Profile from '../screens/Profile';

const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="NewPet" component={NewPet} />
        <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>

);
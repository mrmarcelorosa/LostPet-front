import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import NewPet from '../screens/NewPet';
import Profile from '../screens/Profile';
import Ficha from '../screens/Ficha';
import FichaDetalhe from '../screens/FichaDetalhe';
import NewFicha from '../screens/NewFicha';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Ficha" component={Ficha} />
        <Tab.Screen name="NewPet" component={NewPet} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="FichaDetalhe" component={FichaDetalhe} />
        <Tab.Screen name="NewFicha" component={NewFicha} />
    </Tab.Navigator>

);
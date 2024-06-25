import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons'
import Favorite from '../screens/Favorite';
import Search from '../screens/Search';
import { HomeStackNavigation } from './HomeStackNavigation';

const Tab = createBottomTabNavigator()

const BottomTabNav = (): JSX.Element => (
    <Tab.Navigator>
        <Tab.Screen name='HomeStack' component={HomeStackNavigation} options={{
            tabBarIcon: ({ color }) => (
                <Feather name='home' size={28} color={color} />
            ),
            headerShown: false,
            title: "Home"
        }} />

        <Tab.Screen name='search' component={Search} options={{
            tabBarIcon: ({ color }) => (
                <Feather name='search' size={28} color={color} />
            ),
            headerShown: false
        }} />

        <Tab.Screen name='Favorite' component={Favorite} options={{
            tabBarIcon: ({ color }) => (
                <Feather name='heart' size={28} color={color} />
            ),
            headerShown: false
        }} />
    </Tab.Navigator>
)

export default BottomTabNav
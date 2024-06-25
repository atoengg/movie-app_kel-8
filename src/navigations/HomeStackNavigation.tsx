import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/Home'
import { MovieDetail } from '../screens/MovieDetail'

const Stack = createNativeStackNavigator()

export const HomeStackNavigation = () : JSX.Element => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MovieDetail' component={MovieDetail}/>
    </Stack.Navigator>
  )
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNav from './src/navigations/BottomTabNav';

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  )
}


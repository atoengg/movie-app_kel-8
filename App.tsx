import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomTabNav from './src/navigations/BottomTabNav';
import MovieDetail from './src/screens/MovieDetail';
import CategorySearchResult from './src/screens/CategorySearchResult';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Root">
        <Stack.Screen 
          name="Root" 
          component={BottomTabNav}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
        <Stack.Screen
          name="CategorySearchResult"
          component={CategorySearchResult}
          options={{ headerShown: true, title: 'Category Search Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


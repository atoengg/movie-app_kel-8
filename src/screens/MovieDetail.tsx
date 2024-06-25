import React from 'react'
import { Button, Text, View } from 'react-native'

export const MovieDetail = ({navigation} : any) : JSX.Element => {
  return (
    <View>
        <Text>Movie Detail</Text>
        <Button title='Go Back' onPress={() => navigation.goBack()}/>
    </View>
  )
}

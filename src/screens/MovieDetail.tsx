import React from 'react'
import { Text, View } from 'react-native'

export const MovieDetail = ({route} : any) : JSX.Element => {
  const {id} = route.params
  return (
    <View>
        <Text>Movie ID: {id}</Text>
    </View>
  )
}

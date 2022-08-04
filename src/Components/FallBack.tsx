import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import { errorStyle } from '../Assets/Style/errorStyle'

const FallBack = () => {
  return (
    <View style={errorStyle.container}>
      <FontAwesome5Icon name="sad-cry" size={100} color="red" />  
      <Text style={errorStyle.errorText}>Something went wrong</Text>
    </View>
  )
}

export default FallBack
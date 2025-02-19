import React from 'react';
import { View, Text } from 'react-native'


const SaludoFuncional = ({ nombre }) => {
  return (
    <View>
      <Text>Hola, {nombre}</Text>
    </View>
  )
}

export default SaludoFuncional

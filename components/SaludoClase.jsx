import React, { Component } from 'react'
import { View, Text } from 'react-native'

class SaludoClase extends Component {
  render() {
    return (
      <View>
        <Text>Hola, {this.props.nombre}</Text>
      </View>
    )
  }
}

export default SaludoClase

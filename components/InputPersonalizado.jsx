import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const InputPersonalizado = ({ placeholder, valor, setValor }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={valor}
      onChangeText={setValor}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '100%',
  }
})

export default InputPersonalizado



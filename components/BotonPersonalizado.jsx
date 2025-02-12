import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const BotonPersonalizado = ({ titulo, onPress }) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  texto: {
    color: 'ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default BotonPersonalizado;

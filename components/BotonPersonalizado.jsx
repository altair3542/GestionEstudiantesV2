import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const BotonPersonalizado = ({ titulo, color, onPress }) => {
  return (
    <TouchableOpacity style={[styles.boton, { backgroundColor: color || '#007BFF' }]} onPress={onPress}>
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  boton: { padding: 12, borderRadius: 5, alignItems: 'center', marginVertical: 5 },
  texto: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold' },
});

export default BotonPersonalizado

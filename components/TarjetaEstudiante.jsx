import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BotonPersonalizado from './BotonPersonalizado'

const TarjetaEstudiante = ({ estudiante, onVerDetalles, onEditar, onEliminar }) =>{
  return(
    <View style={styles.tarjeta}>
      <Text style={styles.nombre}>{estudiante.nombre}</Text>
      <Text style={styles.nombre}>{estudiante.carrera}</Text>
      <BotonPersonalizado titulo="Detalles" color="#17a3b8" onPress={onVerDetalles} />
      <BotonPersonalizado titulo="Editar" color="#07ff94" onPress={onEditar} />
      <BotonPersonalizado titulo="Eliminar" color="#F00" onPress={onEliminar} />
    </View>
  )
}

const styles = StyleSheet.create({
  tarjeta: { backgroundColor: '#FFF', padding: 15, marginVertical: 10, borderRadius: 8, elevation: 3},
  nombre: { fontSize:18, fontWeight: 'bold'},
  texto: { fontSize: 16, color: '#6C757D'},
})

export default TarjetaEstudiante

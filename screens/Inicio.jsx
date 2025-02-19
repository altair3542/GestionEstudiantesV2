import React from 'react'
import { View, Text, StyleSheet, Button, Alert } from 'react-native'
import BotonPersonalizado from '../components/BotonPersonalizado'

const Inicio = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestion de Estudiantes</Text>
      <BotonPersonalizado
        titulo="Ver Estudiantes" color="#28a745" onPress={() => navigation.navigate('ListaEstudiantes')}
      />
      <BotonPersonalizado
        titulo="Agregar Estudiante" color="#DC3545" onPress={() => navigation.navigate('EditarEstudiante')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
})

export default Inicio

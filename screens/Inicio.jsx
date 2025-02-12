import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BotonPersonalizado from '../components/BotonPersonalizado'

const Inicio = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gestion de Estudiantes</Text>
      <BotonPersonalizado titulo="Ver Estudiantes" onPress={() => navigation.navigate('ListaEstudiantes')} />
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


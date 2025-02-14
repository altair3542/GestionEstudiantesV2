import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BotonPersonalizado from '../components/BotonPersonalizado';
import ListaTareas from '../components/ListaTareas';

const ListaEstudiantes = ({ navigation }) => {
  const [estudiantes, setEstudiantes] = useState([
    { id: '1', nombre: 'Belarmino de las Casas' },
    { id: '2', nombre: 'Armando la Cruz'},
    { id: '3', nombre: 'Abraham Mesa Cueva'},
  ])

  return (
    <View style={styles.container}>
      <ListaTareas tareas={estudiantes} />
      <BotonPersonalizado titulo="Ver Detalles" onPress={() => navigation.navigate('DetallesEstudiante')} />
      <BotonPersonalizado titulo="Agregar Estudiante" onPress={() => console.log('abrir formulario')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  }
})

export default ListaEstudiantes

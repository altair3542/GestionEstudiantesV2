import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BotonPersonalizado from '../components/BotonPersonalizado';

const DetallesEstudiante = ({ route, navigation }) => {
  const estudiante = route?.params?.estudiante || { nombre: 'Estudiante Desconocido' }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Detalles del Estudiante</Text>
      <Text style={styles.texto}>Nombre: {estudiante.nombre}</Text>
      <BotonPersonalizado titulo="Volver" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20},
    titulo: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10
    },
    texto: {
      fontSize: 18,
      marginBottom: 10
    },
})

export default DetallesEstudiante

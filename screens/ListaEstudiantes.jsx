import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import BotonPersonalizado from '../components/BotonPersonalizado';
import TarjetaEstudiante from '../components/TarjetaEstudiante';

const ListaEstudiantes = ({ navigation, estudiantes, setEstudiantes }) => {
  const eliminarEstudiante = (id) => {
    setEstudiantes(estudiantes.filter(est => est.id !== id))
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={estudiantes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TarjetaEstudiante
            estudiante={item}
            onVerDetalles={() => navigation.navigate('DetallesEstudiante', { estudiante: item })}
            onEditar={() => navigation.navigate('EditarEstudiante', { estudiante: item })}
            onEliminar={() => eliminarEstudiante(item.id)}
          />
        )}
      />
      <BotonPersonalizado titulo="Agregar Estudiante" onPress={() => navigation.navigate('EditarEstudiante')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default ListaEstudiantes;

import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import TarjetaEstudiante from '../components/TarjetaEstudiante';

const ListaEstudiantes = ({ navigation }) => {
  const [estudiantes, setEstudiantes] = useState([
    { id: '1', nombre: 'Carlos Pérez', carrera: 'Ingeniería' },
    { id: '2', nombre: 'María González', carrera: 'Administración' },
  ]);

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
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
});

export default ListaEstudiantes;

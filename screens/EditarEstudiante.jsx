import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import BotonPersonalizado from '../components/BotonPersonalizado';

const EditarEstudiante = ({ navigation, route, estudiantes, setEstudiantes }) => {
  const estudianteExistente = route?.params?.estudiante || null;

  const [nombre, setNombre] = useState(estudianteExistente?.nombre || '');
  const [carrera, setCarrera] = useState(estudianteExistente?.carrera || '');

  const guardarEstudiante = () => {
    let nuevaLista
    if (estudianteExistente) {
      nuevaLista = estudiantes.map(est =>
        est.id === estudianteExistente.id ? { ...est, nombre, carrera } : est
      )
    } else {
      nuevaLista = [...estudiantes, {id: Date.now().toString(), nombre, carrera}]
    }

    setEstudiantes(nuevaLista)
    navigation.navigate('ListaEstudiantes')
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre del estudiante"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Carrera"
        value={carrera}
        onChangeText={setCarrera}
      />
      <BotonPersonalizado titulo="Guardar" onPress={guardarEstudiante} />
      <BotonPersonalizado titulo="Cancelar" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: '#CCC', padding: 10, borderRadius: 5, marginBottom: 10, width: '100%' },
});

export default EditarEstudiante;

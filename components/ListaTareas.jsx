import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ListaTareas = ({ tareas }) => {
  return (
    <FlatList
      data={tareas}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.tarea}>
          <Text style={styles.texto}>{item.nombre}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  tarea: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

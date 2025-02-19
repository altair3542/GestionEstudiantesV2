import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './screens/Inicio';
import ListaEstudiantes from './screens/ListaEstudiantes';
import DetallesEstudiante from './screens/DetallesEstudiante';
import EditarEstudiante from './screens/EditarEstudiante';

const Stack = createStackNavigator();

export default function App() {
  const [estudiantes, setEstudiantes] = useState([
    { id: '1', nombre: 'Carlos Pérez', carrera: 'Ingeniería' },
    { id: '2', nombre: 'María González', carrera: 'Administración' },
  ]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio">
          {(props) => <Inicio {...props} estudiantes={estudiantes} />}
        </Stack.Screen>
        <Stack.Screen name="ListaEstudiantes">
          {(props) => <ListaEstudiantes {...props} estudiantes={estudiantes} setEstudiantes={setEstudiantes} />}
        </Stack.Screen>
        <Stack.Screen name="DetallesEstudiante">
          {(props) => <DetallesEstudiante {...props} />}
        </Stack.Screen>
        <Stack.Screen name="EditarEstudiante">
          {(props) => <EditarEstudiante {...props} estudiantes={estudiantes} setEstudiantes={setEstudiantes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

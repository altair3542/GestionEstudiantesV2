import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from './src/screens/Inicio'
import ListaEstudiantes from './src/screens/ListaEstudiantes'
import DetalleEstudiante from './src/screens/DetalleEstudiante'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ListaEstudiantes" component={ListaEstudiantes} />
        <Stack.Screen name="DetalleEstudiante" component={DetalleEstudiante}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

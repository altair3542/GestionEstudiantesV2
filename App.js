import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Inicio from './screens/Inicio'
import ListaEstudiantes from './screens/ListaEstudiantes'
import DetallesEstudiante from './screens/DetallesEstudiante'


const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="ListaEstudiantes" component={ListaEstudiantes} />
        <Stack.Screen name="DetallesEstudiante" component={DetallesEstudiante}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

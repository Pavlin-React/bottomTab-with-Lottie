import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigations/Tab.js'

const App = () => {
  return (
    <NavigationContainer>
      <Tabs/>
    </NavigationContainer>
  )
}

export default App

import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const LocationScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Това е главната</Text>
      <Button
        title='Click Me'
        onPress={()=> alert('clicked')}
      />
    </View>
  )
}

export default LocationScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

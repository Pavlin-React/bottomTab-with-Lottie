import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ServiceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Service Screen</Text>
      <Button
        title='Click Me'
        onPress={()=> alert('clicked')}
      />
    </View>
  )
}

export default ServiceScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

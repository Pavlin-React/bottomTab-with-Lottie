import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const SpaScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>This is Spa Screen</Text>
      <Button
        title='Click Me'
        onPress={()=> alert('clicked')}
      />
    </View>
  )
}

export default SpaScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

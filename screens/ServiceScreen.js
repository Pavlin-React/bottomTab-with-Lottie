import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LottieView from 'lottie-react-native'

const ServiceScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/lottie-4.json')} autoPlay loop />
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

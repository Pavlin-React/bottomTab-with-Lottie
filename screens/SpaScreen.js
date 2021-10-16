import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LottieView from 'lottie-react-native'

const SpaScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/lottie.json')} autoPlay loop />
      
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

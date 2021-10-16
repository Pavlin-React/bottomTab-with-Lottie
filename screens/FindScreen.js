import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LottieView from 'lottie-react-native'

const FindScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/lottie-2.json')} autoPlay loop />
      <Button
        title='Click Me'
        onPress={()=> alert('clicked')}
      />
    </View>
  )
}

export default FindScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

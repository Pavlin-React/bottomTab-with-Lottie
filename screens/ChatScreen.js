import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import LottieView from 'lottie-react-native';

const ChatScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={{width: 200, height: 300}}>
        <LottieView source={require('../assets/lottie-1.json')} autoPlay loop />
      </View>
      <Button
        title='Click Me'
        onPress={()=> alert('clicked')}
      />
    </View>
  )
}

export default ChatScreen

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8fcbbc'
  }
})

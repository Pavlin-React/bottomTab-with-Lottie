import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatScreen from '../screens/ChatScreen'
import FindScreen from '../screens/FindScreen'
import LocationScreen from '../screens/LocationScreen'
import ServiceScreen from '../screens/ServiceScreen'
import SpaScreen from '../screens/SpaScreen'

const Tab = createBottomTabNavigator();

let CustomTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'white'
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return (
      <Tab.Navigator
        screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        },
        
      }}
      >
        <Tab.Screen
        name='Chat'
        component={ChatScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/relax.png')}
                resizeMode= 'contain'
                style={{
                  width: 30,
                  height: 30,
                  
                }}
              />
              <Text
              style={{fontSize: 12, color: focused ? '#e32f45' : '#748c94'}}
              >Магазин</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name='Find' component={FindScreen}
          options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/products.png')}
                resizeMode= 'contain'
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#e32f45' : '#748c94'}}
              >
                Услуги
              </Text>
            </View>
          )
        }}
        />
        <Tab.Screen name='Location' component={LocationScreen}
          options= {{
            tabBarIcon: ({focused}) => (
              <Image
                source={require('../assets/lotus.png')}
                resizeMode= 'contain'
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            ),
            tabBarButton: (props) => (
              <CustomTabBarButton {...props}/>
            )
          }}
        />
        <Tab.Screen name='Service' component={ServiceScreen}
          options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/candle.png')}
                resizeMode= 'contain'
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#e32f45' : '#748c94'}}
              >
                Цени
              </Text>
            </View>
          )
        }}
        />
        <Tab.Screen name='Spa' component={SpaScreen}
          options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('../assets/location.png')}
                resizeMode= 'contain'
                style={{
                  width: 30,
                  height: 30,
                }}
              />
              <Text
                style={{fontSize: 12, color: focused ? '#e32f45' : '#748c94'}}
              >
                Контакти
              </Text>
            </View>
          )
        }}
        />
      </Tab.Navigator>
  )
}

export default Tabs

let styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  }
})

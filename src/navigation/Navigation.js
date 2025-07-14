import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/auth/Login';
import HomePage from '../screens/HomePage';
import FlightSearchScreen from '../screens/FlightSearchScreen';

const Navigation = () => {

    const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='FlightSearchScreen' component={FlightSearchScreen} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Login from '../screens/auth/Login';
import HomePage from '../screens/HomePage';
import FlightSearchScreen from '../screens/FlightSearchScreen';
import FlightsCard from '../screens/FlightsCard';
import SignUp from '../screens/auth/SignUp';
import BookFlight from '../screens/BookFlight';

const Navigation = () => {

    const Stack = createNativeStackNavigator()


  return (
    <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} />
        <Stack.Screen name='SignUp' component={SignUp}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='FlightSearchScreen' component={FlightSearchScreen} />
        <Stack.Screen name='Flights' component={FlightsCard}/>
        <Stack.Screen name='BookFlight' component={BookFlight}/>
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navigation from './src/navigation/Navigation'
import ModalHeader from './src/components/ModalHeader'
import FlightToFrom from './src/components/ToFromField'

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    // <ModalHeader />
    // <FlightToFrom/>
    
  )
}

export default App

const styles = StyleSheet.create({})
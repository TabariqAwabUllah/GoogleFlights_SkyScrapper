import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'


const Flights = () => {
    console.log("Flights screen");
    
    const [flightsArray, setFlightsArray] = useState([])

    const navigation = useNavigation()
    const route = useRoute()
    // const {flights} = route.params
    
    // useEffect(()=>{
    //     if(flights){
    //         setFlightsArray(flights)
    //     }
    // },[flights])

  return (
    <View style={styles.container}>
        <Text onPress={()=>navigation.pop()}>Flights</Text>
    </View>
  )
}

export default Flights

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
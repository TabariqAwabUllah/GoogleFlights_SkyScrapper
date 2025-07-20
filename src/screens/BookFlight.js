import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLORS } from '../constants/COLORS'
import { useNavigation } from '@react-navigation/native'

const BookFlight = () => {
    console.log("in book flight");
    
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <Text onPress={()=>navigation.pop()}>BookFlight</Text>
    </View>
  )
}

export default BookFlight

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: hp(5),
    }
})
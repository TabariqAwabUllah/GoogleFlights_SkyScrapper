import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS'


const PrimaryButton = ({onPress, buttonName, buttonStyle, children}) => {
  console.log("Primary Button");
  
  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.getStarted, buttonStyle]} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonName}</Text>
        {children}
      </TouchableOpacity>   
    </View>
  )
}

export default React.memo(PrimaryButton)

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
    getStarted: {
      backgroundColor: COLORS.primary,
      height: hp('6%'),
      width: wp('80%'),
      marginVertical: hp('1.5%'),
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: wp('2%'),
    },
    buttonText:{
      fontWeight: 'bold',
      fontSize: hp('2%'),
      color: COLORS.white,
    },
})
import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS } from '../constants/COLORS';

const ToFromField = ({placeholder = 'From', icon = 'flight-takeoff', onChangeText, value,
    enterKeyHint = 'next', containerStyle, onPress, onPressIn, onPressOut
}) => {
  console.log("To From Field");
  
  return (
    <View style={[styles.container, containerStyle]}>
        <Icon name={icon} size={24} color={COLORS.icon} style={styles.iconStyle}/>
        <TextInput 
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGray}
        onChangeText={onChangeText}
        value={value}
        style={styles.inputStyle}
        enterKeyHint={enterKeyHint}
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        />
      
    </View>
  )
}

export default ToFromField

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.textInput,
        // marginTop: hp('10%'),    
        borderRadius: wp('3%'),
        // padding: wp('2%'),
        // alignItems: 'center',
        marginHorizontal: wp('5%'),
    },
    iconStyle:{
        alignSelf: 'center',
        margin: wp('2%'),
    },
    inputStyle: {
        // flex: 1,
        // fontSize: wp('1%'),
        color: COLORS.black,
        // fontWeight: 'bold',
    },
})
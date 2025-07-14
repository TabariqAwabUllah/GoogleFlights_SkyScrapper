import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp, } from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DateButton = ({date, otherDate, icon='calendar-month', containerStyle}) => {
    console.log("Date Butten");
    
  return (
    <View  style={[styles.container, containerStyle]}>
        <Icon name={icon} size={24} color={COLORS.icon} style={styles.iconStyle}/>

        <Text>{date}</Text>
      
    </View>
  )
}

export default DateButton

const styles = StyleSheet.create({
        container: {
            // flex: 1,
            flexDirection: 'row',
            backgroundColor: COLORS.textInput,
            // marginTop: hp('10%'),    
            borderRadius: wp('3%'),
            // padding: wp('2%'),
            alignItems: 'center',
            marginHorizontal: wp('5%'),
        },
        iconStyle:{
        alignSelf: 'center',
        margin: wp('2%'),
    },
})
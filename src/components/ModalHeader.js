import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS';

const ModalHeader = ({title='Flight', onPress}) => {
  console.log("Modal Header");
  
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.statusBar} />
    
      <TouchableOpacity onPress={onPress} style={styles.iconButton}>
        <EntypoIcon name="cross" size={26} color="#000" />
      </TouchableOpacity>
      

      <View style={{flex: 1, alignItems: 'center'}}>

        <Text style={styles.titleText}>{title}</Text>

      </View>
      
    </SafeAreaView>
  )
}

export default ModalHeader

const styles = StyleSheet.create({

    container: { 
        flexDirection: 'row',
        marginTop: hp('3%'),
        paddingTop: hp('1%'),
        marginTop: hp('5%'),
        // marginHorizontal: wp('2%'),
        // backgroundColor: 'red'
    },
    titleText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: hp('2.2%'),
        color: COLORS.black,
    },
    iconButton:{
        paddingLeft: wp('0.5%')
    },
    // alignItems: ,
})
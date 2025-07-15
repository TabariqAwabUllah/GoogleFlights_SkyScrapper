import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ModalHeader from '../components/ModalHeader';
import { COLORS } from '../constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import RoundTrip from './tripway/RoundTrip';
import OneWay from './tripway/OneWay';
import MultiCity from './tripway/MultiCity';

const FlightSearchScreen = () =>{
  console.log("Flight search Screen");
  

  const [activeTab, setActiveTab] = useState('Round-Trip');

  const navigation = useNavigation()

  const routeWay = ['Round-Trip', 'One-Way', 'Multi-City'];

  const crossIconHandler = () => {
    // Close the modal
    navigation.pop();
  };

  const handleTabPress = (tab) =>{
    setActiveTab(tab);
    // Navigate to the corresponding screen based on the tab
    console.log('Tab pressed:', tab);
    
  }

  const renderScreen=(tab) =>{
    console.log('switch case:', tab);
    
    switch (tab){
      case 'Round-Trip':
        return <RoundTrip/>
      case 'One-Way':
        return <OneWay/>
      case 'Multi-City':
        return <MultiCity/>
      default:
        return <RoundTrip/>
    }
  }
  
  return(
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.statusBar} />
      <ModalHeader onPress={crossIconHandler}/>

      {/* Route Selection */}
      <View style={styles.route}>
        {routeWay.map((tab, index)=>{
          return(
            
              <TouchableOpacity 
              style={[styles.routeButton, tab === activeTab && styles.activeTab]} 
              key={index}
              onPress={()=> handleTabPress(tab)}>
                <Text style={[styles.routeText,  tab === activeTab && styles.activeTabText ]}>{tab}</Text>
                
              </TouchableOpacity>
            
          )

        })}
      
      
      </View>
      {renderScreen(activeTab)}



    </View>
      
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // marginHorizontal: wp('2%'),
    backgroundColor: COLORS.white,
  },
  route:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    // marginVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
    paddingTop: hp('1%'),
  },
  routeButton:{
    // backgroundColor: COLORS.red,
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
  },
  activeTab: {
    // backgroundColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    // elevation: 2
    borderBottomWidth: 2,
  },
  activeTabText: {
    color: COLORS.black,
    fontWeight: 'bold',
  },
  routeText:{
    fontSize: hp('2.2%'),
    color: COLORS.black,
    marginLeft: wp('2%'),
    textAlign: 'center',
    alignSelf: 'center',
  },
})

export default FlightSearchScreen;
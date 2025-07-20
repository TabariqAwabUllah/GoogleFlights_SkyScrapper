import { Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/COLORS'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ToFromField from '../../components/ToFromField'
import DateTimePicker from '@react-native-community/datetimepicker';
import DateButton from '../../components/DateButton'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TravelModal from '../../components/TravelModal'
import PrimaryButton from '../../components/PrimaryButton'
import getAirports, { getFlightDetails } from '../../api/GetAirports'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'

const RoundTrip = () => {
  console.log("RoundTrip");
  

  const [fromFlight, setFromFlight] = useState('');
  const [toFlight, setToFlight] = useState('');
  // State to manage the date and date picker visibility
  const [date, setDate] = useState(new Date().toDateString());
  const [datePickerView, setDatePickerView] = useState(false);
  const [activeDatePicker, setActiveDatePicker] = useState(null);
  const [dateOne, setDateOne] = useState(new Date().toDateString());
  const [dateTwo, setDateTwo] = useState(new Date().toDateString());
  const [travelerModal, setTravelerModal] = useState(false);
  const [airport, setAirport] = useState([])
  const [fromSuggestion, setFromSuggestion] = useState(false)
  const [activeField, setActiveField] = useState(null)

  // const totalTravelers = travelers.adults + travelers.children + travelers.infants + travelers.infantsOnLap;

  const navigation = useNavigation()
  // const totalTravelers = (travelers) =>{
  //   const total = travelers.adults + travelers.children + travelers.infants + travelers.infantsOnLap;
  //   return total; 
  // }
  console.log(fromFlight);
  // console.log("Airports", airport);
  
  // Calling api to search flights
  const searchAirport = async (airport, field) =>{

    // if no data or letters less than 2 api won't call.
    if(!airport || airport.length < 2 ){
      return
    }

    console.log("in seacrch flight 1");
    setActiveField(field)
    try {
      const result = await getAirports(airport)    
      console.log("Search flight 2");
      
      console.log("result", result);
      console.log("Airport result", result.data);

      if(result.status){
        setAirport(result.data)
        setFromSuggestion(true)
      }
      
      
    } catch (error) {
      console.log("error", error);
       
    }
  }

  const airportPick = (airport) =>{
    if(activeField==='from'){
      setFromFlight(airport)
      setFromSuggestion(false)
    }
    else if(activeField === 'to'){
      setToFlight(airport)
      setFromSuggestion(false)
    }
    setFromSuggestion(false)
    setActiveField(null)
  }
  

  const datePickerOne =()=>{
    console.log('Date Picker One');
    setActiveDatePicker('dateOne');
    setDatePickerView(true);
  }

  const datePickerTwo =()=>{
    console.log('Date Picker Two');
    setActiveDatePicker('dateTwo');
    setDatePickerView(true);
  }



  //  Date picker change handler
  //  This function will be called when the user selects a date or dismisses the picker
  const onChangeDate= (event, selectedDate) =>{
    // event and selectedDate are provided by the DateTimePicker by default
    console.log('Event:', event); 
    console.log('Selected Date:', selectedDate.toDateString());
    if(event.type === 'set') {
      // For date one button
      if(activeDatePicker === 'dateOne'){
        setDateOne(selectedDate.toDateString());

      } else if(activeDatePicker === 'dateTwo'){
        setDateTwo(selectedDate.toDateString());
      }

      setDatePickerView(false);
      setActiveDatePicker(null);
    }
    if(event.type === 'dismissed'){
      setDatePickerView(false);
      setActiveDatePicker(null);
      // setDate(date)
    }
    
  }



  
  return (
    <View style={styles.container}>
      <ToFromField containerStyle={styles.fieldStyle} 
      value={fromFlight} 
      onChangeText={(text)=>{
        setFromFlight(text)
        searchAirport(text, 'from')
      }   
      }/>

      <ToFromField containerStyle={styles.fieldStyle} 
      placeholder='To' 
      icon='flight-land' v
      value={toFlight} 
      onChangeText={(text)=>{
        setToFlight(text)
        searchAirport(text, 'to')
      }}/>

      {
        fromSuggestion  && 
        <ScrollView style={styles.suggestionsContainer}>
          {airport.map((item, index) => (
            <TouchableOpacity
              key={item.entityId || index}
              style={styles.suggestionItem}
              onPress={() => {
                airportPick(item.presentation.title)
                console.log("Selected Airport");
                
              }}
            >
              <Text style={styles.suggestionText}>{item.presentation.title}</Text>
              <Text style={styles.suggestionSubText}>{item.presentation.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
      
      {/* DateView */}
      <View style={styles.dateArea}>
        <TouchableOpacity onPress={datePickerOne}>
          <DateButton containerStyle={styles.dateField} date={ dateOne}/>
        </TouchableOpacity>

        <TouchableOpacity onPress={datePickerTwo}>
          <DateButton containerStyle={styles.dateField} date={ dateTwo} />
        </TouchableOpacity>
      </View>
      {datePickerView && 
      <DateTimePicker value={new Date()}
        mode='date'
        display='default'
        onChange={onChangeDate}
      />}

      {/* Traveler booking class Section */}
        <TravelModal />

        {/* <View style={{flex: 1}}> */}
          <PrimaryButton buttonName={'Search Flights'} buttonStyle={styles.searchButton}/>
        {/* </View> */}
        
        
        
         

      

    </View>
  )
}

export default RoundTrip

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: COLORS.red,
    marginTop: hp('2%'),
  },
  fieldStyle:{
    // backgroundColor: COLORS.white,
    marginVertical: hp('1%'),
  },
  dateField:{
    // backgroundColor: COLORS.white,
    marginVertical: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    width: wp('40%')
  },
  dateArea:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp('2%'),
  },
  searchButton: {
    width: wp('90%'),
    marginTop: 'auto'
  },
    suggestionsContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    marginTop: 5,
    maxHeight: hp('30%'),
  },
  suggestionItem: {
    padding: wp('4%'),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  suggestionText: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.black,
  },
  suggestionSubText: {
    fontSize: 14,
    color: COLORS.gray,
    marginTop: 2,
  },
})
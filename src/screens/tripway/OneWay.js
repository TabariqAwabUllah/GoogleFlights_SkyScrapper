import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../constants/COLORS'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import ToFromField from '../../components/ToFromField'
import DateTimePicker from '@react-native-community/datetimepicker';
import DateButton from '../../components/DateButton'
import Icon from 'react-native-vector-icons/MaterialIcons';
import TravelModal from '../../components/TravelModal'
import PrimaryButton from '../../components/PrimaryButton'
import getAirports from '../../api/GetAirports'

const OneWay = () => {
  console.log("OneWay");
  
  const [fromFlight, setFromFlight] = useState('');
  const [toFlight, setToFlight] = useState('');
  
  // State to manage the single date and date picker visibility
  const [departureDate, setDepartureDate] = useState(new Date().toDateString());
  const [datePickerView, setDatePickerView] = useState(false);
  const [travelerModal, setTravelerModal] = useState(false);
  const [airport, setAirport] = useState([])
  const [fromSuggestion, setFromSuggestion] = useState(false)
  const [activeField, setActiveField] = useState(null)

  const datePickerHandler = () => {
    console.log('Date Picker Handler');
    setDatePickerView(true);
  }

  // Date picker change handler
  // This function will be called when the user selects a date or dismisses the picker
  const onChangeDate = (event, selectedDate) => {
    // event and selectedDate are provided by the DateTimePicker by default
    console.log('Event:', event); 
    console.log('Selected Date:', selectedDate.toDateString());
    
    if(event.type === 'set') {
      setDepartureDate(selectedDate.toDateString());
      setDatePickerView(false);
    }
    if(event.type === 'dismissed'){
      setDatePickerView(false);
    }
  }
    // Calling api to search flights
  const searchFlights = async (airport, field) =>{

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

  return (
    <View style={styles.container}>
      <ToFromField 
        containerStyle={styles.fieldStyle} 
        value={fromFlight} 
        onChangeText={(text)=>{
        setFromFlight(text)
        searchFlights(text, 'from')
      }   
      }
      />

      <ToFromField 
        containerStyle={styles.fieldStyle} 
        placeholder='To' 
        icon='flight-land' 
        value={toFlight} 
        onChangeText={(text)=>{
        setToFlight(text)
        searchFlights(text, 'to')
      }}
      />

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
      
      {/* Single Date View */}
      <View style={styles.dateArea}>
        <TouchableOpacity onPress={datePickerHandler}>
          <DateButton 
            containerStyle={styles.dateField} 
            date={departureDate}
          />
        </TouchableOpacity>
      </View>

      {datePickerView && 
        <DateTimePicker 
          value={new Date()}
          mode='date'
          display='default'
          onChange={onChangeDate}
        />
      }

      {/* Traveler booking class Section */}
      <TravelModal />

      <PrimaryButton 
        buttonName={'Search Flights'} 
        buttonStyle={styles.searchButton}
      />
    </View>
  )
}

export default OneWay

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('2%'),
  },
  fieldStyle: {
    marginVertical: hp('1%'),
  },
  dateField: {
    marginVertical: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    width: wp('85%'), // Wider since it's just one date field
  },
  dateArea: {
    marginVertical: hp('2%'),
    alignItems: 'center', // Center the single date button
  },
  searchButton: {
    width: wp('90%'),
    marginTop: 'auto'
  },
})
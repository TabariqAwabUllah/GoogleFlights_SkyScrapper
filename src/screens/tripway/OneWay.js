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
import { getAirports, getFlights } from '../../api/GetAirports'
import { useNavigation } from '@react-navigation/native'


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
  const [toDetails, setToDetails] = useState({
    originSkyId: '',
    originEntityId: '',
    date: '', // YYYY-MM-DD
    flightTo: '',

  })

  const [fromDetails, setFromDetails] = useState({
    originSkyId: '',
    originEntityId: '',
    date: '', // YYYY-MM-DD
    flightFrom: '',

  })
  
  const navigation = useNavigation()


  const datePickerHandler = () => {
    setDatePickerView(true);
    console.log('Date Picker Handler', datePickerView);
    
  }

  // Date picker change handler
  // This function will be called when the user selects a date or dismisses the picker
  const onChangeDate = (event, selectedDate) => {
    // event and selectedDate are provided by the DateTimePicker by default
    console.log('Event:', event); 
    console.log('Selected Date:', selectedDate.toDateString());
    const year = selectedDate.getFullYear()
    const month = String(selectedDate.getMonth() +1 ).padStart(2,'0')
    const date = String(selectedDate.getDate()).padStart(2, '0')

    const formateDate = `${year}-${month}-${date}`
    
    // console.log("FormatedDAte", formateDate);
    

    if(event.type === 'set') {
      setDepartureDate(selectedDate.toDateString());
      setFromDetails(prev=>({
        ...prev, date: formateDate,
      }))
      setDatePickerView(false);
      
      
    }
    if(event.type === 'dismissed'){
      setDatePickerView(false);
      console.log('cancel setdate',datePickerView);
    }

    
    
  }
    // Calling api to search flights
  const searchAirports = async (airport, field) =>{

    // if no data or letters less than 2 api won't call.
    if(!airport || airport.length < 2 ){
      return
    }

    console.log("in seacrch Airport 1");
    setActiveField(field)
    try {
      const result = await getAirports(airport)    
      console.log("Search flight 2");
      
      // console.log("result", result);
      // console.log("Airport result", result.data);

      if(result.status){
        setAirport(result.data)
        setFromSuggestion(true)
      }
      
      
    } catch (error) {
      console.log("error", error);
        
    }
  }

  const airportPick = (airport, activeField) =>{
  if(activeField==='from'){

    setFromFlight(airport.presentation.title)
    setFromDetails((prev)=>({
      ...prev, 
      originSkyId: airport.relevantFlightParams.skyId,
      originEntityId: airport.relevantFlightParams.entityId,
      flightFrom: airport.presentation.title,

    }))
    setFromSuggestion(false)
  }
  else if(activeField === 'to'){

    setToFlight(airport.presentation.title)
    setToDetails((prev)=>({
      ...prev, 
      originSkyId: airport.relevantFlightParams.skyId,
      originEntityId: airport.relevantFlightParams.entityId,
      flightTo: airport.presentation.title,

    }))
    
    setFromSuggestion(false)
  }
  setFromSuggestion(false)
  setActiveField(null)
}

  const flightSearch =async (fromDetails, toDetails)=>{
    console.log("flight search func");
    
    const flightSearch = await getFlights(fromDetails, toDetails)
    console.log("after");
    
    // if(flightSearch.status){
      // console.log("in if ");
      
      // navigation.navigate('Flights', {flights: flightSearch.data})
    // }
    // else {  // laterremove
      console.log("else");
      
      navigation.navigate('Flights')
    // }
    console.log("end");
    

    
  }

  return (
    <View style={styles.container}>
      <ToFromField 
        containerStyle={styles.fieldStyle} 
        value={fromFlight} 
        onChangeText={(text)=>{
        setFromFlight(text)
        searchAirports(text, 'from')
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
        searchAirports(text, 'to')
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
                airportPick(item, activeField)
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
        onPress={()=>flightSearch(fromDetails, toDetails)}
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
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

const MultiCity = () => {
  console.log("MultiCity");
  
  // State to manage multiple flight segments
  const [flights, setFlights] = useState([
    {
      id: 1,
      from: '',
      to: '',
      date: new Date().toDateString()
    },
    {
      id: 2,
      from: '',
      to: '',
      date: new Date().toDateString()
    }
  ]);

  const [datePickerView, setDatePickerView] = useState(false);
  const [activeDatePicker, setActiveDatePicker] = useState(null);
  const [travelerModal, setTravelerModal] = useState(false);

  // Add a new flight segment
  const addFlight = () => {
    const newFlight = {
      id: flights.length + 1,
      from: '',
      to: '',
      date: new Date().toDateString()
    };
    setFlights([...flights, newFlight]);
  };

  // Remove a flight segment (minimum 2 flights required)
  const removeFlight = (flightId) => {
    if (flights.length > 2) {
      setFlights(flights.filter(flight => flight.id !== flightId));
    }
  };

  // Update flight data
  const updateFlight = (flightId, field, value) => {
    setFlights(flights.map(flight => 
      flight.id === flightId ? { ...flight, [field]: value } : flight
    ));
  };

  // Handle date picker
  const datePickerHandler = (flightId) => {
    console.log('Date Picker Handler for flight:', flightId);
    setActiveDatePicker(flightId);
    setDatePickerView(true);
  };

  // Date picker change handler
  const onChangeDate = (event, selectedDate) => {
    console.log('Event:', event);
    console.log('Selected Date:', selectedDate.toDateString());
    
    if(event.type === 'set') {
      updateFlight(activeDatePicker, 'date', selectedDate.toDateString());
      setDatePickerView(false);
      setActiveDatePicker(null);
    }
    if(event.type === 'dismissed'){
      setDatePickerView(false);
      setActiveDatePicker(null);
    }
  };

  return (
    <View style={styles.container}>
      {/* Render all flight segments */}
      {flights.map((flight, index) => (
        <View key={flight.id} style={styles.flightSegment}>
          <View style={styles.flightHeader}>
            <Text style={styles.flightTitle}>Flight {index + 1}</Text>
            {flights.length > 2 && (
              <TouchableOpacity 
                onPress={() => removeFlight(flight.id)}
                style={styles.removeButton}
              >
                <Icon name="close" size={20} color={COLORS.red} />
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.flightInputs}>
            <ToFromField 
              containerStyle={styles.fieldStyle} 
              placeholder="From"
              icon="flight-takeoff"
              value={flight.from} 
              onChangeText={(text) => updateFlight(flight.id, 'from', text)}
            />

            <ToFromField 
              containerStyle={styles.fieldStyle} 
              placeholder="To" 
              icon="flight-land" 
              value={flight.to} 
              onChangeText={(text) => updateFlight(flight.id, 'to', text)}
            />
            
            <TouchableOpacity onPress={() => datePickerHandler(flight.id)}>
              <DateButton 
                containerStyle={styles.dateField} 
                date={flight.date}
              />
            </TouchableOpacity>
          </View>
        </View>
      ))}

      {/* Add Flight Button */}
      <TouchableOpacity 
        style={styles.addFlightButton}
        onPress={addFlight}
      >
        <Icon name="add" size={20} color={COLORS.primary} />
        <Text style={styles.addFlightText}>Add flight</Text>
      </TouchableOpacity>

      {/* Date Picker */}
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
        buttonName={'Search flights'} 
        buttonStyle={styles.searchButton}
      />
    </View>
  )
}

export default MultiCity

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: hp('2%'),
  },
  flightSegment: {
    marginBottom: hp('2%'),
  },
  flightHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: wp('5%'),
    marginBottom: hp('1%'),
  },
  flightTitle: {
    fontSize: hp('2%'),
    fontWeight: '600',
    color: COLORS.darkGray,
  },
  removeButton: {
    padding: wp('1%'),
  },
  flightInputs: {
    // Container for flight inputs
  },
  fieldStyle: {
    marginVertical: hp('0.5%'),
  },
  dateField: {
    marginVertical: hp('0.5%'),
    paddingHorizontal: wp('2%'),
    width: wp('85%'),
    alignSelf: 'center',
  },
  addFlightButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: wp('5%'),
    marginVertical: hp('2%'),
    paddingVertical: hp('1.5%'),
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: wp('2%'),
    borderStyle: 'dashed',
  },
  addFlightText: {
    marginLeft: wp('2%'),
    fontSize: hp('1.8%'),
    color: COLORS.primary,
    fontWeight: '500',
  },
  searchButton: {
    width: wp('90%'),
    marginTop: 'auto'
  },
})
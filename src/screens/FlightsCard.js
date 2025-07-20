import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ModalHeader from '../components/ModalHeader';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLORS } from '../constants/COLORS';
import FlightCardComponent from '../components/FlightCardCompnent';
import { getFlightDetails } from '../api/GetAirports';

const FlightsCard = () => {
    console.log("Flights card screen");
    
    const [flightsArray, setFlightsArray] = useState([])
    const [sortBy, setSortBy] = useState('best') // best, stops, time
    const [filterStops, setFilterStops] = useState('all') // all, direct, one, twoOrMore

    const navigation = useNavigation()
    const route = useRoute()
    const { flights, sessionId } = route.params
    
    useEffect(() => {
        if (flights) {
            setFlightsArray(flights)
        }
    }, [flights])

    // console.log("flight Array", flightsArray);
    
    const formatTime = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleTimeString('en-US', { 
            hour: '2-digit', 
            minute: '2-digit',
            hour12: true 
        })
    }

    const formatDuration = (minutes) => {
        const hours = Math.floor(minutes / 60)
        const mins = minutes % 60
        return `${hours}h${mins > 0 ? ` ${mins}m` : ''}`
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
        })
    }

    const getStopText = (stopCount) => {
        if (stopCount === 0) return 'Direct'
        if (stopCount === 1) return '1 Stop'
        return `${stopCount} Stops`
    }

    const getCarrierName = (leg) => {
        if (leg.carriers && leg.carriers.marketing && leg.carriers.marketing.length > 0) {
            return leg.carriers.marketing[0].name
        }
        return 'Unknown Airline'
    }

    const sortFlights = (flights, sortType) => {
        switch (sortType) {
            case 'best':
                return [...flights].sort((a, b) => b.score - a.score)
            case 'stops':
                return [...flights].sort((a, b) => {
                    const aStops = a.legs.reduce((sum, leg) => sum + leg.stopCount, 0)
                    const bStops = b.legs.reduce((sum, leg) => sum + leg.stopCount, 0)
                    return aStops - bStops
                })
            case 'time':
                return [...flights].sort((a, b) => {
                    const aTotalDuration = a.legs.reduce((sum, leg) => sum + leg.durationInMinutes, 0)
                    const bTotalDuration = b.legs.reduce((sum, leg) => sum + leg.durationInMinutes, 0)
                    return aTotalDuration - bTotalDuration
                })
            default:
                return flights
        }
    }

    const filterFlights = (flights, filterType) => {
        if (filterType === 'all') return flights
        
        return flights.filter(flight => {
            const maxStops = Math.max(...flight.legs.map(leg => leg.stopCount))
            switch (filterType) {
                case 'direct':
                    return maxStops === 0
                case 'one':
                    return maxStops === 1
                case 'twoOrMore':
                    return maxStops >= 2
                default:
                    return true
            }
        })
    }

    const dateFormat = (date) =>{

    }
    
    // for flight booking
    const bookFlight = async (sessionId, flight) =>{
        console.log("Search Flight in FlightCard");
        // Making leg parameter for fetch getFlighDetails
        const legs = flight.legs.map((data)=>(
            
            {
                "destination": data.destination.displayCode,
                "origin": data.origin.displayCode,
                "date": data.departure.split('T')[0],
            }
            
        ))
        
        const flightData = await getFlightDetails(sessionId, flight.id , legs)
        // console.log("flightData", flightData.data);
        
        if(flightData.status){
            navigation.navigate('BookFlight', { flights: flightData.data})
        }

    }
    

    const processedFlights = sortFlights(filterFlights(flightsArray, filterStops), sortBy)

    const FilterButton = ({ title, active, onPress }) => (
        <TouchableOpacity
            style={[styles.filterButton, active && styles.filterButtonActive]}
            onPress={onPress}
        >
            <Text style={[styles.filterButtonText, active && styles.filterButtonTextActive]}>
                {title}
            </Text>
        </TouchableOpacity>
    )



    return (
        <View style={styles.container}>
            <ModalHeader iconName='arrow-back' onPress={()=>{navigation.pop()}}/>

            {/* filters and sorting*/}
            <View style={styles.filtersContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
                    <FilterButton 
                        title="Best" 
                        active={sortBy === 'best'} 
                        onPress={() => setSortBy('best')} 
                    />
                    <FilterButton 
                        title="Stops" 
                        active={sortBy === 'stops'} 
                        onPress={() => setSortBy('stops')} 
                    />
                    <FilterButton 
                        title="Time" 
                        active={sortBy === 'time'} 
                        onPress={() => setSortBy('time')} 
                    />
                    {/* <View style={{backgroundColor: COLORS.blue, width: 1, paddingHorizontal: 1, marginHorizontal:2,}}/> */}
                    <FilterButton 
                        title="All" 
                        active={filterStops === 'all'} 
                        onPress={() => setFilterStops('all')} 
                    />
                    <FilterButton 
                        title="Direct" 
                        active={filterStops === 'direct'} 
                        onPress={() => setFilterStops('direct')} 
                    />
                    <FilterButton 
                        title="1 Stop" 
                        active={filterStops === 'one'} 
                        onPress={() => setFilterStops('one')} 
                    />
                </ScrollView>
            </View>

            <ScrollView style={styles.flightsList}>
                {processedFlights.map((flight, index) => (
                    <TouchableOpacity key={index} onPress={()=>bookFlight(sessionId, flight )}>
                        {/* <FlightCard  flight={flight} /> */}
                        <FlightCardComponent flight={flight} 
                        formatTime={formatTime} 
                        formatDuration={formatDuration}
                        getStopText={getStopText}
                        getCarrierName={getCarrierName}/>


                    </TouchableOpacity>
                ))}
                
                {processedFlights.length === 0 && (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyStateText}>No flights found</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default FlightsCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    headerTitle: {
        fontSize: wp('4.5%'),
        fontWeight: '600',
        color: '#333',
    },
    placeholder: {
        width: wp('12.5%'),
    },
    filtersContainer: {
        backgroundColor: '#fff',
        paddingVertical: hp('1.8%'),
        borderBottomWidth: 1,
        borderBottomColor: COLORS.lightGray,
    },
    filtersScroll: {
        paddingHorizontal: wp('5%'),
    },
    filterButton: {
        paddingHorizontal: wp('4%'),
        paddingVertical: hp('1%'),
        borderRadius: wp('5%'),
        backgroundColor: '#f0f0f0',
        marginRight: wp('2.5%'),
    },
    filterButtonActive: {
        backgroundColor: COLORS.primary,
    },
    filterButtonText: {
        fontSize: wp('3.5%'),
        color: '#666',
        fontWeight: '500',
    },
    filterButtonTextActive: {
        color: '#fff',
    },
    flightsList: {
        flex: 1,
        padding: wp('5%'),
    },
   
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: hp('12%'),
    },
    emptyStateText: {
        fontSize: wp('4%'),
        color: '#666',
    },
});
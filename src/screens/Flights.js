import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import ModalHeader from '../components/ModalHeader';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { COLORS } from '../constants/COLORS';

const Flights = () => {
    console.log("Flights screen");
    
    const [flightsArray, setFlightsArray] = useState([])
    const [sortBy, setSortBy] = useState('best') // best, stops, time
    const [filterStops, setFilterStops] = useState('all') // all, direct, one, twoOrMore

    const navigation = useNavigation()
    const route = useRoute()
    // const { flights } = route.params
    
    // useEffect(() => {
    //     if (flights) {
    //         setFlightsArray(flights.itineraries || [])
    //     }
    // }, [flights])

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

    const FlightCard = ({ flight }) => (
        <View style={styles.flightCard}>
            {flight.legs.map((leg, index) => (
                <View key={leg.id} style={styles.legContainer}>
                    <View style={styles.flightHeader}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.time}>{formatTime(leg.departure)}</Text>
                            <Text style={styles.airport}>{leg.origin.displayCode}</Text>
                        </View>
                        
                        <View style={styles.flightMiddle}>
                            <Text style={styles.duration}>{formatDuration(leg.durationInMinutes)}</Text>
                            <View style={styles.flightLine}>
                                <View style={styles.dot} />
                                <View style={styles.line} />
                                <View style={styles.dot} />
                            </View>
                            <Text style={styles.stops}>{getStopText(leg.stopCount)}</Text>
                        </View>
                        
                        <View style={styles.timeContainer}>
                            <Text style={styles.time}>{formatTime(leg.arrival)}</Text>
                            <Text style={styles.airport}>{leg.destination.displayCode}</Text>
                        </View>
                    </View>
                    
                    <View style={styles.flightDetails}>
                        <Text style={styles.airline}>{getCarrierName(leg)}</Text>
                        {leg.timeDeltaInDays > 0 && (
                            <Text style={styles.nextDay}>+{leg.timeDeltaInDays} day</Text>
                        )}
                    </View>
                    
                    {index < flight.legs.length - 1 && (
                        <View style={styles.legSeparator}>
                            <Text style={styles.legSeparatorText}>Return Flight</Text>
                        </View>
                    )}
                </View>
            ))}
            
            <View style={styles.flightFooter}>
                <View style={styles.tagsContainer}>
                    {flight.tags && flight.tags.map((tag, index) => (
                        <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag.replace('_', ' ')}</Text>
                        </View>
                    ))}
                </View>
                <Text style={styles.price}>{flight.price.formatted}</Text>
            </View>
        </View>
    )

    return (
        <View style={styles.container}>
            <ModalHeader iconName='arrow-back' onPress={()=>{navigation.pop()}}/>

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
                {/* {processedFlights.map((flight, index) => (
                    <FlightCard key={flight.id || index} flight={flight} />
                ))} */}
                
                {processedFlights.length === 0 && (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyStateText}>No flights found</Text>
                    </View>
                )}
            </ScrollView>
        </View>
    )
}

export default Flights

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
    flightCard: {
        backgroundColor: '#fff',
        borderRadius: wp('3%'),
        padding: wp('4%'),
        marginBottom: hp('2%'),
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: hp('0.25%') },
        shadowOpacity: 0.1,
        shadowRadius: wp('1%'),
    },
    legContainer: {
        marginBottom: hp('2%'),
    },
    flightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: hp('1%'),
    },
    timeContainer: {
        alignItems: 'center',
    },
    time: {
        fontSize: wp('4.5%'),
        fontWeight: '600',
        color: '#333',
    },
    airport: {
        fontSize: wp('3.5%'),
        color: '#666',
        marginTop: hp('0.5%'),
    },
    flightMiddle: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: wp('5%'),
    },
    duration: {
        fontSize: wp('3%'),
        color: '#666',
        marginBottom: hp('1%'),
    },
    flightLine: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: hp('1%'),
    },
    dot: {
        width: wp('1.5%'),
        height: wp('1.5%'),
        borderRadius: wp('0.75%'),
        backgroundColor: '#007AFF',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#007AFF',
        marginHorizontal: wp('1%'),
    },
    stops: {
        fontSize: wp('3%'),
        color: '#666',
    },
    flightDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    airline: {
        fontSize: wp('3.5%'),
        color: '#666',
    },
    nextDay: {
        fontSize: wp('3%'),
        color: '#FF6B6B',
        fontWeight: '500',
    },
    legSeparator: {
        marginVertical: hp('2%'),
        paddingVertical: hp('1%'),
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        alignItems: 'center',
    },
    legSeparatorText: {
        fontSize: wp('3.5%'),
        color: '#666',
        fontWeight: '500',
    },
    flightFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: hp('2%'),
        paddingTop: hp('2%'),
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    tagsContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    tag: {
        backgroundColor: '#E8F5E8',
        paddingHorizontal: wp('2%'),
        paddingVertical: hp('0.5%'),
        borderRadius: wp('1%'),
        marginRight: wp('2%'),
    },
    tagText: {
        fontSize: wp('3%'),
        color: '#4CAF50',
        fontWeight: '500',
    },
    price: {
        fontSize: wp('5%'),
        fontWeight: '700',
        color: '#333',
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
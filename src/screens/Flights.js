import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'

const Flights = () => {
    console.log("Flights screen");
    
    const [flightsArray, setFlightsArray] = useState([])
    const [sortBy, setSortBy] = useState('best') // best, stops, time
    const [filterStops, setFilterStops] = useState('all') // all, direct, one, twoOrMore

    const navigation = useNavigation()
    const route = useRoute()
    const { flights } = route.params
    
    useEffect(() => {
        if (flights) {
            setFlightsArray(flights.itineraries || [])
        }
    }, [flights])

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
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.pop()}>
                    <Text style={styles.backButton}>← Back</Text>
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Flights</Text>
                <View style={styles.placeholder} />
            </View>

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
                {processedFlights.map((flight, index) => (
                    <FlightCard key={flight.id || index} flight={flight} />
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

export default Flights

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: '#fff',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    backButton: {
        fontSize: 16,
        color: '#007AFF',
        fontWeight: '600',
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    placeholder: {
        width: 50,
    },
    filtersContainer: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },
    filtersScroll: {
        paddingHorizontal: 20,
    },
    filterButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginRight: 10,
    },
    filterButtonActive: {
        backgroundColor: '#007AFF',
    },
    filterButtonText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    filterButtonTextActive: {
        color: '#fff',
    },
    flightsList: {
        flex: 1,
        padding: 20,
    },
    flightCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    legContainer: {
        marginBottom: 16,
    },
    flightHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    timeContainer: {
        alignItems: 'center',
    },
    time: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    airport: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
    },
    flightMiddle: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 20,
    },
    duration: {
        fontSize: 12,
        color: '#666',
        marginBottom: 8,
    },
    flightLine: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 8,
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#007AFF',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#007AFF',
        marginHorizontal: 4,
    },
    stops: {
        fontSize: 12,
        color: '#666',
    },
    flightDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    airline: {
        fontSize: 14,
        color: '#666',
    },
    nextDay: {
        fontSize: 12,
        color: '#FF6B6B',
        fontWeight: '500',
    },
    legSeparator: {
        marginVertical: 16,
        paddingVertical: 8,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
        alignItems: 'center',
    },
    legSeparatorText: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    flightFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0',
    },
    tagsContainer: {
        flexDirection: 'row',
        flex: 1,
    },
    tag: {
        backgroundColor: '#E8F5E8',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginRight: 8,
    },
    tagText: {
        fontSize: 12,
        color: '#4CAF50',
        fontWeight: '500',
    },
    price: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
    },
    emptyStateText: {
        fontSize: 16,
        color: '#666',
    },
})
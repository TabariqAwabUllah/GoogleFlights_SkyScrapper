import { StyleSheet, Text, View } from 'react-native'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import React from 'react'

    const FlightCardComponent = ({ flight, formatTime, formatDuration,getStopText, getCarrierName }) => (
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

export default FlightCardComponent

const styles = StyleSheet.create({
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
})
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS';
import { useNavigation, useRoute } from '@react-navigation/native';
import ModalHeader from '../components/ModalHeader';

const BookFlight = () => {
  console.log("in book flight");
  
  const navigation = useNavigation();
  const routes = useRoute();
  const { flights } = routes.params;
  console.log("flights in booking", flights);
  
  // Use the actual API data structure
  const itineraryData = flights?.itinerary || null;
    console.log("itineraryData: ",itineraryData);
    
  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatDuration = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('★');
    }
    if (hasHalfStar) {
      stars.push('☆');
    }
    return stars.join('');
  };

  // Check if we have valid data
  if (!itineraryData || !itineraryData.pricingOptions || itineraryData.pricingOptions.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.emptyContainer}>
          <TouchableOpacity onPress={() => navigation.pop()} style={styles.backButton}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.emptyText}>No flight data available</Text>
        </View>
      </SafeAreaView>
    );
  }

  const mainOption = itineraryData.pricingOptions[0];
  const mainAgent = mainOption.agents[0];
  const segment = mainAgent.segments[0];

  return (
    <SafeAreaView style={styles.container}>
      <ModalHeader title='Book Flight' onPress={()=>navigation.pop()}/>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Main Flight Card */}
        {/* {itineraryData.map((data, index)=>(
            <View style={styles.mainCard}>
                <ImageBackground
                    source={{ uri: data.destinationImage }}
                    style={styles.backgroundImage}
                    imageStyle={styles.backgroundImageStyle}
                >
                    <View style={styles.overlay}>
                    <View style={styles.headerInfo}>
                        <Text style={styles.routeText}>
                        {data.pricingOptions.agent.segment.origin.city} → {data.pricingOptions.agent.segment.destination.city}
                        </Text>
                        <Text style={styles.airportCodes}>
                        {data.pricingOptions.agent.segment.origin.displayCode} - {data.pricingOptions.agent.segment.destination.displayCode}
                        </Text>
                    </View>
                    
                    <View style={styles.flightDetails}>
                        <View style={styles.timeRow}>
                        <View style={styles.timeInfo}>
                            <Text style={styles.timeText}>{formatTime(data.pricingOptions.agent.segment.departure)}</Text>
                            <Text style={styles.airportText}>{data.pricingOptions.agent.segment.origin.displayCode}</Text>
                        </View>
                        
                        <View style={styles.flightPath}>
                            <View style={styles.dot} />
                            <View style={styles.line} />
                            <Text style={styles.durationText}>{formatDuration(data.pricingOptions.agent.segment.duration)}</Text>
                            <View style={styles.line} />
                            <View style={styles.dot} />
                        </View>
                        
                        <View style={styles.timeInfo}>
                            <Text style={styles.timeText}>{formatTime(data.pricingOptions.agent.segment.arrival)}</Text>
                            <Text style={styles.airportText}>{data.pricingOptions.agent.segment.destination.displayCode}</Text>
                        </View>
                        </View>
                        
                        <View style={styles.flightInfo}>
                        <Text style={styles.flightNumber}>Flight {data.pricingOptions.agent.segment.flightNumber}</Text>
                        <Text style={styles.airline}>{data.pricingOptions.agent.segment.marketingCarrier.name}</Text>
                        </View>
                        
                        {!data.isTransferRequired && (
                        <View style={styles.directFlightBadge}>
                            <Text style={styles.directFlightText}>Direct Flight</Text>
                        </View>
                        )}
                    </View>
                    </View>
                </ImageBackground>
            </View>
        ))} */}
        <View style={styles.mainCard}>
          <ImageBackground
            source={{ uri: itineraryData.destinationImage }}
            style={styles.backgroundImage}
            imageStyle={styles.backgroundImageStyle}
          >
            <View style={styles.overlay}>
              <View style={styles.headerInfo}>
                <Text style={styles.routeText}>
                  {segment.origin.city} → {segment.destination.city}
                </Text>
                <Text style={styles.airportCodes}>
                  {segment.origin.displayCode} - {segment.destination.displayCode}
                </Text>
              </View>
              
              <View style={styles.flightDetails}>
                <View style={styles.timeRow}>
                  <View style={styles.timeInfo}>
                    <Text style={styles.timeText}>{formatTime(segment.departure)}</Text>
                    <Text style={styles.airportText}>{segment.origin.displayCode}</Text>
                  </View>
                  
                  <View style={styles.flightPath}>
                    <View style={styles.dot} />
                    <View style={styles.line} />
                    <Text style={styles.durationText}>{formatDuration(segment.duration)}</Text>
                    <View style={styles.line} />
                    <View style={styles.dot} />
                  </View>
                  
                  <View style={styles.timeInfo}>
                    <Text style={styles.timeText}>{formatTime(segment.arrival)}</Text>
                    <Text style={styles.airportText}>{segment.destination.displayCode}</Text>
                  </View>
                </View>
                
                <View style={styles.flightInfo}>
                  <Text style={styles.flightNumber}>Flight {segment.flightNumber}</Text>
                  <Text style={styles.airline}>{segment.marketingCarrier.name}</Text>
                </View>
                
                {!itineraryData.isTransferRequired && (
                  <View style={styles.directFlightBadge}>
                    <Text style={styles.directFlightText}>Direct Flight</Text>
                  </View>
                )}
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* Best Price Section */}
        <View style={styles.bestPriceSection}>
          <Text style={styles.bestPriceTitle}>Best Price</Text>
          <View style={styles.priceCard}>
            <View style={styles.priceHeader}>
              <Text style={styles.agentName}>{mainAgent.name}</Text>
              <Text style={styles.mainPrice}>${mainOption.totalPrice}</Text>
            </View>
            
            {mainAgent.rating && (
              <View style={styles.ratingRow}>
                <Text style={styles.stars}>
                  {renderStars(mainAgent.rating.value)}
                </Text>
                <Text style={styles.ratingText}>
                  {mainAgent.rating.value} ({mainAgent.rating.count} reviews)
                </Text>
              </View>
            )}
            
            {/* linking */}
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Other Options */}
        <View style={styles.otherOptionsSection}>
          <Text style={styles.sectionTitle}>Other Options ({itineraryData.pricingOptions.length - 1} more)</Text>
          {itineraryData.pricingOptions.slice(1).map((option, index) => (
            <View key={index} style={styles.optionCard}>
              <View style={styles.optionHeader}>
                <Text style={styles.optionAgentName}>
                  {option.agents[0].name}
                </Text>
                <Text style={styles.optionPrice}>${option.totalPrice}</Text>
                {option.agents[0].rating && (
                  <Text style={styles.optionRating}>
                    ⭐ {option.agents[0].rating.value}
                  </Text>
                )}
              </View>
              {/* linking */}
              <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectButtonText}>Select</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>

        {/* Flight Status */}
        {flights.pollingCompleted && (
          <View style={styles.statusSection}>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>✓ Live Prices Updated</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingTop: hp(2),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: wp(2),
  },
  backButtonText: {
    fontSize: wp(4),
    color: COLORS.primary,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#333',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(8),
  },
  emptyText: {
    fontSize: wp(4),
    color: '#666',
    textAlign: 'center',
    marginTop: hp(2),
  },
  mainCard: {
    marginHorizontal: wp(4),
    marginTop: hp(2),
    borderRadius: wp(5),
    overflow: 'hidden',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  backgroundImage: {
    height: hp(35),
    justifyContent: 'flex-end',
  },
  backgroundImageStyle: {
    borderRadius: wp(5),
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: wp(5),
    borderRadius: wp(5),
  },
  headerInfo: {
    marginBottom: hp(2.5),
  },
  routeText: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: hp(0.5),
  },
  airportCodes: {
    fontSize: wp(4),
    color: '#e0e0e0',
  },
  flightDetails: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: wp(4),
    padding: wp(4),
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(2),
  },
  timeInfo: {
    alignItems: 'center',
  },
  timeText: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(0.5),
  },
  airportText: {
    fontSize: wp(3.5),
    color: '#666',
  },
  flightPath: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginHorizontal: wp(5),
  },
  dot: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    backgroundColor: COLORS.primary,
    position: 'absolute',
  },
  line: {
    height: hp(0.3),
    backgroundColor: COLORS.primary,
    flex: 1,
    marginHorizontal: wp(2),
  },
  durationText: {
    fontSize: wp(3),
    color: '#666',
    backgroundColor: '#f8f9fa',
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.3),
    borderRadius: wp(2),
    position: 'absolute',
    top: -hp(2.5),
  },
  flightInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  flightNumber: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: '#333',
  },
  airline: {
    fontSize: wp(3.5),
    color: '#666',
  },
  directFlightBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#e8f5e8',
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    borderRadius: wp(4),
  },
  directFlightText: {
    fontSize: wp(3),
    color: '#2e7d2e',
    fontWeight: '600',
  },
  bestPriceSection: {
    marginHorizontal: wp(4),
    marginTop: hp(1),
  },
  bestPriceTitle: {
    fontSize: wp(5),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(1.5),
  },
  priceCard: {
    backgroundColor: '#ffffff',
    borderRadius: wp(4),
    padding: wp(4),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  priceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.5),
  },
  agentName: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#333',
  },
  mainPrice: {
    fontSize: wp(6),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(2),
  },
  stars: {
    fontSize: wp(4),
    color: '#ffa500',
    marginRight: wp(2),
  },
  ratingText: {
    fontSize: wp(3.5),
    color: '#666',
  },
  bookButton: {
    backgroundColor: COLORS.primary,
    borderRadius: wp(3),
    paddingVertical: hp(1.8),
    alignItems: 'center',
  },
  bookButtonText: {
    fontSize: wp(4),
    fontWeight: '600',
    color: '#ffffff',
  },
  otherOptionsSection: {
    marginHorizontal: wp(4),
    marginTop: hp(1),
  },
  sectionTitle: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: hp(1.5),
  },
  optionCard: {
    backgroundColor: '#ffffff',
    borderRadius: wp(3),
    padding: wp(4),
    marginBottom: hp(1.5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionHeader: {
    flex: 1,
  },
  optionAgentName: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: '#333',
    marginBottom: hp(0.5),
  },
  optionPrice: {
    fontSize: wp(4),
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  optionRating: {
    fontSize: wp(3),
    color: '#666',
    marginTop: hp(0.3),
  },
  selectButton: {
    backgroundColor: '#f8f9fa',
    borderColor: COLORS.primary,
    borderWidth: 1,
    borderRadius: wp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  selectButtonText: {
    fontSize: wp(3.5),
    fontWeight: '600',
    color: COLORS.primary,
  },
  statusSection: {
    alignItems: 'center',
    marginVertical: hp(2.5),
  },
  statusBadge: {
    backgroundColor: '#e8f5e8',
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
    borderRadius: wp(5),
  },
  statusText: {
    fontSize: wp(3.5),
    color: '#2e7d2e',
    fontWeight: '600',
  },
});

export default BookFlight;
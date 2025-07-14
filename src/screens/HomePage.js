import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS';

const HomePage = () => {
    const navigation = useNavigation()
    const handleFlightSearch = () => {
        // Navigate to FlightSearchModal
        navigation.navigate('FlightSearchScreen');
        // This function should be implemented to handle navigation
    };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <View style={styles.iconContainer}>
              <Text style={styles.airplaneIcon}>✈️</Text>
            </View>
            <View>
              <Text style={styles.headerTitle}>Explore flight</Text>
              <Text style={styles.headerSubtitle}>Welcome to flight booking</Text>
            </View>
          </View>
          <View style={styles.profileIcon}>
            <Text style={styles.profileText}>A</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TouchableOpacity
              style={styles.searchInput}
            //   placeholder="Find a flight"
            //   placeholderTextColor="#999"
              onPress={handleFlightSearch}
            >
                <Text style={{color: COLORS.lightGray}}>Find a flight</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Best Cities Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>The best cities for you</Text>
          
          <View style={styles.citiesContainer}>
            <TouchableOpacity style={styles.cityCard}>
              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                }}
                style={styles.cityImage}
                imageStyle={styles.cityImageStyle}
              >
                <View style={styles.cityOverlay}>
                  <Text style={styles.cityName}>HongKong</Text>
                  <Text style={styles.cityPrice}>from $33.00 to $38.00</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>

            <TouchableOpacity style={styles.cityCard}>
              <ImageBackground
                source={{
                  uri: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
                }}
                style={styles.cityImage}
                imageStyle={styles.cityImageStyle}
              >
                <View style={styles.cityOverlay}>
                  <Text style={styles.cityName}>San Antonio</Text>
                  <Text style={styles.cityPrice}>from $45.00 to</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        </View>

        {/* Explore Destinations Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Explore Destinations</Text>
          
          <TouchableOpacity style={styles.destinationCard}>
            <ImageBackground
              source={{
                uri: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80'
              }}
              style={styles.destinationImage}
              imageStyle={styles.destinationImageStyle}
            >
              <View style={styles.destinationOverlay} />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIconActive}>🏠</Text>
          <Text style={styles.navLabelActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>🧭</Text>
          <Text style={styles.navLabel}>Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navLabel}>Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    paddingVertical: hp('2%'),
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: wp('10%'),
    height: wp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#6C5CE7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
  },
  airplaneIcon: {
    fontSize: wp('5%'),
    color: '#fff',
  },
  headerTitle: {
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#000',
  },
  headerSubtitle: {
    fontSize: wp('3.5%'),
    color: '#666',
    marginTop: hp('0.3%'),
  },
  profileIcon: {
    width: wp('9%'),
    height: wp('9%'),
    borderRadius: wp('4.5%'),
    backgroundColor: '#00CEC9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    flex: 1,
    paddingHorizontal: wp('5%'),
  },
  searchContainer: {
    marginTop: hp('2.5%'),
    marginBottom: hp('3.5%'),
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    borderRadius: wp('3%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1.5%'),
  },
  searchIcon: {
    fontSize: wp('4%'),
    marginRight: wp('3%'),
  },
  searchInput: {
    flex: 1,
    fontSize: wp('4%'),
    color: '#000',
  },
  section: {
    marginBottom: hp('3.5%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#000',
    marginBottom: hp('2%'),
  },
  citiesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cityCard: {
    width: wp('42.5%'),
    height: hp('22%'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  cityImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  cityImageStyle: {
    borderRadius: wp('3%'),
  },
  cityOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: wp('4%'),
  },
  cityName: {
    fontSize: wp('4%'),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp('0.5%'),
  },
  cityPrice: {
    fontSize: wp('3%'),
    color: '#fff',
    opacity: 0.9,
  },
  destinationCard: {
    width: '100%',
    height: hp('25%'),
    borderRadius: wp('3%'),
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  destinationImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  destinationImageStyle: {
    borderRadius: wp('3%'),
  },
  destinationOverlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    height: '100%',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: hp('1.5%'),
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  navItem: {
    alignItems: 'center',
    flex: 1,
  },
  navIconActive: {
    fontSize: wp('5%'),
    marginBottom: hp('0.5%'),
  },
  navIcon: {
    fontSize: wp('5%'),
    marginBottom: hp('0.5%'),
    opacity: 0.5,
  },
  navLabelActive: {
    fontSize: wp('3%'),
    fontWeight: '600',
    color: '#6C5CE7',
  },
  navLabel: {
    fontSize: wp('3%'),
    color: '#666',
  },
});

export default HomePage;
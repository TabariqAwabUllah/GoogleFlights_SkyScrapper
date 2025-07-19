import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../constants/COLORS';
import PrimaryButton from '../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const WelcomeScreen = () => {

  const navigation = useNavigation()

  const handleSignUp = () => {
    // Navigate to sign-up screen
    navigation.navigate('SignUp')
    console.log('SignUp Pressed');
  };

  const handleLogin = () => {
    // Navigate to login screen
    navigation.navigate('Login');
    console.log('Login pressed');
  };

  console.log('WelcomeScreen rendered');
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      <Image source={require('../assets/images/Globe.png')} style={styles.image} resizeMode='contain'/>
      
      <Text style={styles.welcome}>
        Welcome to SkyScraper
      </Text>
      <Text style={styles.lightLine}>Easily find and book your flight</Text>

      <TouchableOpacity style={styles.getStarted} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      {/* UnComent later */}
      {/* <PrimaryButton buttonName={'Sign Up'} onPress={handleSignUp}/>
      <PrimaryButton buttonName={'Log In'} onPress={handleLogin}/> */}

      <TouchableOpacity style={styles.getStarted} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    // backgroundColor: 'green'
    // backgroundColor: '#fff',
  },
  image: {
    width: wp('85%'),
    height: hp('40%'),
    alignSelf: 'center',
    marginVertical: hp('4%'),
    marginTop: hp('10%'),
    // backgroundColor: 'red',
  },
  welcome: { 
    // width: wp('90%'),
    fontSize: hp('3%'), 
    fontWeight: 'bold', 
    textAlign: 'center',
    // backgroundColor: 'yellow' 
  },
  lightLine: {
    fontSize: hp('1.5%'),
    textAlign: 'center',
    color: COLORS.lightGray,
    marginVertical: hp('5%'),
  },
  getStarted: {
    backgroundColor: COLORS.primary,
    height: hp('6%'),
    width: wp('80%'),
    marginVertical: hp('1.5%'),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('2%'),

  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: hp('2%'),
    color: COLORS.white,
  },
})

export default WelcomeScreen;
import { Alert, Image, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../constants/COLORS';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { loginUser } from '../../api/auth/EmailAuth';

const Login = () => {

    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigation = useNavigation();

    const handleForgotPassword = () => {
        // Handle forgot password logic
        console.log('Forgot Password pressed');
    };

    // Loging user and passing name, email and image to home screen
    const handleLogin = async () => {

        if(!email || !password){ // checking nothing is empty
            Alert.alert("Enter Details", "Fill all fiels")
            return
        }
        // Handle login logic
        console.log("lgn prsd");
        
        try {
            const login = await loginUser(email,password)
            if(login){
                console.log('Login success', login);
                navigation.navigate('HomePage', {
                name: login.displayName,
                email: login.email,
                // pic: login.photoURL, // will add later
            });
            setEmail('')
            setPassword('')
            }
            
            
        } catch (error) {
            console.log("error in handle login,", error);
            Alert.alert("Recheck please", error)
        }
        
        
        // navigation.navigate('HomePage');
        
    };
    

  return (
    <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.black} />
        <View style={styles.containerTwo}>

        
            <Image source={require('../../assets/images/checkFlight.png')} style={styles.image} resizeMode='contain'/>
            <Text style={styles.title}>SkyScrapper</Text>
            <Text style={styles.subText}>Find your perfect flite quickly</Text>

            {/* Email and Password */}
            <View style={styles.inputContainer}>
                <VectorIcon name="email" size={24} color={COLORS.black} />
                
                <TextInput
                    placeholder="Email"
                    style={styles.inputText}
                    enterKeyHint='next'
                    inputMode='email'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}/>
            </View>

            <View style={styles.inputContainer}>
                <VectorIcon name="key" size={24} color={COLORS.black} />
                
                <TextInput
                    placeholder="Password"
                    style={styles.inputText}
                    value={password}
                    secureTextEntry={showPassword}
                    keyboardType='default'
                    autoCapitalize='none'
                    enterKeyHint='done'
                    onChangeText={setPassword}/>
                    {
                     password &&   <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setShowPassword(prev => !prev)}>
                        <VectorIcon
                        name={showPassword ? 'visibility' : 'visibility-off'}
                        size={24}
                        color="#888"
                        />
                    </TouchableOpacity>
                    }
                      
            </View>

            {/* Forgot Password */}
            <View style={[styles.forGot]}>
                <TouchableOpacity  onPress={handleForgotPassword}>
                    <Text style={styles.forgotText}>Forgot Password? </Text>
                </TouchableOpacity>

                <Text style={[styles.forgotText, {alignSelf: 'flex-end'}]} onPress={()=>navigation.navigate('SignUp')}>    Sign up</Text>
            </View>

            <PrimaryButton buttonName={'Log in'} onPress={handleLogin}/>

             <View style={styles.lineContainer}>
                <View style={styles.line} />
                    <Text style={styles.text}>OR LOG IN WITH</Text>
                <View style={styles.line} />
            </View>

            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <PrimaryButton buttonName={'Facebook'} buttonStyle={{marginBottom: hp('5%'), width: wp('35%')}}/>

                <PrimaryButton buttonName={'Google'} buttonStyle={{marginBottom: hp('5%'), width: wp('35%')}}/>
            </View>
            
            
        </View>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerTwo:{
        // backgroundColor: COLORS.red,
        marginHorizontal: wp('5%'),
    },
    image:{
        width: wp('85%'),
        height: hp('30%'),
        alignSelf: 'center',
        marginVertical: hp('4%'),
        marginTop: hp('10%'),
    },
    title: {
        fontSize: hp('3%'),
        fontWeight: 'bold',
        color: COLORS.black,
        textAlign: 'center',
        marginTop: hp('2%'),
    },
    subText: {
        fontSize: hp('2%'),
        color: COLORS.lightGray,
        textAlign: 'center',
        marginTop: hp('0.5%'),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center', // This aligns items horizontally
        borderRadius: 5,
        paddingHorizontal: wp('3%'), // Uncommented for better spacing
        // marginVertical: hp('2%'),
    },
    inputText: {
        flex: 1,
        height: hp('5%'),
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 5,
        paddingHorizontal: wp('3%'),
        marginVertical: hp('2%'),
        color: COLORS.black,
        marginLeft: wp('2%'), // Add some space between icon and input
    },
    forGot:{ 
        alignSelf: 'flex-end',
        marginRight: wp('5%'), 
    },
    forgotText: {
        color: COLORS.lightGray,
        fontSize: hp('1.5%'),
    },
    eyeIconContainer: {
    padding: wp('1%'), // Add some padding for better touch area
    justifyContent: 'center',
    alignItems: 'center',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginVertical: hp('5%'),
        marginHorizontal: wp('5%'),
        marginTop: hp('12%'),
        marginBottom: hp('2%'),

  },
  line: {
    flex: 1,
    height: hp('0.1%'),
    backgroundColor: '#ccc',
  },
  text: {
    marginHorizontal: wp('2%'),
    fontSize: hp('1.3%'),
    color: '#999',
  },
})
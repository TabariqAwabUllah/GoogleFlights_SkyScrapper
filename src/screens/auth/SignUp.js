import { Alert, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../constants/COLORS';
import VectorIcon from 'react-native-vector-icons/MaterialIcons';
import PrimaryButton from '../../components/PrimaryButton';
import { useNavigation } from '@react-navigation/native';
import { createUser } from '../../api/auth/EmailAuth';

const SignUp = () => {

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const navigation = useNavigation();

    const handleSignUp =  async () => {
        // Handle sign up logic
        if(!fullName || !email || !password || !confirmPassword){
            Alert.alert("Enter Details", "Fill all fields")
            return
        }

    
        if(password === confirmPassword ){ // checks are they same
            try {
                // creating user with email and password
                console.log("Name:",fullName);
                
                const create = await createUser(fullName, email, confirmPassword)
                console.log('Sign Up pressed',  create);

                if(create){

                    navigation.navigate('HomePage', {
                    name: create.displayName,
                    email: create.email,
                    // pic: create.photoURL, // will add later
                    });
                    setFullName('')
                    setEmail('')
                    setPassword('')
                    setConfirmPassword('')

                }

            } catch (error) {
                console.log("error in sign up", error.message);
                Alert.alert("Recheck",error)
            }


        }else if (password !== confirmPassword) { // checks both password fields are same
        console.log('Passwords do not match');
        Alert.alert("Password","Both Passwords should be same")
        }

        
    };

    const handleLoginNavigation = () => {
        navigation.navigate('Login');
    };

    const buttonStyle1 =  useMemo(()=>({
        marginTop: hp('3%')
    }),[])

    const buttonStyle2 = useMemo(()=>({
        marginBottom: hp('3%'), 
        width: wp('35%')
    }),[])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.black} />
            <View style={styles.containerTwo}>

                <Image source={require('../../assets/images/checkFlight.png')} style={styles.image} resizeMode='contain'/>
                <Text style={styles.title}>SkyScrapper</Text>
                <Text style={styles.subText}>Create your account to get started</Text>

                {/* Full Name */}
                <View style={styles.inputContainer}>
                    <VectorIcon name="person" size={24} color={COLORS.black} />
                    
                    <TextInput
                        placeholder="Full Name"
                        style={styles.inputText}
                        enterKeyHint='next'
                        autoCapitalize='words'
                        value={fullName}
                        onChangeText={setFullName}/>
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <VectorIcon name="email" size={24} color={COLORS.black} />
                    
                    <TextInput
                        placeholder="Email"
                        style={styles.inputText}
                        enterKeyHint='next'
                        inputMode='email'
                        keyboardType='email-address'
                        autoCapitalize='none'
                        value={email}
                        onChangeText={setEmail}/>
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <VectorIcon name="key" size={24} color={COLORS.black} />
                    
                    <TextInput
                        placeholder="Password"
                        style={styles.inputText}
                        value={password}
                        secureTextEntry={!showPassword}
                        keyboardType='default'
                        autoCapitalize='none'
                        enterKeyHint='next'
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

                {/* Confirm Password */}
                <View style={styles.inputContainer}>
                    <VectorIcon name="key" size={24} color={COLORS.black} />
                    
                    <TextInput
                        placeholder="Confirm Password"
                        style={styles.inputText}
                        value={confirmPassword}
                        secureTextEntry={!showConfirmPassword}
                        keyboardType='default'
                        autoCapitalize='none'
                        enterKeyHint='done'
                        onChangeText={setConfirmPassword}/>
                        {
                         confirmPassword &&   <TouchableOpacity style={styles.eyeIconContainer} onPress={() => setShowConfirmPassword(prev => !prev)}>
                            <VectorIcon
                            name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                            size={24}
                            color="#888"
                            />
                        </TouchableOpacity>
                        }
                </View>

                <PrimaryButton buttonName={'Sign Up'} onPress={handleSignUp} buttonStyle={buttonStyle1}/>

                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                        <Text style={styles.text}>OR SIGN UP WITH</Text>
                    <View style={styles.line} />
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                    <PrimaryButton buttonName={'Facebook'} buttonStyle={buttonStyle2}/>

                    <PrimaryButton buttonName={'Google'} buttonStyle={buttonStyle2}/>
                </View>

                {/* Already have account */}
                <View style={styles.loginContainer}>
                    <Text style={styles.loginText}>Already have an account? </Text>
                    <TouchableOpacity onPress={handleLoginNavigation}>
                        <Text style={styles.loginLink}>Log in</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    containerTwo:{
        marginHorizontal: wp('5%'),
    },
    image:{
        width: wp('85%'),
        height: hp('25%'),
        alignSelf: 'center',
        marginVertical: hp('3%'),
        marginTop: hp('8%'),
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
        marginBottom: hp('2%'),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: wp('3%'),
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
        marginLeft: wp('2%'),
    },
    eyeIconContainer: {
        padding: wp('1%'),
        justifyContent: 'center',
        alignItems: 'center',
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: wp('5%'),
        marginTop: hp('8%'),
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
    loginContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2%'),
        marginBottom: hp('3%'),
    },
    loginText: {
        fontSize: hp('1.8%'),
        color: COLORS.lightGray,
    },
    loginLink: {
        fontSize: hp('1.8%'),
        color: COLORS.black,
        fontWeight: 'bold',
    },
})
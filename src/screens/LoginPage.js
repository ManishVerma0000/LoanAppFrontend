import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import OtpScreen from '../../components/Otp';
const Loginpage = (props) => {
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [showOtpInput, setShowOtpInput] = useState(false);

    const handleSendOtp = () => {
        // Implement OTP sending logic here
        // On success,
        // setShowOtpInput(true)
        props.navigation.navigate("TotalLoan")
    };

    const handleLogin = () => {
        // Implement OTP verification and login logic here
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/g12.png')}
                    style={styles.logo}
                />
            </View>
            {/* <Text style={styles.title}>Welcome to My App</Text> */}
            {showOtpInput ? (
                <>
                <OtpScreen />
                    {/* <TextInput
                        style={styles.input}
                        placeholder="OTP"
                        onChangeText={(text) => setOtp(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity> */}
                </>
            ) : (
                <>
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        onChangeText={(text) => setFullName(text)}
                        maxLength={6}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Mobile Number"
                        onChangeText={(text) => setPhoneNumber(text)}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSendOtp}>
                        <Text style={styles.buttonText}>Send OTP</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 200, // Set your logo image dimensions
        height: 200, // Set your logo image dimensions
        resizeMode: 'contain', // Adjust this based on your logo aspect ratio
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'blue',
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
});

export default Loginpage;

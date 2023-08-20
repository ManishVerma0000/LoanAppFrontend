import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import axios from "axios";
import Toast from 'react-native-toast-message';

export default function Otp(props) {
    const [phone, setphone] = useState('')
    const [otp, setOtp] = useState('')
    const passworddetailsdata = useSelector((state) => state.passwoprdreducer)
    const usedetails = useSelector((state) => state.reducer)
    useEffect(() => {
        // usedetails[0].phonenumber
        setphone("8818040732")
        // console.log(usedetails[0].phonenumber)
    }, [])

    const registerfunction = () => {
        props.navigation.navigate("Login")
    }
    const submitotp = () => {
        const data = {
            email: "manishverma88180@gmail.com",
            otp: otp
        }
        axios.post('http://192.168.197.169:7000/api/optverify', data, {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then((result) => {
            console.log(result)
            Toast.show({
                type: 'success',
                text1: 'otp verified'
            });
            props.navigation.navigate("TotalLoan")
        }).catch((err) => {
            console.log(err)
            Toast.show({
                type: 'error',
                text1: 'otp mismatch'
            });
            props.navigation.navigate("otp")

        })
        console.log(otp, 'this is thev value of the otp')
    }
    const handleInputChange = (text) => {
        setOtp(text);
    };
    return (
        <View>
            <Toast />
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.Image} source={require('../../assets/rotateImage.png')} ></Image>
                </View>
                <View style={styles.StepOne}>
                    <Image source={require('../../assets/step3.png')}></Image>
                </View>
                <View style={styles.textmaindiv}>
                    <Text style={styles.pleasetext}>
                        Enter OTP
                    </Text>
                    <Text style={styles.login} >
                        sent to
                    </Text>
                    <Text style={styles.continue}>
                        your mobile
                    </Text>
                </View>
                <View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>



                        <Text style={{ fontSize: 23, fontWeight: 'bold', marginLeft: 30 }}> {phone}</Text>
                        <TouchableOpacity>
                            <Image source={require("../../assets/edit.png")} style={{ margin: 20 }} />
                        </TouchableOpacity>

                    </View>

                    <View style={styles.emailinputtag}>
                        <Text style={{ marginBottom: 10, color: "black", fontWeight: "900", fontSize: 17 }}>Enter the Otp</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="enter the otp"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleInputChange}

                        />
                    </View>


                </View>

                <View style={styles.passwordbtn}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        submitotp()
                    }}>
                        <Text style={styles.buttonText}>Submit OTP</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.imagefont}>
                    <Image source={require('../../assets/GoogleLogin.png')}></Image>
                    <Image source={require('../../assets/facebookLogin.png')}></Image>
                    <Image source={require('../../assets/Group11.png')}></Image>
                </View>
                <View style={styles.textheadsection}>
                    <Text>
                        <Text style={styles.innertext}>
                            Already a  Member,
                        </Text>
                        <Text style={styles.register} onPress={registerfunction}> Login Now</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.leftsideimage}>
                <Image source={require('../../assets/bottomlogin.png')}>
                </Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    login: {
        color: "blue"

    },
    textmaindiv: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30
    },

    pleasetext: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    login: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'blue',
    },
    continue: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold',
    },
    StepOne: {
        marginLeft: 40,

    },

    headerofallinput: {
        margin: 10
    },
    inputtagofpassword: {

        margin: 10
    },
    emailinputtag: {
        color: "#5045E6",
        margin: 10,
        marginLeft: 30
    },

    leftsideimage: {
        display: "flex",
        flexDirection: "row-reverse"

    },
    textheadsection: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        lineHeight: "21.13px",
        fontWeight: '500'
    },
    innertext: {
        color: "#5F5F5F",
        fontSize: 17, fontWeight: 'bold', marginLeft: 30
    },
    register: {
        color: "#5045E6",
        fontSize: 17, fontWeight: 'bold', marginLeft: 30

    },
    imagefont: {
        marginTop: 5,
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontawesome: {
        fontFamily: 'Roboto',
        fontSize: 16,

    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 12,
        width: 230,
        height: 45,
        backgroundColor: "#5045E6",
        margin: 10,
        marginRight: 30
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {

        // backgroundColor: "red"
    },
    passwordbtn: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    password: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    },

    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 2,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10
    },
    textwelcome: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    imagecontainer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",


    },
    Image: {

    }

})

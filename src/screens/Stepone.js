import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
import { steponedetails } from "../redux/action";
import { useDispatch } from 'react-redux'
import Toast from "react-native-toast-message";

export default function StepOne(props) {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [fullname, setFullname] = useState('')
    const [phonenumber, setphonenumber] = useState('')
    const addthevalue = (data) => {
        dispatch(steponedetails(data))
        axios.post("http://10.81.48.236:7000/api/signup", data).then((res) => {
            console.log(data)
            Toast.show({
                type: 'success',
                text1: 'Details are added successfully'
            });
            props.navigation.navigate("otp")
        }).catch((err) => {
            console.log(err)
            Toast.show({
                type: 'error',
                text1: 'Details are added successfully'
            });


        })

    }
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.Image} source={require('../../assets/rotateImage.png')} ></Image>
                </View>
                <View style={styles.StepOne}>
                    <Image style={{ marginLeft: 25 }} source={require('../../assets/Steone.png')}></Image>
                </View>
                <View style={styles.textmaindiv}>
                    <Text style={styles.pleasetext}>
                        Enter
                    </Text>
                    <Text style={styles.login} >
                        Profile Details
                    </Text>
                    <Text style={styles.continue}>
                        to continue
                    </Text>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <View style={styles.emailinputtag}>
                        <Text style={{ fontSize: 17, fontWeight: "700" }}>Full Name</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the name"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                setFullname(text)
                            }}

                        />
                    </View>
                    <View style={styles.emailinputtag}>
                        <Text style={{ fontSize: 17, fontWeight: "700" }}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="user@gmail.com"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                setEmail(text)
                            }}
                        />
                    </View>
                    <View style={styles.emailinputtag}>
                        <Text style={{ fontSize: 17, fontWeight: "700" }}>Phone Number</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="+91"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                setphonenumber(text)
                            }}
                        />
                    </View>

                </View>

                <View style={styles.passwordbtn}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        steponedetails({
                            email: email,
                            fullname: fullname,
                            phonenumber: phonenumber

                        })


                    }}>
                        <Text style={styles.buttonText} onPress={() => {
                            // functionnexpage,
                            addthevalue({
                                email: email,
                                phonenumber: phonenumber,
                                fullname: fullname
                            })

                        }}>Next</Text>
                    </TouchableOpacity>
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
        margin: 22,
        flexDirection: 'row',
        alignItems: 'center',
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
        height: 50,
    },

    headerofallinput: {
        margin: 10
    },
    inputtagofpassword: {

        margin: 10
    },
    emailinputtag: {
        color: "#5045E6",
        margin: 10
    },

    leftsideimage: {
        display: "flex",
        flexDirection: "row-reverse",
        transform: [{ rotate: '180deg' }],
        backgroundColor: "white"

    },
    textheadsection: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        lineHeight: "21.13px",
        fontWeight: '500'
    },
    innertext: {
        color: "#5F5F5F"
    },
    register: {
        color: "#5045E6",
        fontSize: 17, fontWeight: "700", marginLeft: 10

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
        width: 281,
        height: 45,
        backgroundColor: "#5045E6",
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {
        backgroundColor: "white"
        // backgroundColor: "red"
    },
    passwordbtn: {
        display: "flex",
        justifyContent: 'center',
        alignItems: "center",
        marginRight: 25
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
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10
    },
    textwelcome: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    imagecontainer: {
        height: 150,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },


})

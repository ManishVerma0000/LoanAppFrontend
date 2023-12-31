import React, { useEffect, useReducer, useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { passwordDetails } from "../redux/action";
import Toast from 'react-native-toast-message';
import axios from "axios"
export default function Passworcreate(props) {
    const dispatch = useDispatch()
    const userdata = useSelector((state) => state.reducer)

    useEffect(() => {
        setEmail(userdata[0].email)
        setphone(userdata[0].phonenumber)
        setFirstname(userdata[0].fullname)
    }, [])

    const [password, setpassword] = useState("")
    const [confirmapassword, setconfirmpassword] = useState('')
    const [firstname, setFirstname] = useState('')
    const [phone, setphone] = useState('')
    const [email, setEmail] = useState('')



    const nextpageotp = (data) => {
        dispatch(passwordDetails(data))

    }


    const registercomplete = () => {
        if (password == confirmapassword) {
            const data = {
                email: email,
                firstname: firstname,
                phone: phone,
                password: password
            }
            console.log(data)
            axios.post("http://192.168.197.169:7000/api/signup", data).then((data) => {
                Toast.show({
                    type: 'success',
                    text1: 'Details are saved successfully',
                });
                props.navigation.navigate("otp")
                console.log(data)
            }).catch((err) => {
                console.log(err)
                Toast.show({
                    type: 'error',
                    text1: 'User is Already exist',

                });
                props.navigation.navigate("Register")
            })
        } else {

        }
    }
    return (
        <View>
            <Toast />
            <View style={styles.container}>
                <View style={styles.imagecontainer}>
                    <Image style={styles.Image} source={require('../../assets/rotateImage.png')} ></Image>
                </View>
                <View style={styles.StepOne}>
                    <Image source={require('../../assets/password.png')}></Image>
                </View>
                <View style={styles.textmaindiv}>
                    <Text style={styles.pleasetext}>
                        Create
                    </Text>
                    <Text style={styles.login} >
                        A Password
                    </Text>
                    <Text style={styles.continue}>
                        to continue
                    </Text>

                </View>

                <View>
                    <View style={styles.emailinputtag}>
                        <Text style={{ marginLeft: 7 }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter the Password"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                setpassword(text)
                            }}
                        />
                    </View>
                    <View style={styles.emailinputtag}>
                        <Text style={{ marginLeft: 7 }}>Confirm Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Confirm Password"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={(text) => {
                                setconfirmpassword(text)
                            }}
                        />
                    </View>


                </View>

                <View style={styles.passwordbtn}>
                    <TouchableOpacity style={styles.button} onPress={() => {
                        nextpageotp({
                            password: password,
                            confirmapassword: confirmapassword
                        }),
                            registercomplete()
                    }}>
                        <Text style={styles.buttonText}>Next</Text>
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
                        <Text style={styles.register}> Login Now</Text>
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
        marginLeft: 10
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
        marginLeft: 15,

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
        marginTop: 10,
        transform: [{ rotate: '180deg' }]

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
        color: "#5045E6"

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
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {

        backgroundColor: "white"
    }, passwordbtn: {
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
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10,
        marginLeft: 10
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

import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import Toast from 'react-native-toast-message';
import api from "../../api/api";
export default function Loginpage() {
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const handleInputChange = (text) => {
        setemail(text);
    };
    const handleInputChangepassword = (text) => {
        setPassword(text);
    }
    const functionclick = () => {
        console.log(email)
        console.log(password)
        const data = {
            email: email,
            password: password
        }
        api.post("/login", data, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((data) => {
            console.log(data)
            Toast.show({
                type: 'success', // 'info', 'success', 'error', 'none'
                text1: 'login success',
                position: 'bottom', // 'top', 'center', 'bottom'
                visibilityTime: 2000, // Duration of the toast message in milliseconds
            });
        }).catch((err) => {
            console.log(err)
            Toast.show({
                type: 'error', // 'info', 'success', 'error', 'none'
                text1: 'login not success',
                position: 'top', // 'top', 'center', 'bottom'
                visibilityTime: 2000, // Duration of the toast message in milliseconds
            });
        })
    }
    return (
        <View>
            <Toast />
            <View style={styles.container}>


                <View style={styles.imagecontainer}>
                    <Image source={require('../../assets/rotateImage.png')}></Image>
                </View>
                <View style={styles.headerofallinput} >
                    <View style={styles.inputcontainer}>
                        <Text style={styles.textwelcome}> Welcome Back  </Text>
                        <View style={styles.textmaindiv}>
                            <Text style={styles.pleasetext}>Please</Text>
                            <Text style={styles.login}>Login</Text>
                            <Text style={styles.continue}>to continue</Text>
                        </View>
                    </View>
                    <View style={styles.emailinputtag}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleInputChange}
                        />
                    </View>

                    <View style={styles.inputtagofpassword}>
                        <Text>Password</Text>
                        <TextInput
                            style={styles.input}

                            placeholder="Enter your password"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleInputChangepassword}
                        />

                    </View>

                </View>
                <View style={styles.password}>
                    <Text>Forget Password</Text>
                </View>
                <View style={styles.passwordbtn}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText} onPress={functionclick
                        }>Click Me</Text>
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
                            Not a Member,
                        </Text>
                        <Text style={styles.register}> Register Now</Text>
                    </Text>
                </View>
            </View>
            <View style={styles.leftsideimage}>
                <Image source={require('../../assets/bottomlogin.png')}>
                </Image>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    login: {
        color: "blue"


    },
    textmaindiv: {
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


    headerofallinput: {
        margin: 10
    },
    inputtagofpassword: {

        margin: 10
    },
    emailinputtag: {
        color: "#5045E6",
        margin: 20
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
        backgroundColor: "green"

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

        // backgroundColor: "red"
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

})

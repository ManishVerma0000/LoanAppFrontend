import React, { Fragment, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import api from "../../api/api";
import axios from "axios";
import { TextInput } from "react-native-paper";
export default function Loginpage(props) {
    const [passwordVisible, setpasswordvisible] = useState(true)
    const [email, setemail] = useState('')
    const [password, setPassword] = useState('')
    const handleInputChange = (text) => {
        setemail(text);
    };
    const handleInputChangepassword = (text) => {
        setPassword(text);
    }
    const registerfunction = () => {
        props.navigation.navigate("Register")
    }
    const settothenextpage = () => {
        props.navigation.navigate("Register")
    }
    const forgetpassword = () => {
        props.navigation.navigate("ForgetPassword")
    }
    const settothenextpagelogin = () => {
        props.navigation.navigate("Register")
    }
    const functionclick = async () => {
        try {
            const data = {
                email: email,
                password: password
            }

            await axios.post("http://10.81.48.236:7000/api/login", data, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            }).then((data) => {
                Toast.show({
                    type: 'success',
                    text1: 'Login Success'
                });
                settothenextpagelogin()

            }).catch((err) => {
                console.log(err)
                console.log('inside the error part')
                Toast.show({
                    type: 'error',
                    text1: 'please login again',

                });
                props.navigation.navigate("Login")
            })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View style={{ backgroundColor: "white" }}>
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
                            <Text style={styles.login} onPress={settothenextpagelogin}>Login</Text>
                            <Text style={styles.continue}>to continue</Text>
                        </View>
                    </View>
                    <View style={styles.emailinputtag}>
                        <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "700" }}>Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            autoCapitalize="none"
                            onChangeText={handleInputChange}

                        />
                    </View>
                    <View style={styles.inputtagofpassword}>
                        <Text style={{ marginLeft: 10, fontSize: 17, fontWeight: "700" }} >Password</Text>
                        <TextInput
                            style={styles.input}
                            label='password'
                            secureTextEntry={true}
                            right={
                                <TextInput.Icon
                                    name={passwordVisible ? 'eye' : 'eye-off'}
                                    onPress={() => {
                                        setpasswordvisible(!passwordVisible)
                                    }}
                                >
                                    <Icon
                                        name={passwordVisible ? 'eye' : 'eye-off'}
                                        size={40}
                                    />
                                </TextInput.Icon>
                            }
                            onChangeText={handleInputChangepassword}
                        />

                    </View>

                </View>
                <View style={styles.password}>
                    <Text onPress={forgetpassword} style={{ marginBottom: 10 }}>Forget Password</Text>
                </View>
                <View style={styles.passwordbtn}>
                    <TouchableOpacity style={styles.button} onPress={functionclick
                    }>
                        <Text style={styles.buttonText} >Click Me</Text>
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
                        <Text style={styles.register} onPress={registerfunction}> Register Now</Text>
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
        marginLeft: 15
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
        margin: 10

    },
    leftsideimage: {
        margin: 0,
        display: "flex",
        height: "auto",
        width: "auto",
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
        backgroundColor: "green"

    },
    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        borderRadius: 12,
        width: 300,
        height: 45,
        backgroundColor: "#5045E6",


    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    container: {

        // backgroundColor: "red"
    }, passwordbtn: {
        display: "flex",
        // justifyContent: 'center',
        alignItems: "center",
        marginRight: 10

    },
    password: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",


    },

    input: {
        width: 300,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 10,
        marginLeft: 10,
        backgroundColor: "white"
    },
    textwelcome: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15
    },
    imagecontainer: {
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "flex-end",


    },

})

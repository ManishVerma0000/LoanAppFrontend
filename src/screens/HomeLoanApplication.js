import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import Footer from './Footer';
import { toatalAmountfunction } from "../redux/action"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'


export default function HomaLoanApplication(props) {
    const dispatch = useDispatch()

    const [price, setPrice] = useState("300000")
    const [isChecked, setIsChecked] = useState(false);
    const [time, settime] = useState("2")
    const [installements, setinstallement] = useState("8")
    const subtractprice = () => {
        setPrice(parseInt(price) - 10000)
    }
    const additionprice = () => {
        setPrice((parseInt(price) + 10000).toString())
    }
    const additioninstallment = () => {
        setinstallement((parseInt(installements) + 1).toString())
    }
    const subtractinstallment = () => {
        setinstallement((parseInt(installements) - 1).toString())
    }
    const descresetime = () => {
        settime((parseInt(time) - 1).toString())
    }
    const increasetime = () => {
        settime((parseInt(time) + 1).toString())
    }
    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };

    const toatalAmount = parseInt(price) * 9 / 1000
    const data = {
        data: toatalAmount * parseInt(time * 12) + parseInt(price),
        installements: installements
    }
    // console.log(data)
    dispatch(toatalAmountfunction(data))
    const sendtototalamountpage = () => {
        props.navigation.navigate("Amount")
    }


    return (
        <ScrollView>
            <View style={{ backgroundColor: "white" }}>
                <View style={styles.topcontainer}>
                    <Image source={require('../../assets/leftarrow.png')}></Image>
                    <Text style={styles.textapplication}>Home Loan Application</Text>
                    <Image source={require('../../assets/face.png')}></Image>
                </View>
                <View style={styles.containersecond}>
                    <View>
                        <View>
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold", fontSize: 17 }}>
                                I would Like to Borrow
                            </Text>
                        </View>
                        <View style={styles.twoimages}>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={subtractprice}>
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 50, color: "blue", marginRight: 40 }}> -</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/rupees.png')} style={{ margin: 10 }} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                        value={price}
                                        onChange={(text) => {
                                            setPrice(text)
                                        }}
                                    />
                                </View>

                            </View>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={additionprice} >
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 30, color: "blue", marginRight: 40 }}> +</Text>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containersecond}>
                    <View>
                        <View>
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold", fontSize: 17 }}>
                                For A time Period of
                            </Text>
                        </View>
                        <View style={styles.twoimages}>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={descresetime}>
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 50, color: "blue", marginRight: 40 }}> -</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/Timer.png')} style={{ margin: 10 }} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                        value={time}
                                        onChange={(text) => {
                                            settime(text)
                                        }}
                                    />
                                </View>
                                <View></View>
                            </View>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={increasetime}>
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 30, color: "blue", marginRight: 30 }}> +</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.containersecond}>
                    <View>
                        <View>
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold", fontSize: 17 }}>
                                no. of installements
                            </Text>
                        </View>
                        <View style={styles.twoimages}>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={subtractinstallment}>
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 50, color: "blue", marginRight: 40 }}> -</Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/Hash.png')} style={{ margin: 10 }} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                        value={installements}
                                        onChange={(text) => {
                                            setinstallement(text)
                                        }}
                                    />
                                </View>
                            </View>
                            <View style={styles.negativepng}>
                                <TouchableOpacity onPress={additioninstallment}>
                                    <Text style={{ width: 40, fontWeight: "bold", fontSize: 30, color: "blue", marginRight: 30 }}> +</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxToggle}>
                            {
                                isChecked ? <Image source={require("../../assets/Vector.png")} style={{ marginRight: 10 }}></Image> : <Image source={require("../../assets/Vector.png")} style={{ backgroundColor: "darkblue", overflow: "hidden", marginRight: 10 }}></Image>
                            }
                            {/* <View style={[styles.checkbox, isChecked ? <Image></Image> : styles.unchecked]} /> */}
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.label}>Agree to Terms and Conditions</Text>
                    </View>
                </View>

                <View style={styles.clickbutton}>
                    <Button title='click' onPress={sendtototalamountpage}></Button>
                </View>
                <View>
                    <Text style={{ marginLeft: 50, fontSize: 15 }}>
                        We are happy to inform you that we
                    </Text>
                    <Text style={{ marginLeft: 70, fontSize: 15 }}>
                        offer an interest rate of only 9%
                    </Text>
                </View>
            </View >
            <Footer style={{ marginTop: 20 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    textbottom: {
        marginLeft: 30
    },
    clickbutton: {
        padding: 20
    },
    container: {
        display: "flex",
        flexDirection: "row",
        margin: 30
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'blue',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: 'black',
    },
    unchecked: {
        backgroundColor: 'transparent',
    },
    label: {
        fontSize: 16,
    },
    checkboxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },

    buttonContainer: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },

    topcontainer: {

        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    input: {
        width: 150,
        borderBottomWidth: 2

    },
    ruppestag: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "center",
        alignItems: "center",

    },
    textapplication: {
        color: "blue",
        fontWeight: "bold",
        fontSize: 17
    },
    containersecond: {

        color: "yellow",
        marginTop: 50

    },
    twoimages: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }

})
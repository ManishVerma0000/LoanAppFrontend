import { React, useState } from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView, TextInput, TouchableOpacity } from 'react-native';

import { CheckBox } from 'react-native-elements';
import Footer from './Footer';


export default function HomaLoanApplication() {
    const [isChecked, setIsChecked] = useState(false);


    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
    };


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
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold" }}>
                                I would Like to Borrow
                            </Text>
                        </View>

                        <View style={styles.twoimages}>

                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/negative.png')} />
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/rupees.png')} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View></View>
                            </View>
                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/positive.png')} />
                            </View>
                        </View>
                    </View>
                </View>


                <View style={styles.containersecond}>
                    <View>
                        <View>
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold" }}>
                                For A time Period of
                            </Text>
                        </View>

                        <View style={styles.twoimages}>

                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/negative.png')} />
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/Timer.png')} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View></View>
                            </View>
                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/positive.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.containersecond}>
                    <View>
                        <View>
                            <Text style={{ color: "black", marginLeft: 10, fontWeight: "bold" }}>
                                no. of installements
                            </Text>
                        </View>
                        <View style={styles.twoimages}>
                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/negative.png')} />
                            </View>
                            <View>
                                <View style={styles.ruppestag}>
                                    <Image source={require('../../assets/Hash.png')} />
                                    <TextInput
                                        style={styles.input}
                                        underlineColorAndroid="transparent"
                                    />
                                </View>
                                <View></View>
                            </View>
                            <View style={styles.negativepng}>
                                <Image source={require('../../assets/positive.png')} />
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.container}>
                    <View>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={handleCheckboxToggle}>
                            <View style={[styles.checkbox, isChecked ? styles.checked : styles.unchecked]} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <Text style={styles.label}>Agree to Terms and Conditions</Text>
                    </View>
                </View>

                <View style={styles.clickbutton}>
                    <Button title='click'></Button>
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

    // container: {
    //     marginLeft: 20
    // },
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
        justifyContent: "center",
        alignItems: "center"
    },
    textapplication: {
        color: "blue",
        fontWeight: "bold"
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
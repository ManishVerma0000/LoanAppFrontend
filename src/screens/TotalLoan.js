import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";

export function TotalLoan(props) {
    const sendtothenextpage = () => {
        props.navigation.navigate("Application")
    }

    return (
        <ScrollView style={{ backgroundColor: "white" }}>
            <View style={styles.topimage} >
                <View>
                    <Image source={require("../../assets/nextbtn.png")}></Image>
                </View>
                <View>
                    <Image source={require("../../assets/face.png")}></Image>
                </View>
            </View>
            <View style={styles.textcontainer}>
                <Image source={require("../../assets/Frame92.png")}></Image>
            </View>
            <View style={styles.text}>
                <Text>
                    Easy ,Fast & Quick Loan Process
                </Text>
            </View>
            <View style={styles.apply}>
                <TouchableOpacity style={styles.btn} onPress={() => {
                    sendtothenextpage()
                }}>
                    <Text style={styles.applynow} >Apply Now</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container1}>
                <View style={styles.card1}>
                    <View style={styles.imageContainer1}>
                        <Image source={require("../../assets/Group94.png")} style={styles.image1} />
                    </View>
                    <View style={styles.totalText1}>
                        <Text>We Can aid you</Text>
                        <Text>in acquiring</Text>
                        <Text>your home</Text>
                        <Text>through</Text>
                        <Text>financing</Text>
                        <TouchableOpacity style={styles.applyButton} onPress={() => {
                            sendtothenextpage()
                        }} >
                            <Text style={styles.applyButtonText}   >Apply now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View >
                <Text style={styles.typeofloan}>
                    Types of Loan
                </Text>
            </View>

            <View style={styles.container}>
                <View style={styles.card} >
                    <Image
                        source={require('../../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View styles={styles.upto}>
                        <Text style={{ fontWeight: "900" }}>Home Loan</Text>
                        <Text>Up to <Text style={{ color: "darkblue" }} onPress={() => {
                            sendtothenextpage()
                        }}>20 lakhs</Text> </Text>
                        <Text >6% interest </Text>
                    </View>
                </View>
                <View style={styles.card} >
                    <Image
                        source={require('../../assets/image8.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View styles={styles.upto}    >
                        <Text style={{ fontWeight: "900" }}>Student Loan</Text>
                        <Text>Up to <Text style={{ color: "darkblue" }} onPress={() => {
                            sendtothenextpage()
                        }}>20 lakhs</Text> </Text>
                        <Text >6% interest </Text>
                    </View>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.card} >
                    <Image
                        source={require('../../assets/image1.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View styles={styles.upto}>
                        <Text style={{ fontWeight: "900" }}>Home Loan</Text>
                        <Text>Up to <Text style={{ color: "darkblue" }} onPress={() => {
                            sendtothenextpage()
                        }}>20 lakhs</Text> </Text>
                        <Text >6% interest </Text>
                    </View>
                </View>
                <View style={styles.card} >
                    <Image
                        source={require('../../assets/image8.png')}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View styles={styles.upto}>
                        <Text style={{ fontWeight: "900" }}>Car Loan</Text>
                        <Text>Up to <Text style={{ color: "blue", fontWeight: "700" }} onPress={() => {
                            sendtothenextpage()
                        }}>20 lakhs</Text> </Text>
                        <Text >6% interest </Text>
                    </View>

                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container1: {
        flexGrow: 1,
        padding: 20,
    },
    card1: {
        backgroundColor: '#4BB7DD',
        borderRadius: 10,
        elevation: 3,
        flexDirection: 'row',
        padding: 15,
    },
    imageContainer1: {
        marginRight: 15,
    },
    image1: {
        width: 150,
        height: 100,
    },
    totalText1: {
        flex: 1,
        marginLeft: 20
    },
    applyButton: {
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    applyButtonText: {
        color: 'white',
        fontWeight: "700"
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    typeofloan: {
        fontSize: 20,
        marginLeft: 20,
        fontWeight: "700"
    },
    line: {
        borderColor: "white",
    },
    totaltext: {
        display: "flex",
        flexDirection: "column"
    },
    imageofhouse: {
        marginTop: 10,
        backgroundColor: "#4BB7DD",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    card: {
        width: '48%',
        height: 250,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '90%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    cardText: {
        backgroundColor: "green",
        padding: 5,
        fontSize: 16,
        textAlign: 'center',
    },
    applynow: {
        color: "blue",
        fontSize: 20,
        fontWeight: "700",
        borderColor: 'blue',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    apply: {
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },
    text: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "larger",
        color: "blue",
        marginTop: 10
    },
    btn: {
        display: "flex",
        justifyContent: "center",
        height: 50,
        width: 100,
        color: "blue"
    },
    topimage: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    }
    , textcontainer: {
        marginTop: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }
})
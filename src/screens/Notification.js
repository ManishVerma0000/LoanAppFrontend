import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, ScrollView, } from "react-native";
import Footer from "./Footer";



export default function Notofication(props) {

    return (
        <ScrollView style={styles.container} >
            <View style={styles.containerfirst}>
                <View>
                    <Image source={require("../../assets/next.png")}></Image>
                </View>

                {/* <Text style={{ marginTop: 15, color: "blue", fontWeight: "bold", fontSize: 18 }}>HOME LOAN APPLICATION</Text> */}

                <View>
                    <Image source={require("../../assets/face.png")}></Image>
                </View>

            </View>
            <View>

                <View style={styles.card1}>
                    <View style={styles.header1}>
                        <Text style={styles.titleaccept}> Title: Application Approved
                        </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.paragraph1}>
                            We Are Happy to inform you that your loan
                            application was Approved .Our team member will call you for asking your bank details
                        </Text>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>12/01/2023</Text>
                        </View>

                    </View>
                </View>
            </View>
            <View >

                <View style={styles.card1}>
                    <View style={styles.header1}>
                        <Text style={styles.titleaccept}> Title: Application Approved</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.paragraph1}>
                            We Are Happy to inform you that your loan
                            application was Approved .Our team member will call you for asking your bank details
                        </Text>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>12/01/2023</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View >

                <View style={styles.card1}>
                    <View style={styles.header1}>
                        <Text style={styles.titleaccept}> Title: Application Approved</Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.paragraph1}>
                            We Are Happy to inform you that your loan
                            application was Approved .Our team member will call you for asking your bank details
                        </Text>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>12/01/2023</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View>

                <View style={styles.card1}>
                    <View style={styles.header1}>
                        <Text style={styles.titlereject}> Title: Application Rejected </Text>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.paragraph1}>
                            We Are Happy to inform you that your loan
                            application was Approved .Our team member will call you for asking your bank details
                        </Text>
                        <View style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                            <Text style={{ fontSize: 16, fontWeight: "bold" }}>12/01/2023</Text>
                        </View>
                    </View>
                </View>
            </View>





        </ScrollView>

    )
}



const styles = StyleSheet.create({
    titlereject: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'red'
    },

    titleaccept: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue'

    },
    card1: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    header1: {
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingBottom: 8,
        marginBottom: 8,
    },
    title1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    paragraph1: {
        fontSize: 16,
        padding: 15
    },



    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f4f4'
    },
    container: {
        flex: 1,
        backgroundColor: "white"
    },
    innercontainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    containerfirst: {


        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    containerfourth: {
        flex: 1,
        backgroundColor: "red",
        marginTop: 20
    },
    containersecond: {
        flex: 1,

    },
    containerthird: {


        flex: 1,
        marginTop: 60,
        padding: 30,
    }

})
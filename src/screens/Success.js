import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, } from "react-native";
import Footer from "./Footer";



export default function Success() {
    return (
        <View style={styles.container} >
            <View style={styles.containerfirst}>
                <View>
                    <Image source={require("../../assets/next.png")}></Image>
                </View>

                <Text style={{ marginTop: 15, color: "blue", fontWeight: "bold" }}>HOME LOAN APPLICATION</Text>


                <View>
                    <Image source={require("../../assets/next.png")}></Image>
                </View>
            </View>
            <View style={styles.containersecond}>
                <View style={styles.innercontainer}>
                    <Text>
                        YOUR Application is accepted
                        YOUR Application is accepted
                        YOUR Application is accepted
                        YOUR Application is accepted
                    </Text>
                </View>
            </View>
            <View style={styles.containerthird}>
                <Button title="click Here"></Button>
            </View>

            <Footer />


        </View>

    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innercontainer: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    },

    containerfirst: {
        margin: 20,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"

        //  backgroundColor: "green",



    },
    containerfourth: {
        flex: 1,
        backgroundColor: "red",
        marginTop: 20
    },
    containersecond: {
        flex: 1,
        //  backgroundColor: "red"
    },
    containerthird: {
        flex: 1,
        // backgroundColor: "yellow",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }

})
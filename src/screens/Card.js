import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';
import Footer from './Footer';
const Card = () => {
    return (
        <View>
            <ScrollView>
                <View style={styles.cardContainer}>
                    <View style={styles.containertopfirst}>
                        <View style={styles.twoimages}>
                            <Image source={require("../../assets/NextButton1.png")}></Image>
                            <Image source={require("../../assets/NextButton1.png")}></Image>
                        </View>
                        <View style={styles.imagesingle}>
                            <Image source={require("../../assets/Frame92.png")}></Image>
                            <Text style={{ color: "blue", fontWeight: "bold", }}>Easy Fast And quick loan Process</Text>
                        </View>
                        <View style={styles.tagofbtn}>
                            <Button title='click HERE' style={styles.btnclick}></Button>
                        </View>
                    </View>
                    <View style={styles.containertopsecond}>
                        <View style={styles.home}>
                            <View style={styles.imagediv}>
                                <Image source={require("../../assets/SingleHosueon.png")}></Image>
                            </View>

                            <View style={styles.textintheimage}>
                                <Text>
                                    We Can
                                </Text>
                                <Text>
                                    Add you to
                                </Text>
                                <Text>
                                    your HOME
                                </Text>
                            </View>
                        </View>
                        <View style={styles.footerofdiv}>
                            <Text style={{ margin: 10, color: "black", fontWeight: "bold" }}>www.codexgy.com</Text>
                            <Text style={{ margin: 10, color: "blue", fontWeight: "bold" }}>+9199999999</Text>
                        </View>
                    </View>
                    <View>
                    </View>
                    <View style={styles.thirdsection}>

                        <View style={styles.container}>
                            {/* First pair of cards */}
                            <View style={styles.cardRow}>
                                <Card1 />
                                <Card1 />
                            </View>

                            {/* Second pair of cards */}
                            <View style={styles.cardRow}>
                                <Card1 />
                                <Card1 />
                            </View>
                        </View>


                    </View>

                </View >
            </ScrollView>
            <Footer />
        </View>
    );
};

const Card1 = () => {
    return (
        <View style={styles.card}>
            <Image source={require('../../assets/image1.png')} style={styles.cardImage} />
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>Card Title</Text>
                <Text style={styles.cardDescription}>This is the card description.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        width: '48%', // Adjust the width as per your desired layout
    },
    cardImage: {
        width: '100%',
        height: 150,
        borderRadius: 8,
        marginBottom: 8,
    },
    cardContent: {},
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    cardDescription: {
        fontSize: 16,
        color: '#666',
    },
    thirdsection: {
        flex: 1,

    },
    footerofdiv: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row"

    },
    imagediv: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textintheimage: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5
    },
    home: {
        display: "flex",
        flexDirection: "row",
        margin: 20


    },
    containertopthird: {
        flex: 1
    },
    tagofbtn: {
        padding: 40
    },
    btnclick: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    imagesingle: {

        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },
    containertopfirst: {
        flex: 1
    },
    twoimages: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"


    },
    containertopsecond: {
        flex: 1,
        marginTop: 30,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "column"




    },

    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 16,

        shadowColor: '#000',
        flex: 1,
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    containerfirst: {
        flex: 1
    }

});

export default Card;

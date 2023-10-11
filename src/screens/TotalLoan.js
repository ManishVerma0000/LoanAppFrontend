import React from "react";
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

export function TotalLoan(props) {
    const sendToTheNextPage = () => {
        props.navigation.navigate("Application");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.topImage}>
                {/* <Image source={require("../../assets/nextbtn.png")} style={styles.nextBtn} /> */}
                <Image source={require("../../assets/face.png")} style={styles.faceIcon} />
            </View>
            <Image source={require("../../assets/Frame92.png")} style={styles.textContainer} />
            <Text style={styles.heading}>Easy, Fast & Quick Loan Process</Text>
            <TouchableOpacity style={styles.applyButton} onPress={sendToTheNextPage}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
            </TouchableOpacity>
            <Text style={styles.loanTypeHeading}>Types of Loan</Text>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image
                        source={require("../../assets/image1.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.upto}>
                        <Text style={styles.loanType}>Home Loan</Text>
                        <Text>
                            Up to{" "}
                            <Text style={styles.amount} onPress={sendToTheNextPage}>
                                20 lakhs
                            </Text>{" "}
                        </Text>
                        <Text>6% interest</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../assets/image8.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.upto}>
                        <Text style={styles.loanType}>Student Loan</Text>
                        <Text>
                            Up to{" "}
                            <Text style={styles.amount} onPress={sendToTheNextPage}>
                                20 lakhs
                            </Text>{" "}
                        </Text>
                        <Text>6% interest</Text>
                    </View>
                </View>
            </View>
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Image
                        source={require("../../assets/image1.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.upto}>
                        <Text style={styles.loanType}>Home Loan</Text>
                        <Text>
                            Up to{" "}
                            <Text style={styles.amount} onPress={sendToTheNextPage}>
                                20 lakhs
                            </Text>{" "}
                        </Text>
                        <Text>6% interest</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <Image
                        source={require("../../assets/image8.png")}
                        style={styles.image}
                        resizeMode="cover"
                    />
                    <View style={styles.upto}>
                        <Text style={styles.loanType}>Student Loan</Text>
                        <Text>
                            Up to{" "}
                            <Text style={styles.amount} onPress={sendToTheNextPage}>
                                20 lakhs
                            </Text>{" "}
                        </Text>
                        <Text>6% interest</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    topImage: {
        width: "100%",
        height: 200,
    },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    topImage: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        marginTop: 20,
    },
    nextBtn: {
        width: 40,
        height: 40,
    },
    faceIcon: {
        width: 40,
        height: 40,
    },
    textContainer: {
        marginVertical: 20,
        alignSelf: "center",
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    },
    applyButton: {
        backgroundColor: "blue",
        width: "50%",
        height: 50,
        borderRadius: 5,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20,
    },
    applyButtonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 18,
    },
    loanTypeHeading: {
        fontSize: 20,
        fontWeight: "700",
        marginLeft: 20,
        marginVertical: 10,
    },
    cardContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
    },
    card: {
        width: "48%",
        height: 250,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: "90%",
        height: "60%",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    upto: {
        padding: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    loanType: {
        fontWeight: "700",
        fontSize: 18,
    },
    amount: {
        color: "darkblue",
        fontWeight: "700",
    },
});

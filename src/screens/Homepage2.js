import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomePage2(props) {
    const leftsidefunction = () => {
        props.navigation.navigate("Home")
    }
    const rightsidefunction = () => {
        props.navigation.navigate("Home3")
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/one.png')}></Image>
                    <TouchableOpacity style={styles.skipsection}>
                        <Text style={styles.textforskip} onPress={rightsidefunction}> Skip</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.midsectionpart}>
                        <Image source={require('../../assets/g10.png')}></Image>

                    </View>

                </View>

            </View>
            <View style={styles.textmoney}>
                <Text style={styles.text2}>
                    Easy & Transparent Loan Process
                </Text>

            </View>

            <View style={styles.lowertext}>
                <Text style={styles.lowertext}>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You? Need Money?
                </Text>
            </View>

            <View style={styles.twoimages}>
                <View>
                    <TouchableOpacity onPress={leftsidefunction}>
                        <Image source={require("../../assets/leftsidebutton.png")}></Image>
                    </TouchableOpacity>

                </View>
                <View>
                    <TouchableOpacity onPress={rightsidefunction}>
                        <Image source={require("../../assets/bluenextbutton.png")}></Image>

                    </TouchableOpacity>


                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    twoimages: {
        margin: 40,
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text2: {
        color: "black",
        fontWeight: "bold",
        fontSize: 20,

    },
    lowertext: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 30,
        fontSize: 15,
    },
    textmoney: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 24
    },
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    uppersectionpart: {

        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-evenly',
    },
    skipsection: {
        display: "flex",
        marginLeft: 50
    },
    skipsection: {
        display: "flex",
        marginLeft: 50
    },
    textforskip: {
        margin: 10
    },
    textforskip: {
        margin: 10,
        color: "blue",
        borderBottomWidth: 2,
        borderColor: "blue",
        fontSize: 20,
        fontWeight: "600"
    },
    midsectionpart: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }
});



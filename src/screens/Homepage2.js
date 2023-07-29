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
                    <View style={styles.skipsection}>
                        <Text style={styles.textforskip}> Skip</Text>
                    </View>
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
                <Text>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You?
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
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
    },
    text2: {
        color: "black",
        fontWeight: "bold",

    },
    lowertext: {

        justifyContent: "center",
        alignItems: "center",
        padding: 30

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
        marginTop: 20,
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
    textforskip: {
        margin: 10
    },
    midsectionpart: {
        marginTop: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"

    }
});



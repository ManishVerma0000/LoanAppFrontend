import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native';

export default function HomePage3(props) {
    const getstarted = () => {
        props.navigation.navigate('Login')
    }
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.uppersectionpart}>
                    <Image source={require('../../assets/one.png')}></Image>
                    <TouchableOpacity style={styles.skipsection}>
                        <Text style={styles.textforskip} onPress={getstarted}> Skip</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <View style={styles.midsectionpart}>
                        <Image source={require('../../assets/image3.png')} style={{ height: 250 }} ></Image>
                    </View>
                </View>

            </View>
            <View style={styles.textmoney}>
                <Text style={styles.need}>
                    Loan Approval In 48 Hrs.
                </Text>

            </View>

            <View style={styles.lowertext}>
                <Text style={{
                    padding: 20, fontSize: 15,

                }}>
                    Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You? Need Money? We Heard You?
                </Text>
            </View>
            <StatusBar style="auto" />
            <View style={styles.buttonpressme}>
                < Button title='Get Started' onPress={getstarted}></Button>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: "blue",
        width: 100,
        height: 50,
        fontWeight: "bold"
    },
    buttonpressme: {
        backgroundColor: "white",

        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text2: {
        color: "black",
        fontWeight: "bold"
    },
    lowertext: {

        justifyContent: "center",
        alignItems: "center",
        padding: 30

    },
    need: {
        fontSize: 20,
        fontWeight: "600"
    },
    textmoney: {
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
        fontWeight: 'bold',

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
    textforskip: {
        color: "blue",
        borderBottomWidth: 2,
        borderColor: "blue",
        fontSize: 20,
        fontWeight: "600"
    },
    midsectionpart: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20

    }
});



import React from 'react';
import { View, Text, StyleSheet, Image, Button, ScrollView } from 'react-native';

export default function DashBoard(props) {
    const settothenextpage = () => {
        props.navigation.navigate('Home')
    }
    return (
        <View>
            <View style={styles.topcontainer}>
            </View>
            <View>
                {/* <View style={styles.card}>
                    <View style={styles.cardContent}>
                        
                    </View>
                </View> */}
                <Image source={require('../../assets/one.png')}></Image>
            </View>

            <View style={styles.bottomcontainer}>
                <Button title='NEXT PAGE' onPress={settothenextpage}></Button>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
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
    topcontainer: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center"
    }

    ,
    bottomcontainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }


})
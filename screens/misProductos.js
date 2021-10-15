import React from 'react';
import { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import AddButton from '../components/addButton';
import SkipButton from '../components/skipButton';


const MyProducts = ({ navigation }) => {
    const [listOfProd, setListOfProd] = useState([]);
    const mensaje = "Omitir"
    return (
        <SafeAreaView style={styles.container}>
            <Text>Mis productos</Text>
            <AddButton navigation={navigation} />
            <SkipButton navigation={navigation} mensaje={mensaje} onPress={() => { navigation.navigate('Info') }} />
            <Text></Text>
        </SafeAreaView>


    )

}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'flex-start',
        fontFamily: "TT Norms",
    },
    info: {
        padding: 15,
    },
    boton: {
        backgroundColor: "rgba(131, 131, 131, 1)",
        height: 50,
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,

    },
    botonC: {

        borderWidth: 3,
        borderColor: "rgba(131, 131, 131, 1)",
        height: 50,
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 30,
        borderRadius: 50,

    },
    input: {
        height: 40,
        margin: 12,
        borderBottomWidth: 1,
        borderColor: 'grey',
        padding: 10,
    },
    logo: {
        alignItems: 'center',
        marginTop: 20,
    },
    tinyLogo: {

        width: 200,
        height: 250,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    mainText: {
        marginTop: 50,

        fontSize: 44,
        fontWeight: "bold",
        color: "rgba(46, 48, 52, 1)"
    },
    footer: {
        fontSize: 14,
        padding: 10
    },




});

export default MyProducts
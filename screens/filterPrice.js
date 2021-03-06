import React from 'react';
import { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';
import RangeSlider from "../components/RangeSlider";
import axios from 'axios'
import Server from '../serverData'

const FilterPrice = ({ navigation, route }) => {
    const { search, filtroUbicacion, filtroPrecioMax, filtroPrecioMin } = route.params

    // const [max, setMax] = useState('');

    // useEffect(() => {

    //     const fetchMax = async () => {
    //         const { data } = await axios(Server + "/readMaxP")
    //         if (data !== "empty") {
    //             let Max = Object.values(data)
    //             setMax(Max)
    //         } else {
    //             Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
    //             navigation.navigate("Home")
    //         }
    //     }
    //     fetchMax()
    // }, []);

    return (

        <SafeAreaView style={styles.container}>

            <View style={styles.slider}>
                <RangeSlider from={0} to={10000} navigation={navigation} route={route} />
            </View>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        alignItems: 'center',
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'flex-start',
        fontFamily: "TT Norms",
    },
    boton: {
        backgroundColor: colors.blueUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: 8,
        borderRadius: 50,
        position: 'absolute',
        top: "90%",
    },
    cajaPrecios: {
        width: 342,
        height: 119,
        borderRadius: 10,
        backgroundColor: colors.whiteButtons,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20%",

    },
    text: {
        fontWeight: "bold",
        color: colors.blackText,
        fontSize: 36,
    },
    textPromedio: {
        fontWeight: "bold",
        color: colors.greyText,
        fontSize: 14,
    },
    slider: {
        width: "90%",
        marginTop: "50%",
    },
});

export default FilterPrice
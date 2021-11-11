import React from 'react';
import { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, SafeAreaView, View, Text, Alert, Image, ViewBase } from 'react-native';
import colors from '../assets/colors/colors';
import UserData from '../userData'

const FilterSelection = ({ navigation, route }) => {

    const { search, filtroUbicacion, filtroPrecioMax, filtroPrecioMin } = route.params

    // useEffect(() => {
    //     navigation.setOptions({
    //       title: titulo,
    //     });
    //   }, []);

    return (

        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.botonFiltro}
                onPress={() => navigation.navigate("Rango de pago", { search: search, filtroPrecioMax: filtroPrecioMax, filtroPrecioMin: filtroPrecioMin, filtroUbicacion: filtroUbicacion })} >
                <Image
                    style={styles.moneyFilterIcon}
                    source={require('../assets/img/moneyIcon.png')}
                />
                <Text style={styles.filterButtonText}>
                    Rango de pago
                </Text>
                <Image
                    style={styles.filterArrow}
                    source={require('../assets/img/rightArrow.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.botonFiltro}
                onPress={() => navigation.navigate("Ubicación", { search: search, filtroPrecioMax: filtroPrecioMax, filtroPrecioMin: filtroPrecioMin, filtroUbicacion: filtroUbicacion })} >
                <Image
                    style={styles.locationFilterIcon}
                    source={require('../assets/img/locationIcon.png')}
                />
                <Text style={styles.filterButtonText}>
                    Ubicación
                </Text>
                <Image
                    style={styles.filterArrow}
                    source={require('../assets/img/rightArrow.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={UserData.rol._W == "comprador" ? styles.botonComprador : styles.botonVendedor}
                onPress={() => navigation.push("Búsqueda", { search: search, filtroPrecioMax: filtroPrecioMax, filtroPrecioMin: filtroPrecioMin, filtroUbicacion: filtroUbicacion })} >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    Listo
                </Text>
            </TouchableOpacity>
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
    botonComprador: {
        backgroundColor: colors.orangeUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: "100%",
        borderRadius: 50,
    },
    botonVendedor: {
        backgroundColor: colors.blueUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginTop: "100%",
        borderRadius: 50,
    },
    botonFiltro: {
        height: 68,
        width: "110%",
        backgroundColor: colors.whiteButtons,
        marginVertical: 10,
        alignItems: "center",
        flexDirection: "row",
    },
    filterButtonText: {
        width: 102,
        height: 19,
        fontWeight: "bold",
        fontSize: 14,
        color: colors.blackText,
    },
    moneyFilterIcon: {
        width: 28,
        height: 17,
        marginRight: 10,
        marginLeft: 20
    },
    locationFilterIcon: {
        width: 14,
        height: 19,
        marginRight: 18,
        marginLeft: 28,
    },
    filterArrow: {
        width: 8,
        height: 13,
        marginLeft: "50%",

    },
});

export default FilterSelection
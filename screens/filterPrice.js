import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TouchableOpacity } from 'react-native';
import colors from '../assets/colors/colors';

const FilterPrice = ({ navigation }) => {

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.cajaPrecios}>
                <Text style={styles.text}>
                    ₡950 - ₡10 000
                </Text>
                <Text style={styles.textPromedio}>
                    Precio promedio ₡4 525
                </Text>
            </View>
            <TouchableOpacity
                style={styles.boton}
                onPress={() => navigation.navigate("Búsqueda")} >
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
});

export default FilterPrice
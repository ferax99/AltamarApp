import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors"
import { useNavigation } from '@react-navigation/native';

const ItemBusqueda = ({ producto }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.contenedor} key={producto._id} onPress={() => navigation.navigate('Producto')}>
            <Image style={styles.pez} source={{ uri: "https://www3.gobiernodecanarias.org/medusa/mediateca/ecoescuela/wp-content/uploads/sites/2/2013/11/35-Sardina.png" }} />
            <Text style={styles.tipo}>
                {producto.tipo}
            </Text>
            <Text style={styles.localizacion}>
                {producto.localizacion}
            </Text>
            <Text style={styles.precio}>
                ₡{producto.precio} x kilo
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        justifyContent: "center",
        alignContent: "center",
        width: 141,
        height: 162,
        margin: 20,
        backgroundColor: colors.whiteButtons,
        borderRadius: 6,
        flexDirection: "column",
        flexWrap: "wrap",
        elevation: 5
    },
    tipo: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 14
    },
    localizacion: {
        alignSelf: "center",
        color: colors.greyText,
        fontSize: 10
    },
    precio: {
        marginTop: 10,
        alignSelf: "center",
        color: colors.greyText,
        fontSize: 10
    },
    pez: {
        width: 96,
        height: 39, resizeMode: "contain",
        alignSelf: "center",
    }

})
export default ItemBusqueda
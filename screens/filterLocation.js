import React from 'react';
import { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, View, Image, TextInput } from 'react-native';
import colors from '../assets/colors/colors';

const FilterLocation = ({ navigation, route }) => {
    const { search, filtroUbicacion, filtroPrecioMax, filtroPrecioMin } = route.params

    const [ubicacion, setUbicacion] = useState('')
    var ValueUbicacion = ubicacion;

    return (

        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    style={styles.search}
                    value={ubicacion}
                    placeholder="¿De dónde quieres el producto?"
                    onChangeText={(ubicacion) => setUbicacion(ubicacion)}
                    onSubmitEditing={() => navigation.push('Filtros', { filtroUbicacion: ValueUbicacion, search: search, filtroPrecioMax: filtroPrecioMax, filtroPrecioMin: filtroPrecioMin })}
                />
                <Image style={styles.ima} source={require('../assets/img/search-icon.png')} />
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
    search: {
        marginBottom: 22,
        marginTop: 17,
        height: 40,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 48,
        paddingLeft: 20,
        marginLeft: 32,

    },
    ima: {
        width: 15,
        height: 15,
        marginRight: 20,
        marginTop: 30,
        right: "45%",
    },
    row: {
        flexDirection: "row",
    },
});

export default FilterLocation
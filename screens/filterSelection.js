import React from 'react';
import { TouchableOpacity, StyleSheet, SafeAreaView, View, Text, Alert, Image, ViewBase } from 'react-native';
import colors from '../assets/colors/colors';

const FilterSelection = ({ navigation }) => {
    return (

        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.botonFiltro}
                onPress={() => navigation.navigate("Rango de pago")} >
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
                onPress={() => navigation.navigate("Ubicación")} >
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
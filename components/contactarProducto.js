import React from "react"
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from "react-native"
import Clipboard from '@react-native-community/clipboard';
import { useState, useEffect } from "react/cjs/react.development";
import colors from "../assets/colors/colors"
import UserData from "../userData"
import Server from "../serverData"
import { Linking } from 'react-native'
const ContactarProducto = ({ navigation }) => {
    const [redes, setRedes] = useState([]);
    useEffect(() => {
        fetchRedes();

        return () => {

        }
    }, [])

    const fetchRedes = () => {
        const api = Server + "/readRedes/" + UserData.telefono;
        //console.log(api)
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                //iterableResponse.map(item => console.log(item));
                setRedes(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }
    const copiar = () => {
        Alert.alert('¡UY!', 'Debes crear el contacto y buscarlo en telegram', [{ text: 'OK' }]);
        Linking.openURL(`tel:${UserData.telefono}`)
    }
    const mostrarMetodos = () => {
        return (
            <View>
                {((redes.map(red => red[0].simpe === "" ? false : true).pop())) &&
                    <Image style={styles.iconPago} source={require("../assets/img/sinpe.png")} />
                }
            </View>


        )
    }
    const mostrarContactos = () => {
        console.log(redes.map(red => red[0].telegram === "" ? false : true).pop())
        return (
            <View style={styles.contenedor}>
                {((redes.map(red => red[0].whatsapp === "" ? false : true).pop())) &&
                    <TouchableOpacity onPress={() => Linking.openURL('whatsapp://send?&phone=506' + UserData.telefono)}>
                        <Image style={styles.icon} source={require("../assets/img/iwhatsapp.png")} />
                    </TouchableOpacity>}

                {((redes.map(red => red[0].telegram === "" ? false : true).pop())) &&
                    <TouchableOpacity onPress={() => copiar()}>
                        <Image style={styles.icon} source={require("../assets/img/itelegram.png")} />
                    </TouchableOpacity>}

                <TouchableOpacity onPress={() => Linking.openURL(`tel:${UserData.telefono}`)}>
                    <Image style={styles.icon} source={require("../assets/img/llamar.png")} />
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <View style={styles.general}>
            <Text style={styles.tituloPago}>
                Métodos de Pago
            </Text>
            <View style={styles.contenedor}>
                <Image style={styles.iconPago} source={require("../assets/img/efectivo.png")} />
                {mostrarMetodos()}
            </View>
            <Text style={styles.titulo}>
                Contactar
            </Text>
            {mostrarContactos()}
        </View>
    )
}
const styles = StyleSheet.create({
    general: {
        backgroundColor: colors.whiteButtons,
    },
    contenedor: {
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: colors.whiteButtons,
        marginLeft: 56,
        marginBottom: 20
    },
    titulo: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 57,
        marginBottom: 10,
    },
    tituloPago: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 57,
        marginBottom: 10,
        marginTop: 20
    },
    icon: {
        marginRight: 20,
        width: 51,
        height: 53,
        resizeMode: "contain"
    },
    iconPago: {
        marginRight: 20,
        width: 52,
        height: 36,
        resizeMode: "contain"
    }

})
export default ContactarProducto
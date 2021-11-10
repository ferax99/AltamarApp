import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import colors from "../assets/colors/colors";

const UserInfo = () => {
    return (
        <View style={styles.contenedor}>
            <View style={styles.conNombre}>
                <View >
                    <Text style={styles.nombre}>
                        Marta
                    </Text>
                    <Text style={styles.apellido}>
                        Porras
                    </Text>
                </View>
                <Image style={styles.favorito} source={require("../assets/img/fav.png")} />

            </View>

            <View style={styles.detalles}>
                <Image style={styles.iconUbicacion} source={require("../assets/img/ubicacion.png")} />
                <Text style={styles.detalleUbicacion}>
                    Desaparados, San José
                </Text>
            </View>
            {/* <View style={styles.detallesTelefono}>
                <Image style={styles.iconTelefono} source={require("../assets/img/telefono.png")} />
                <Text style={styles.detalleTelefono}>
                    8737 1397
                </Text>
            </View> */}

        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 15,
        backgroundColor: colors.orangeUI
    },
    conNombre: {
        flexDirection: "row",
        justifyContent:"space-between",
        marginRight:50,
        alignItems:"center"
    },
    nombre: {
        fontWeight: "bold",
        color: colors.whiteButtons,
        fontSize: 36,
        marginLeft: 54,
        marginTop: 18,

    },
    nombres: {
        fontWeight: "bold",
        color: colors.whiteButtons,
        fontSize: 36,
        marginLeft: 54,
        marginTop: 18,


    },
    apellido: {
        fontWeight: "bold",
        marginTop: -10,
        color: colors.whiteButtons,
        fontSize: 36,
        marginLeft: 54,

    },
    detalles: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 55,
        marginTop: 2,
        marginBottom: 25
    },
    detalleUbicacion: {
        fontWeight: "bold",
        color: colors.whiteButtons,
        fontSize: 16,
        marginLeft: 7,
    },
    detalleTelefono: {
        fontWeight: "bold",
        color: colors.whiteButtons,
        marginLeft: 7,
        fontSize: 16,
    },
    iconUbicacion: {
        width: 12,
        height: 15,
        resizeMode: "contain"
    },
    iconTelefono: {
        width: 12,
        height: 15,
        resizeMode: "contain"

    },
    favorito: {
        width: 52,
        height: 43,
        resizeMode: "contain"

    },
    detallesTelefono: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 19,
        marginLeft: 55,
    }

})
export default UserInfo
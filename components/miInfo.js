import { useState, useEffect } from "react";
import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import colors from "../assets/colors/colors";
import UserData from "../userData"
import Axios from "axios"
import Server from "../serverData"
import Frecuentes from "../components/frecuentes"


const MiInfo = ({ navigation }) => {
    const [datos, setDatos] = useState({});
    const [lista, setLista] = useState([]);

    useEffect(() => {


        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
            fetchUsr()

        });
        return unsubscribe;


    }, [])
    const fetchUsr = () => {
        Axios.get(Server + "/getUsuario/" + UserData.telefono._W
        ).then((response) => {
            if (response.data != "False") {
                setDatos(response.data)
                var x = response.data.nombre.split(" ")
                setLista(x)
            }
            else {
                console.log("Error al guardar usuario");

            }
        }).catch(() => {
            console.log("Error al guardar usuario");

        });
    }
    return (
        <View>
        <View style={styles.contenedor}>
            <View style={styles.conNombre}>
                <View >
                    <Text style={styles.nombre}>
                        {lista[0]}
                    </Text>
                    <Text style={styles.apellido}>
                        {lista[1]}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate("Editar Perfil")}>
                    <Image style={styles.editar} source={require("../assets/img/engrane.png")} />

                </TouchableOpacity>

            </View>

            <View style={styles.detalles}>
                <Image style={styles.iconUbicacion} source={require("../assets/img/ubicacion.png")} />
                <Text style={styles.detalleUbicacion}>
                    {datos.ubicacion}
                </Text>
            </View>
            <View style={styles.detallesTelefono}>
                <Image style={styles.iconTelefono} source={require("../assets/img/telefono.png")} />
                <Text style={styles.detalleTelefono}>
                    {datos.telefono}
                </Text>
            </View>


        </View>
            
        <ScrollView>

        <Frecuentes />
</ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        marginBottom: 15,
        backgroundColor: UserData.color._W
    },
    conNombre: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 50,
        alignItems: "center"
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
    editar: {
        width: 30,
        height: 30,
        resizeMode: "contain"

    },
    detallesTelefono: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 19,
        marginLeft: 55,
        marginTop: -20
    }

})
export default MiInfo
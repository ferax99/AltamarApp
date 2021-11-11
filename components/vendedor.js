import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors"
import UserData from "../userData";
import Server from "../serverData"
import Axios from 'axios'
import ContactarProducto from "./contactarProducto";
const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png";

const Vendedor = ({ navigation, vendedor }) => {

    const nombre = vendedor[2].split(" ")
    const [listo, setListo] = useState(0);
    const [esFav, setEsFav] = useState(0);

    useEffect(() => {
        isFav();
        setListo(1)


        return () => {
        }
    }, []);
    const isFav = () => {
        Axios.post(Server + "/getFavContacto", { id: vendedor[0], telefono: UserData.telefono._W }
        ).then((response) => {

            if (response.data == true) {
                setEsFav(1)
            }
        }).catch(() => {
            console.log("ERROR");

        });
    }
    const marcarFav = () => {
        setEsFav(1)

        Axios.post(Server + "/InsertaFav", { favorito: vendedor[0], telefono: UserData.telefono._W }
        ).then((response) => {
            // console.log(response.data)
        }).catch(() => {
            console.log("ERROR");
        });
    }
    const marcarNoFav = () => {
        setEsFav(0);

        Axios.delete(Server + "/deleteFavContacto", { data: { favorito: vendedor[0], telefono: UserData.telefono._W } }
        ).then((response) => {
            //console.log(response.data)
        }).catch(() => {
            console.log("ERROR");
        });

    }
    const toggle = () => {
        if (esFav == 0) {
            marcarFav();
        }
        else {
            marcarNoFav();
        }
    }
    return (
        <View style={styles.contenedor}>
            <View style={styles.conNombre}>
                <View >
                    <Text style={styles.nombre}>
                        {nombre[0]}
                    </Text>
                    <Text style={styles.apellido}>
                        {nombre[1]}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => toggle()}>
                    <Image style={esFav == 1 ? styles.fav : styles.nofav} source={require("../assets/img/favGris.png")} />
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil', { vendedor: vendedor })}>

                <Image style={UserData.rol._W == "comprador" ? styles.botonComprador : styles.botonVendedor} source={require("../assets/img/botonCatalogo.png")} />
            </TouchableOpacity>
            <ContactarProducto vendedor={vendedor} />
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: colors.whiteButtons,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: "60%"
    },
    conNombre: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: 50,
        alignItems: "center"
    },
    nombre: {
        fontWeight: "bold",
        color: colors.blackText,
        fontSize: 36,
        marginLeft: 54,
        marginTop: 18,

    },
    nombres: {
        fontWeight: "bold",
        color: colors.blackText,
        fontSize: 36,
        marginLeft: 20,
        marginTop: 18,


    },
    apellido: {
        fontWeight: "bold",
        marginTop: -10,
        color: colors.blackText,
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
    botonComprador: {
        width: 123,
        height: 29,
        resizeMode: "contain",
        marginLeft: 50,
        marginTop: 10,
        tintColor: colors.orangeUI,

    }, botonVendedor: {
        width: 123,
        height: 29,
        resizeMode: "contain",
        marginLeft: 50,
        marginTop: 10,
        tintColor: colors.blueUI,

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
    },
    fav: {
        width: 52,
        height: 43,
        resizeMode: "contain",
        tintColor: "#ffd700",
    },
    nofav: {
        width: 52,
        height: 43,
        resizeMode: "contain",
        tintColor: colors.greyText,
    },


})
export default Vendedor
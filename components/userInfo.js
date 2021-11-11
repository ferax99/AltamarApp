import React, {useState, useEffect} from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../assets/colors/colors";
import Axios from "axios";
import Server from "../serverData"
import UserData from "../userData";

const UserInfo = ({ vendedor }) => {
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
                <TouchableOpacity onPress={() => { toggle() }}  >
                    <Image style={esFav == 1 ? styles.fav : styles.nofav} source={require("../assets/img/fav.png")} />
                </TouchableOpacity>

            </View>

            <View style={styles.detalles}>
                <Image style={styles.iconUbicacion} source={require("../assets/img/ubicacion.png")} />
                <Text style={styles.detalleUbicacion}>
                    {vendedor[3]}
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
    favorito: {
        width: 52,
        height: 43,
        resizeMode: "contain"

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
    detallesTelefono: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 19,
        marginLeft: 55,
    }

})
export default UserInfo
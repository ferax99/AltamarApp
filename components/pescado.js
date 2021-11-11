import React, { useState, useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors/colors"
import { TouchableOpacity } from "react-native-gesture-handler";
import UserData from "../userData";
import Axios from "axios"
import Server from "../serverData"
const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png";

const Pescado = ({ navigation, producto, foto, numVendedor }) => {
    const [listo, setListo] = useState(0);
    const [esFav, setEsFav] = useState(0);
    useEffect(() => {
        isFav();
        setListo(1)


        return () => {
        }
    }, []);
    const isFav = () => {
        Axios.post(Server + "/getFavProd", { id: producto._id, telefono: UserData.telefono._W }
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

        Axios.post(Server + "/InsertaFavProd", { favorito: producto._id, telefono: UserData.telefono._W }
        ).then((response) => {
            // console.log(response.data)
        }).catch(() => {
            console.log("ERROR");
        });
    }
    const marcarNoFav = () => {
        setEsFav(0);

        Axios.delete(Server + "/deleteFav", { data: { favorito: producto._id, telefono: UserData.telefono._W } }
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
            <Image style={styles.image} source={{ uri: foto }} />
            <View style={styles.conPez}>
                <View>
                    <Text style={styles.tituloPez}>
                        {producto.tipo}
                    </Text>
                </View>
                <TouchableOpacity onPress={() => { toggle() }}  >
                    <Image style={esFav == 1 ? styles.fav : styles.nofav} source={require("../assets/img/favorito.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.conDetalles}>

                <Text style={styles.detalles}>
                    {producto.localizacion}
                </Text>
                <Text style={styles.detalles}>
                    ₡{producto.precio} x kilo
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        height: "40%"
    },
    conPez: {
        flexDirection: "row",
        justifyContent: "space-evenly"
    },
    image: {
        width: 274,
        height: 122,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 25
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
    tituloPez: {
        width: 209,
        height: "auto",
        fontWeight: "bold",
        fontSize: 30,
    },
    conDetalles: {
        marginLeft: 48
    },
    detalles: {
        color: colors.greyText,
    },
})
export default Pescado
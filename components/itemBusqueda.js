import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../assets/colors/colors"
import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
import Server from "../serverData"
import { TouchableOpacity } from "react-native-gesture-handler";

const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png";

const ItemBusqueda = ({ producto }) => {
    const navigation = useNavigation();
    const [foto, setFoto] = useState(sinConexion);
    const [numVendedor, setNumVendedor] = useState("");

    const [state, setState] = useState({});
    useEffect(() => {
        fetchImg();
        fetchNum()
        return () => {
            setState({});
        }
    }, []);
    const fetchNum = () => {
        Axios.post(Server + "/getVendedorNum/" + producto._id
        ).then((response) => {
            setNumVendedor(response.data);
        }).catch(() => {
            console.log("ERROR");

        });
    }
    const fetchImg = () => {
        Axios.post(Server + "/getFotoPez", { nombre: producto.tipo }
        ).then((response) => {
            if (response.data != "False") {
                setFoto(response.data);
            }
            else {
                setFoto(sinConexion);
            }
        }).catch(() => {
            console.log("ERROR");
            setFoto(sinConexion);

        });
    }
    return (
        <TouchableOpacity style={styles.contenedor} key={producto._id} onPress={() => navigation.navigate('Producto', { producto: producto, foto: foto})}>
            <Image style={styles.pez} source={{ uri: foto }} />
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
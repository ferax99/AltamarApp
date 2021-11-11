import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState, useEffect } from 'react/cjs/react.development';
import Axios from "axios";
import Server from "../serverData";
import userData from '../userData';
import colors from '../assets/colors/colors';
import { useNavigation } from '@react-navigation/native'

const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png";

const ProductoF = ({ id }) => {
    const navigation = useNavigation();
    const [foto, setFoto] = useState(sinConexion);
    const [obid, setObid] = useState('');
    const [state, setState] = useState({});
    const [vendedor, setVendedor] = useState("");
    const [producto, setProducto] = useState("");
    const [mostrar, setMostrar] = useState(0);
    useEffect(() => {

        getPublicacion();
        getVendedor();
        fetchImg();

        return () => {
            setState({});
        }
    }, []);



    const fetchImg = () => {
        Axios.post(Server + "/getFotoPez", { nombre: producto.tipo }
        ).then((response) => {
            if (response.data != "False") {
                return (response.data);
            }
            else {
                return (sinConexion);
            }
        }).catch(() => {
            console.log("ERROR");
            return (sinConexion);

        });
    }
    const getPublicacion = () => {
        // console.log("id: "+id);
        Axios.get(Server + "/getPublicacion/" + id
        ).then((response) => {
            // console.log(response.data.tipo)
            setProducto(response.data);
        }).catch(() => {
            console.log("ERROR de publicacion");
        });
    }

    const getVendedor = () => {
        // console.log("id: "+id);
        Axios.get(Server + "/getVendedorP/" + id
        ).then((response) => {
            if (response.data === "False") {
                setVendedor("Anonimo")
            }
            else {
                setVendedor(response.data)
            }


        }).catch(() => {
            console.log("ERROR de publicacion");

        });
    }

    const marcarNoFav = () => {
        setMostrar(1);
        console.log("borrado")
        Axios.delete(Server + "/deleteFav", { data: { favorito: id, telefono: userData.telefono._W } }
        ).then((response) => {
        }).catch(() => {
            console.log("ERROR");
        });
    }

    return (
        
            <View>
                {(mostrar===0)&&
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Producto', { producto: producto, foto: foto})}>
                <Text style={styles.tipo}>{producto.tipo}</Text>
                <Text style={styles.vendedor}>{vendedor}</Text>
            </TouchableOpacity>
            <View >

                <Image style={styles.ima} source={{ uri: foto }} />

                <View style={styles.row}>
                    <TouchableOpacity style={styles.trash} onPress={() => { marcarNoFav() }} >
                        <Image style={styles.trash} source={require('../assets/img/trash.png')} />
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView> }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        margin: 10,
        borderRadius: 10,
        backgroundColor: colors.whiteButtons,
    },
    ima: {
        width: 80,
        height: 60,
        resizeMode: "contain",
        marginLeft: 4,
        marginTop: -40,
    },

    trash: {
        width: 16,
        height: 22,
        justifyContent: 'flex-end',
        marginTop: -45,
        marginRight: 10,

    },
    row: {
        marginRight: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',

    },
    tipo: {
        color: "#0C1722",
        fontSize: 14,
        marginLeft: 100,
        marginTop: 20,
        fontWeight: "bold",


    },
    vendedor: {
        color: "#838383",
        marginLeft: 100,
    },
});

export default ProductoF;
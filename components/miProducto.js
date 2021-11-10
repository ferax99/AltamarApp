import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState, useEffect } from "react";
import Axios from "axios";
import Server from "../serverData";

const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png" ;
const MiProducto = ({ navigation,datos }) => {
    const [foto, setFoto] = useState(sinConexion);
    const [obid,setObid] =useState('');
    const [state, setState] = useState({});
    useEffect(() => {
        fetchData();
        return () => {
            setState({});
        }
    }, []);

    const fetchData = () => {
        Axios.post(Server + "/getFotoPez", { nombre: datos.tipo }
        ).then((response) => {
            if(response.data!="False"){
            setFoto(response.data);}
            else{
                setFoto(sinConexion);
            }
            //console.log(response.data)
        }).catch(() => {
            console.log("ERROR");
            setFoto(sinConexion);

        });
    }



    
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.tipo}>{datos.tipo}</Text>
            <Text style={styles.vendedor}>₡{datos.precio} x kilo</Text>
            <Text style={styles.vendedor}>{datos.cantidad} kilos</Text>
            <View >

                <Image style={styles.ima} source={{ uri: foto }} />
                {(datos.estado=="vendido")&&
                <Image style={styles.vendido} source={require('../assets/img/vendido.png')} />

                }

                <View style={styles.row}>
                    <TouchableOpacity style={styles.edit}onPress={() => {navigation.navigate('Editor', { datos })}}>
                        <Image style={styles.trash} source={require('../assets/img/edit.png')} />
                    </TouchableOpacity>
                </View>

            </View>

        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        
        margin: 10,
        borderRadius: 10,
        backgroundColor: "white",
    },
    ima: {
        width: 80,
        height: 60,
        resizeMode: "contain",
        marginLeft: 4,
        marginTop: -55,

    },
    vendido: {
        width: 80,
        height: 60,
        resizeMode: "contain",
        left: "65%",
        marginTop: -50,
        
        

    },

    trash: {
        width: 20,
        height: 28,
        resizeMode: "contain",
        justifyContent: 'flex-end',
        marginTop: -46,
        marginRight: 10,

    },
    edit: {
        width: 20,
        height: 23,
        justifyContent: 'flex-end',
        marginTop: -46,
        marginRight: 10,

    },
    row: {
        marginRight: 10,
        flexDirection: "row",
        justifyContent: 'flex-end',

    },
    tipo: {
        marginTop: 10,
        color: "#0C1722",
        fontSize: 19,
        marginLeft: 100,

        fontWeight: "bold",


    },
    vendedor: {
        color: "#838383",
        marginLeft: 100,
        fontSize: 15,
    },
});

export default MiProducto;
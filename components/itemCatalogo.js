import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import { StyleSheet, View, Text, Image } from "react-native";
import colors from "../assets/colors/colors"
import Server from "../serverData"
import Axios from "axios";
import { TouchableOpacity } from "react-native-gesture-handler";

const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png" ;
const ItemCatalogo = ({ producto, navigation, numVendedor}) => {
        //getFotoPez
        const [foto, setFoto] = useState(sinConexion);
        const [state, setState] = useState({});
        useEffect(() => {
            fetchImg();
            return () => {
                setState({});
            }
        }, []);
    
        const fetchImg = () => {
            Axios.post(Server + "/getFotoPez", { nombre:producto.tipo }
            ).then((response) => {
                if(response.data!="False"){
                setFoto(response.data);}
                else{
                    setFoto(sinConexion);
                }
            }).catch(() => {
                console.log("ERROR");
                setFoto(sinConexion);
    
            });
        }
    
        const cargarProducto = () => {
            navigation.navigate('Producto',{
                producto:producto,
                foto:foto,
                numVendedor:numVendedor
            })
            console.log("Me manoseo")
        }
        
    return (
        <TouchableOpacity style={styles.contenedor} key={producto._id} onPress={()=>cargarProducto()}>
            
            <Image style={styles.pez} source={{ uri: foto}} />
            <Text style={styles.tipo}>
                {producto.tipo}
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
    precio: {
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
export default ItemCatalogo
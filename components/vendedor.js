import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors"
import ContactarProducto from "./contactarProducto";
const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png" ;

const Vendedor = ({ navigation, vendedor }) => {
    
 if (vendedor!==undefined) {
     console.log(vendedor)
 }
    return (
        <View style={styles.contenedor}>
            <View style={styles.conNombre}>
                <View >
                    <Text style={styles.nombre}>
                        {/*lista[0]*/}f
                    </Text>
                    <Text style={styles.apellido}>
                        {/*lista[1]*/}f
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Perfil'), { numVendedor: vendedor.telefono }}>
                    <Image style={styles.favorito} source={require("../assets/img/favGris.png")} />
                </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Perfil'), { numVendedor: vendedor.telefono }}>

            <Image style={styles.boton} source={require("../assets/img/botonCatalogo.png")} />
                </TouchableOpacity>
            <ContactarProducto />
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
    boton: {
        width: 123,
        height: 29,
        resizeMode: "contain",
        marginLeft: 50,
        marginTop: 10
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
export default Vendedor
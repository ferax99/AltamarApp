import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import colors from "../assets/colors/colors"

const Pescado = ({navigation, producto, foto}) => {
    return (
        <View style={styles.contenedor}>
            <Image style={styles.image} source={{ uri: foto}} />
            <View style={styles.conPez}>
                <View>
                    <Text style={styles.tituloPez}>
                        {producto.tipo}
                    </Text>
                </View>

                 <TouchableOpacity onPress={() => navigation.navigate('Perfil'), { numVendedor: numVendedor }}>
                    <Image style={styles.favorito} source={require("../assets/img/favGris.png")} />
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
        justifyContent:"space-evenly"
    },
    image: {
        width: 274,
        height: 122,
        resizeMode: "contain",
        alignSelf:"center",
        marginTop: 25
    },
    favorito: {
        width: 52,
        height: 43,
        resizeMode: "contain"
    },
    tituloPez: {
        width: 209,
        height: "auto",
        fontWeight: "bold",
        fontSize: 30,
    },
    conDetalles: {
        marginLeft:48
    },
    detalles:{
        color: colors.greyText,
    },
})
export default Pescado
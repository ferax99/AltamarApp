import React from "react"
import { View } from "react-native"
import Pescado from "../components/pescado"
import Vendedor from "../components/vendedor"

const Producto = ({ route,navigation }) => {
    const {producto, foto, numVendedor}= route.params
    console.log(producto._id)
 
    return (
        <View>
            <Pescado navigation={navigation} route={route} producto={producto} foto={foto}/>
            <Vendedor navigation={navigation} route={route} numVendedor={numVendedor}/>
        </View>
    )
}
export default Producto
import React from "react"
import { View } from "react-native"
import Pescado from "../components/pescado"
import Vendedor from "../components/vendedor"

const Producto = ({ navigation }) => {
    return (
        <View>
            <Pescado />
            <Vendedor />
        </View>
    )
}
export default Producto
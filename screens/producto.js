import React, { useEffect, useState } from "react"
import { View } from "react-native"
import Pescado from "../components/pescado"
import Vendedor from "../components/vendedor"
import Axios from "axios"
import Server from "../serverData"

const Producto = ({ route, navigation }) => {
    const { producto, foto, numVendedor } = route.params
    const [vendedor, setVendedor] = useState([]);
    useEffect(() => {
        fetchVendedor();
        
    }, []);
    const fetchVendedor = () => {
        Axios.get(Server + "/getVendedor/" + producto._id
        ).then((response) => {
            let a = Object.values(response.data)
            setVendedor(a);

        }).catch(() => {
            console.log("ERROR");
        });
    }
    
    if (vendedor[1]!==undefined) {
        return (
            <View>
                <Pescado navigation={navigation} producto={producto} foto={foto} numVendedor={vendedor.telefono} />
                <Vendedor navigation={navigation} vendedor={vendedor} />
            </View>
        )
    } else {
        return(null)
    }
}
export default Producto
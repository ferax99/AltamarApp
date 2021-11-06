import React from "react"
import { View, StyleSheet, Text } from "react-native"
const Contactar = () => {
    return (
        <View>
            <Text style={styles.titulo}>
                Contactar
            </Text>
           <View style={styles.contenedor}></View> 
        </View>
    )
}
const styles = StyleSheet.create({
    contenedor: {
        flexDirection: "row"
    }
    
})
export default Contactar
import React from "react";
import { View, StyleSheet, Text } from "react-native";

const Catalogo = () =>{
    return(
        <View style = {styles.contenedor}>
<Text>
    Catalogo
</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor:{
        flex:1,
        flexDirection:"row",
        flexWrap: "wrap",
        width: "100%",
        backgroundColor:"red",
    }
})

export default Catalogo
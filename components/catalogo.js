import React from "react";
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from "react-native";
import colors from "../assets/colors/colors";
import ItemCatalogo from "./itemCatalogo";

const Catalogo = ({ publicaciones, navigation, numVendedor }) => {
    //console.log(peces)
    const lista = () => {
        return (
            <View style={styles.contenedor} >
                <Image />
                {publicaciones.map(order => order.map(elem =>
                    <View key={elem._id} >
                        {/* {console.log(elem)} */}
                        <ItemCatalogo producto={elem} navigation={navigation} numVendedor={numVendedor}/>

                    </View>
                )
                )}
            </View>
        )
    }
    return (

        <ScrollView>
            <SafeAreaView style={styles.contenedore}>
                {lista()}
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        backgroundColor: colors.background,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    contenedore: {
        backgroundColor: colors.blueUI,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    item: {

        backgroundColor: colors.greyText,

    }
})

export default Catalogo
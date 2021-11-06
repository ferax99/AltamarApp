import React from "react";
import { View, StyleSheet, ScrollView, Image, SafeAreaView } from "react-native";
import colors from "../assets/colors/colors";
import ItemBusqueda from "./itemBusqueda";

const Busqueda = ({ productos }) => {
    const lista = () => {
        return (
            <View style={styles.contenedor} >
                <Image />
                {productos.map(order => order.map(elem =>
                    <View key={elem._id} >
                        <ItemBusqueda producto={elem} />

                    </View>
                )
                )}
            </View>
        )
    }
    return (

        <ScrollView>
            <SafeAreaView style={styles.contenedore}>
            <View style={styles.contenedor} >
                <Image />
                {productos.map(order => order.map(elem =>
                    <View key={elem._id}>
                        <ItemBusqueda producto={elem} />

                    </View>
                )
                )}
            </View>
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
        backgroundColor: colors.background,
        width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
    },
})

export default Busqueda
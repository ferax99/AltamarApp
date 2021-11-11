import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import MiInfo from "../components/miInfo";
import Frecuentes from "../components/frecuentes"
import { TouchableOpacity } from "react-native-gesture-handler";
import colors from "../assets/colors/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import UserData from "../userData"
import * as Updates from 'expo-updates';


const MiPerfil = ({ navigation }) => {

    const vaciar = async () => {
        try {

            // await AsyncStorage.setItem("rol","vendedor");
            await AsyncStorage.removeItem("telefono");
            await AsyncStorage.removeItem("id");
            await AsyncStorage.removeItem("nombre");
            await AsyncStorage.removeItem("rol");
            await AsyncStorage.removeItem("ubicacion");
            await AsyncStorage.removeItem("cedula");
            await AsyncStorage.removeItem("color");
            Updates.reloadAsync();

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <View>
            <MiInfo navigation={navigation} />
            <ScrollView>
                <Frecuentes />
            </ScrollView>
            <TouchableOpacity
                style={UserData.rol._W == "comprador" ? styles.botonComprador : styles.botonVendedor}
                onPress={() => vaciar()} >
                <Text style={{ fontWeight: "bold", color: "#FFFFFF" }}>
                    Cerrar sesión
                </Text>
            </TouchableOpacity>
        </View>

    )
}

const styles = StyleSheet.create({
    botonComprador: {
        backgroundColor: colors.orangeUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginLeft: "5%",
        marginTop: "5%",
        borderRadius: 50,
    },
    botonVendedor: {
        backgroundColor: colors.blueUI,
        height: 48,
        width: "90%",
        alignItems: 'center',
        padding: 15,
        color: "#FFFFFF",
        marginLeft: "5%",
        marginTop: "5%",
        borderRadius: 50,
    },
});
export default MiPerfil
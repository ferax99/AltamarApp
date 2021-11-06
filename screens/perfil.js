import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import ItemCatalogo from "../components/itemCatalogo";
import UserData from "../userData";
import Server from "../serverData";
import colors from "../assets/colors/colors";
import Catalogo from "../components/catalogo";


const Perfil = () => {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetchPublicaciones();

        return () => {

        }
    }, [])

    const fetchPublicaciones = () => {
        const api = Server + "/read/" + UserData.id;
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                setPublicaciones(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.general}>
            <Image
                style={styles.image}
                source={require('../assets/img/catalogo.png')}
            />
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Catalogo publicaciones={publicaciones} />
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    general: {
        flex:1,
        backgroundColor: colors.background,
    },
    contenedor: {
        alignContent: "center",
        height: "55%",
        marginLeft: 15
    },
    image: {
        marginTop: 10,
        height: 20,
        width: 150,
        resizeMode: "contain",
        marginLeft: 15,
        marginBottom: 15
    }


})
export default Perfil
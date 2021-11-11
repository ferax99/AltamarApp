import React from "react";
import { View, StyleSheet, SafeAreaView, Text, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import ItemCatalogo from "../components/itemCatalogo";
import UserData from "../userData";
import Server from "../serverData";
import colors from "../assets/colors/colors";
import Catalogo from "../components/catalogo";
import UserInfo from "../components/userInfo.js";
import Contactar from "../components/contactar";


const Perfil = ({ navigation, route }) => {
    const {vendedor} = route.params
    const [publicaciones, setPublicaciones] = useState([]);
    const [peces, setPeces] = useState([]);

    useEffect(() => {
        fetchPeces()
        fetchPublicaciones();

        return () => {

        }
    }, [])

    const fetchPeces = () => {
        const api = Server + "/readPeces";
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                setPeces(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }
    const fetchPublicaciones = () => {
        const api = Server + "/pubNum/" + vendedor[1];
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse=responseJson.map(item => Object.values(item));
                setPublicaciones(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }

    return (
        <View style={styles.general}>
            <UserInfo vendedor={vendedor}/>
            <Contactar navigation={navigation} vendedor={vendedor} />
            <Image
                style={styles.image}
                source={require('../assets/img/catalogo.png')}
            />
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Catalogo publicaciones={publicaciones} navigation={navigation} numVendedor={vendedor[0]}/>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    general: {
        flex: 1,
        backgroundColor: colors.background,
    },
    contenedor: {
        alignContent: "center",
        height: "100%",
    },
    image: {
        height: 20,
        width: 150,
        resizeMode: "contain"
    }


})
export default Perfil
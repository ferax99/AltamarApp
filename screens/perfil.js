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


const Perfil = ({ navigation }) => {
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
        //console.log(api)
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                //iterableResponse.map(item => console.log(item));
                setPeces(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }
    const fetchPublicaciones = () => {
        const api = Server + "/read/" + UserData.id;
        //console.log(api)
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                //iterableResponse.map(item => console.log(item));
                setPublicaciones(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }

    let simpleOrders = publicaciones.map(order => order.map(elem => elem.tipo))

    let pecera = peces.map(pez => pez)
    console.log(simpleOrders)

    // const lista = () => {
    //     return (
    //         <View>
    //             {publicaciones.map(order => order.map(elem =>
    //             <View key = {elem._id} >
    //                 {console.log(elem)}
    //                 <ItemCatalogo producto={elem} pecera = {pecera}/>

    //             </View>
    //             )
    //             )}
    //         </View>
    //     )
    // }
    return (
        <View style={styles.general}>
            <UserInfo />
            <Contactar navigation={navigation} />
            <Image
                style={styles.image}
                source={require('../assets/img/catalogo.png')}
            />
            <ScrollView contentContainerStyle={styles.contenedor}>
                <Catalogo publicaciones={publicaciones} peces={peces} />
            </ScrollView>
        </View>
        // <View style={styles.contenedorw }>
        //     <View>
        //         <Text contenedor>
        //             Hola
        //         </Text>
        //     </View>
        // <SafeAreaView style={styles.contenedorw }>
        //     {lista()}
        // </SafeAreaView>
        // </View>

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
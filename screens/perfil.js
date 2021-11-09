<<<<<<< HEAD
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
=======
import * as React from 'react';
import colors from "../assets/colors/colors";
import { TouchableOpacity, StyleSheet, Image, SafeAreaView, Text, TextInput, Alert, View } from 'react-native';

const Perfil = ({ navigation }) => {
    const kk = "Ruperta Canijos";
    const pataDeCamello = kk.split(' ');
    return(
        <View style={styles.container}>
            <View style={styles.fondo}>
            
                <Text style={styles.nombre}>
                    {pataDeCamello[0]}
                </Text>
                <Text style={styles.apellido}>{pataDeCamello[1]}</Text>
                <Text style={styles.resto}>
                    Desamparados, San Jose</Text>
                <Text style={styles.resto}>
                    <TouchableOpacity>
                        <Image style={styles.num} src={require('../assets/img/call-icon.png')}/>
                    </TouchableOpacity>
                    88965421
                </Text>
                
            </View>
            
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        //paddingTop: 50,
        flex: 1,
        backgroundColor: colors.background,
        flexWrap:"wrap",
        zIndex:-1
    },
    fondo: {
        backgroundColor: colors.orangeUI,
    },
    num: {
        top:"25%",
        width: 40,
        height: 40,
        resizeMode: "contain",

        zIndex: 999
        //left: "65%",
        //marginTop: -50,
    },
    nombre:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 40,
        //margin:5,
        marginTop:20,
        marginLeft: 60,
        
        fontWeight: 'bold'
    },
    apellido:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 40,    
        marginLeft: 60,
        //marginBottom:4,
        fontWeight: 'bold'
    },
    resto:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 20,    
        marginLeft: 60,
        marginBottom:10,
        //fontWeight: 'bold'
    }
});

export default Perfil;
>>>>>>> main

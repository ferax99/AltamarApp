import React, { useState, useEffect } from "react";
import Axios from "axios";

import { SectionList, TouchableOpacity, ListItem, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import colors from '../assets/colors/colors.js';
import { FlatList } from 'react-native-gesture-handler';
import Server from '../serverData';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductosF from "./productosF";

const Frecuentes = () => {
    const [datos, setDatos] = useState([]);
    const [listo, setListo] = useState(0);

    useEffect(() => {
        //guarda("Pargo");
       
        carga();
    }, []);

    // const guarda =async(tipo)=>{
    //     try{
    //         let x = await AsyncStorage.getItem("historial");
    //         if (x==null){
    //             x = [tipo];
    //             const historial = JSON.stringify(x)
    //             await AsyncStorage.setItem("historial",historial);
    //             console.log("guardado")
    //         }
    //         else{
    //             let datos = JSON.parse(x)
    //             if(datos.length >6){
    //                 datos.shift();
                   
    //             }
    //             datos.push(tipo);
    //             const historial = JSON.stringify(datos);
    //             await AsyncStorage.setItem("historial",historial);
    //             console.log("guardado")

    //         }
            
            

    //     }catch (err){
    //         console.log(err)
    //     }

    // }

    const carga =async()=>{
        try{
            let x = await AsyncStorage.getItem("historial");
            const datos = JSON.parse(x)
            const val = datos.reverse();
            setDatos(val);
            setListo(val.length);
            

        }catch (err){
            console.log(err)
        }

    }

   
    return (
        <SafeAreaView style={styles.container} >
            <   ScrollView >

                <Text style={styles.title}  >
                    Búsquedas frecuentes
                </Text>
                <View style={styles.contenedorLista} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.contenedorFila}>
                            {
                                (listo>=2) &&
                                <View style={styles.grupo}>
                                    <ProductosF tipo={datos[0]} />
                                    <ProductosF tipo={datos[1]} />
                                </View>

                            }
                            {
                                (listo>=4) &&
                            <View style={styles.grupo}>
                                <ProductosF tipo={datos[2]} />
                                <ProductosF tipo={datos[3]} />
                            </View>
                                
                            }
                             {
                                (listo>=6) &&
                            <View style={styles.grupo}>
                                <ProductosF tipo={datos[4]} />
                                <ProductosF tipo={datos[5]} />
                            </View>
                                
                            }
                        </View>


                    </ScrollView>

                </View>


            </ScrollView>

        </SafeAreaView>



    );
};
const styles = StyleSheet.create({
    contenedorLista: {
        marginTop: -30,
        flexDirection: "column",
        elevation: 100,

    },
    contenedorFila: {
        flexDirection: "row",
        justifyContent:"center",
        margin:20,
        //backgroundColor:"black",

    },
    title: {
        margin: 25,
        textAlign: 'left',
        fontSize: 16,
        fontWeight: "bold",
    },
    container: {

        backgroundColor: colors.backgroundColor,
        flex: 1,

    },
    grupo: {
        marginRight: 15,
    },
    boton: {
        backgroundColor: '#FFFFFF',

    },
});

export default Frecuentes;
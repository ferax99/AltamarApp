import React, { useState, useEffect } from "react";
import Axios from "axios";

import { SectionList, TouchableOpacity, ListItem, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import colors from '../assets/colors/colors.js';
import { FlatList } from 'react-native-gesture-handler';
import Server from '../serverData';
import ProductosF from "./productosF";

const Frecuentes = () => {
    const [datos, setDatos] = useState([{}]);
    const [listo, setListo] = useState(0);

    useEffect(() => {
        fetchData();
    }, []);

   

    const fetchData = () => {
        Axios.get(Server + "/getRecomendados/4"
        ).then((response) => {

            var val = [];
            var i = 0;
            var x = response.data;
            x.forEach(function (task) {

                val.push(x[i].publicaciones);
                i++;

            });
            setDatos(val);
            setListo(1);

        }).catch(() => {
            console.log("ERROR :c");

        });
    }
    return (
        <SafeAreaView style={styles.container} >
            <   ScrollView >

                <Text style={styles.title}  >
                    Productos Frecuentess
                </Text>
                <View style={styles.contenedorLista} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.contenedorFila}>
                            {
                                (listo==1) &&
                                <View style={styles.grupo}>
                                    <ProductosF data={datos[0]} />
                                    <ProductosF data={datos[1]} />
                                </View>

                            }
                            {
                                (listo==1) &&
                            <View style={styles.grupo}>
                                <ProductosF data={datos[2]} />
                                <ProductosF data={datos[3]} />
                            </View>
                                
                            }
                             {
                                (listo==1) &&
                            <View style={styles.grupo}>
                                <ProductosF data={datos[2]} />
                                <ProductosF data={datos[3]} />
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
        marginTop: -15,
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
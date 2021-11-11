import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { SectionList, TouchableOpacity, ListItem, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import ProductosR from '../components/productosR';
import colors from '../assets/colors/colors.js';
import { FlatList } from 'react-native-gesture-handler';
import Server from '../serverData';

const Recomendado = () => {
    const [datos, setDatos] = useState([{}]);
    const [listo, setListo] = useState(0);
    const navigation = useNavigation();

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
                    Recomendados
                </Text>
                <View style={styles.contenedorLista} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.contenedorFila}>
                            {
                                (listo==1) &&
                                <View style={styles.grupo}>
                                    <ProductosR data={datos[0]} />
                                    <ProductosR data={datos[1]} />
                                </View>

                            }
                            {
                                (listo==1) &&
                            <View style={styles.grupo}>
                                <ProductosR data={datos[2]} />
                                <ProductosR data={datos[3]} />
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

export default Recomendado;
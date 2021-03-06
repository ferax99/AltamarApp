import React from 'react';
import { useState, useEffect } from "react";

import { TouchableOpacity, ListItem, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Contacto from '../components/contacto';
import ProductoF from '../components/productoF';
import Axios from "axios";
import ServerData from '../serverData';
import { FlatList } from 'react-native-gesture-handler';
import userData from '../userData';
import colors from '../assets/colors/colors';
import Navbar from '../components/navbar';
import { Dimensions } from 'react-native';
import Server from "../serverData";
import UserData from '../userData';


const SwitchOp = [
    { label: 'contactos', value: 'Contactos' },
    { label: 'productos', value: 'Productos' },
];



//const tam=Dimensions.get('window').height*(0.59);  //por si el navbar no sirve
const tam = Dimensions.get('window').height;
const Favoritos = ({ navigation }) => {
    const [tex, setTex] = useState('')
    var Value = tex;
    const [filteredData, setfilteredData] = useState([]);
    const [contactos, setcontactos] = useState([]);
    const [productos, setproductos] = useState([]);
    const [search, setsearch] = useState('');
    var prods;
    const windowHeight = (tam > 400) ? tam : 250;

    useEffect(() => {


        const unsubscribe = navigation.addListener('focus', () => {
            console.log('Refreshed!');
            fetchProductos();
            fetchContactos();

        });
        return unsubscribe;
    }, [])



    const fetchContactos = () => {
        if (UserData.rol._W==="comprador") {
            const api = ServerData + "/getFav/" + userData.telefono._W;
            //console.log(api)
            fetch(api)
                .then((response) => response.json())
                .then((responseJson) => {
    
                    // console.log(responseJson);
                    setfilteredData(responseJson);
                    setcontactos(responseJson);
                }).catch((error) => {
                    console.log(error);
                });
        }
    }

    const fetchProductos = () => {
        if (UserData.rol._W==="comprador") {
            Axios.get(ServerData + "/getFavP/" + userData.telefono._W
            ).then((response) => {
                //console.log(response.data)
                setproductos(response.data.favoritos);
            }).catch(() => {
                console.log("ERROR");
    
            });
        }
    }
    /*
const fetchProductos = () => {
    const datos = require('../local_data/productosFav.json');
    prods = datos;

    setproductos(datos);
}*/

    const searchFilter = (text) => {
        if (text) {
            const newData = contactos.filter((item) => {
                const itemData = item.nombre ? item.nombre.toUpperCase()
                    : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            setsearch(text);
        } else {
            setfilteredData(contactos);
            setsearch(text);
        }
    }


    const ContactView = ({ item }) => {
        return (
            <Contacto nombre={item.nombre} numero={item.telefono} id={item._id} />
        )
    }
    const ProductView = ({ item }) => {


        return (
            <ProductoF id={item} />
        )



    }
    const togle =()=>{
        fetchProductos();
            fetchContactos();
    }



    return (

        <SafeAreaView style={styles.container}  >
            <View>
                <View >
                    <View style={styles.contenedorSw} >
                        <View style={styles.row} >

                            <TextInput
                                style={styles.search}
                                value={search}
                                placeholder="   Buscar"
                                onChangeText={(text) => searchFilter(text)}
                            />
                            <Image style={styles.ima} source={require('../assets/img/search-icon.png')} />
                        </View>
                        <SwitchSelector
                            textColor={'#838383'}
                            buttonColor={"#EE7333"}
                            selectedColor={"#FFFFFF"}
                            backgroundColor={"rgba(131, 131, 131, 0.12)"}
                            height={43}
                            options={SwitchOp}
                            initial={0}
                            onPress={(Value) => { setTex(Value);togle(); }}
                        />
                    </View>
                </View>
            </View>

            <View >

                <View styles={styles.contenedorLista} >
                    <View style={{ height: windowHeight }}>
                        {
                            (tex == "Productos") &&

                            <FlatList
                                nestedScrollEnabled
                                data={productos}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ProductView}

                            />



                        }
                        {
                            (tex != "Productos") &&
                            <FlatList
                                nestedScrollEnabled
                                data={filteredData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ContactView}
                            />

                        }
                    </View>


                </View>




            </View>


            <View  >
            </View>


        </SafeAreaView>




    );
};
const styles = StyleSheet.create({
    contenedorSw: {
        width: "100%",
    },
    search: {
        height: 40,
        width: "100%",
        backgroundColor: "white",
        borderRadius: 48,
        paddingLeft: 20,
        marginBottom: 40

    },
    ima: {
        width: 15,
        height: 15,
        marginRight: 20,
        marginTop: 15,
        right: "45%",
    },
    row: {
        flexDirection: "row",

    },
    contenedorLista: {
        width: "100%",
        marginTop: 10,
        marginBottom: 30,
        justifyContent: 'flex-end',
    },
    title: {
        marginTop: "5%",
        textAlign: 'center',
        fontSize: 16,
        fontWeight: "bold",
    },
    container: {

        padding: 30,
        backgroundColor: '#FFFFFF',
        flex: 1,
        justifyContent: 'flex-start',
        alignContent: 'center',
        backgroundColor: colors.background

    },
    boton: {
        backgroundColor: '#FFFFFF',
    },



});

export default Favoritos;
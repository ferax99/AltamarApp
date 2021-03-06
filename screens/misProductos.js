import React from 'react';
import { useState, useEffect } from "react";
import { RefreshControl,FlatList, TouchableOpacity, StyleSheet, View, SafeAreaView, Image } from 'react-native';
import colors from '../assets/colors/colors';
import AddButton from '../components/addButton';
import SkipButton from '../components/skipButton';
import Axios from "axios";
import userData from '../userData';
import Server from "../serverData";
import MiProducto from '../components/miProducto';
import { Dimensions } from 'react-native';


const tam=Dimensions.get('window').height*(0.76);


const MyProducts = ({ navigation }) => {
    //console.log(userData.telefono._W)
    const [listOfProd, setListOfProd] = useState([]);
    const [telefono, setTelefono] = useState('');
    const [datos, setDatos] = useState([{}]);
    const [vacio, setVacio] = useState(true);
    const [filteredData, setfilteredData] = useState([]);
    //const windowHeight = (tam>400)?tam:400;
    const windowHeight = tam;
    useEffect(() => {

        const unsubscribe = navigation.addListener('focus', () => {
           // console.log('Refreshed!');
            fetchData();
          });
          return unsubscribe;
        
        

    }, []);
    const fetchData = () => {
        Axios.post(Server + "/getMyProducts", { telefono: userData.telefono._W }
        ).then((response) => {
            setDatos(response.data.publicaciones);
            //console.log(response.data.publicaciones);
            setTelefono(response.data.publicaciones[0].tipo);
            setVacio(false);
        }).catch(() => {
            console.log("ERROR");

        });
    }
    const ProductView = ({ item }) => {
        //console.log(item);

        return (
            <MiProducto navigation={navigation} datos={item} />
        )

    }

    return (
        <SafeAreaView style={styles.container}>
            {!vacio &&
                <View style={{ width: "100%", height:"85%"}}>
                   <FlatList
                                nestedScrollEnabled
                                data={datos}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ProductView}
                            /> 
                            <TouchableOpacity style={styles.conBoton} onPress={() => navigation.push('A??adir productos',{numVendedor:"159"})}>
                                <Image style={styles.boton} source={require("../assets/img/add.png")}/>
                            </TouchableOpacity>
                </View>
            }
            {vacio &&
                <View>
                    <AddButton navigation={navigation} />
                   
                </View>
            }


        </SafeAreaView>


    )

}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "TT Norms",
    },boton:{
        resizeMode:"contain",
        width:55,
        height:55,
        
    },
    conBoton:{
        marginTop:-130,
        alignSelf:"flex-end",
        backgroundColor: colors.whiteButtons,
        borderRadius:40
    }

});

export default MyProducts
import React from 'react';
import { useState, useEffect } from "react";
import { RefreshControl,FlatList, ScrollView, StyleSheet, View, SafeAreaView, Text } from 'react-native';
import colors from '../assets/colors/colors';
import AddButton from '../components/addButton';
import SkipButton from '../components/skipButton';
import Axios from "axios";
import Navbar from '../components/navbar';
import userData from '../local_data/userData.json';
import Server from "../serverData";
import MiProducto from '../components/miProducto';
import { Dimensions } from 'react-native';


const tam=Dimensions.get('window').height*(0.76);


const MyProducts = ({ navigation }) => {
    const [listOfProd, setListOfProd] = useState([]);
    const [telefono, setTelefono] = useState('');
    const [datos, setDatos] = useState([{}]);
    const [vacio, setVacio] = useState(true);
    const [filteredData, setfilteredData] = useState([]);
    //const windowHeight = (tam>400)?tam:400;
    const windowHeight = tam;
    useEffect(() => {

        fetchData();
        
        return () => {

        }

    }, []);
    const fetchData = () => {
        Axios.post(Server + "/getMyProducts", { telefono: userData.telefono }
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
                <View style={{ width: "100%",height:windowHeight }}>
                   <FlatList
                                nestedScrollEnabled
                                data={datos}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={ProductView}
                            /> 
                </View>
            }
            {vacio &&
                <View>
                    <AddButton navigation={navigation} />
                    <SkipButton navigation={navigation} mensaje={"Omitir"} />
                </View>
            }


        </SafeAreaView>


    )

}
const styles = StyleSheet.create({
    container: {
        marginTop:30,
        padding: 20,
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "TT Norms",
    },

});

export default MyProducts
import React from 'react';
import { SectionList, TouchableOpacity, ListItem, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import ProductosT from '../components/productosT';
import colors from '../assets/colors/colors.js';
import { FlatList } from 'react-native-gesture-handler';


const Temporada = ({ lista }) => {

    const lista2 = (elem) => {
        return(
        <View key={elem._id}>
            <ProductosT tipo={elem} />
        </View>
        )
    }
    return (
        <SafeAreaView style={styles.container}>
            <   ScrollView  >

                <Text style={styles.title}  >
                    Productos de temporada
                </Text>
                <View style={styles.contenedorLista} >
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View style={styles.contenedorFila} >
                            {lista.map((data) => {return(lista2(data))})}
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
        marginLeft: 10,
        flexDirection: "column",
        elevation: 100,
    },
    contenedorFila: {
        flexDirection: "row"
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
    boton: {
        backgroundColor: '#FFFFFF',
    },
});

export default Temporada;
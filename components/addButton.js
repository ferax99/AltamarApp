import React, { Component } from "react";
import { ReactDom } from "react-dom";
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
import colors from "../assets/colors/colors";

const AddButton = ({navigation, numVendedor}) => {
    return (
        <TouchableOpacity
            style={styles.agregar}
            onPress={() => navigation.navigate('Añadir productos',{numVendedor:numVendedor})}>
            <View>
                <Image
                    style={styles.imagen}
                    source={require('../assets/img/addButton.png')} />
            </View>
            <Text style={styles.texto}>
                Agregá tu primer producto
            </Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    agregar: {
        alignItems: 'center',
        top: "30%"
    },
    imagen: {
        marginBottom: 15,
        paddingBottom: 15,
        resizeMode: "contain",
        top: 20,
        width: 66,
        height: 66,
    },
    texto: {
        marginTop: 15,
        paddingTop: 15,
        textAlign: "center",
        fontSize: 20,
        color: colors.greyText
    },
});
export default AddButton
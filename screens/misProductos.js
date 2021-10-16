import React from 'react';
import { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../assets/colors/colors';
import AddButton from '../components/addButton';
import SkipButton from '../components/skipButton';
import Axios from "axios";


const MyProducts = ({ navigation }) => {
    const [listOfProd, setListOfProd] = useState([]);
    const [telefono, setTelefono] = useState('')
    const mensaje = "Omitir"
    
    const verificarListaProductos = () => {
        Axios.post(Server + "/verificaProducto", {
            telefono: telefono,
          }).then((response) => {
            console.log(response.data);
            if (response.data == "False") {
                navigation.navigate('Añadir productos')
            }
            if (response.data == "True") {
              navigation.navigate('LoginPw', { telefono: tex })
            }
      
          });

    }
    return (
        <SafeAreaView style={styles.container}>
            <AddButton navigation={navigation} />
            <SkipButton navigation={navigation} mensaje={mensaje} />
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
    },

});

export default MyProducts
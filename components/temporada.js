import React from 'react';
import {TouchableOpacity, ListItem,StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import ProductosT from '../components/productosT';
import colors from '../assets/colors/colors.js';

const SwitchOp = [
    {label:'contactos',value:'Contactos'},
    {label:'productos',value:'Productos'},
];
const cambia = (valor)=>{
    console.log(valor);
}


const Temporada = ({navigation}) =>{
   
  return(
<SafeAreaView style = {styles.container} >
<   ScrollView >

    <Text style = {styles.title}  >
        Productos de Temporada
    </Text>
    <View style = {styles.contenedorLista} >
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.contenedorFila}>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
            </View>
    </ScrollView>

    </View>
   
        
    </ScrollView>

</SafeAreaView>
    
   
        
  );
};
const styles = StyleSheet.create({
    contenedorLista:{
        marginTop:-15,
        marginLeft: 10,
        flexDirection:"column",
        elevation:100,
    },
    contenedorFila:{
        flexDirection:"row"
    },
    title:{
        margin:25,
        textAlign:'left',
        fontSize: 16    ,
        fontWeight: "bold",
    },
    container: {
      padding:30,
      backgroundColor: colors.backgroundColor,
      flex: 1,     
    },
    boton:{
        backgroundColor: '#FFFFFF',
    },
});

export default Temporada;
import React from 'react';
import {SectionList, TouchableOpacity, ListItem,StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import ProductosT from '../components/productosT';
import colors from '../assets/colors/colors.js';
import { FlatList } from 'react-native-gesture-handler';


const Temporada = ({lista}) =>{
   
  return(
<SafeAreaView style = {styles.container} >
<   ScrollView >

    <Text style = {styles.title}  >
        Productos de Temporada
    </Text>
    <View style = {styles.contenedorLista} >
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.contenedorFila}>
        {/*{lista.map((data) => {
            console.log(data.foto == "../assets/img/peces/camaron.png")
            const fot = "../assets/img/peces/camaron.png"
            return(
                
            <ProductosT key={data.nombre} ruta={fot} tipo={data.nombre}/>
        )})}*/}
        <ProductosT ruta={require("../assets/img/peces/camaron.png")} tipo="Camaron"/>
        <ProductosT ruta={require('../assets/img/peces/pargoC.png')} tipo="Pargo Coliamarilla"/>
        <ProductosT ruta={require('../assets/img/peces/corvina.png')} tipo="Corvina"/>
        <ProductosT ruta={require('../assets/img/peces/pargoM.png')} tipo="Pargo Manchado"/>
        <ProductosT ruta={require('../assets/img/peces/trucha.png')} tipo="Trucha"/>
        
      </View>

                {/*
                /home/danieloaiza/Desktop/SirviendoBranchNueva/AltamarApp/assets/img/peces/camaron.png
                <ProductosT ruta={require("../assets/img/peces/camaron.png")} tipo="Camaron"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Salmon"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pez.jpg')} tipo="Payaso"/>
                <ProductosT ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo"/>*/}
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
      
      backgroundColor: colors.backgroundColor,
      flex: 1,     
    },
    boton:{
        backgroundColor: '#FFFFFF',
    },
});

export default Temporada;
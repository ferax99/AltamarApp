import React from 'react';
import {TouchableOpacity, ListItem,StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Contacto from '../components/contacto';
import ProductosF from '../components/productosF';
import colors from '../assets/colors/colors.js';

const SwitchOp = [
    {label:'contactos',value:'Contactos'},
    {label:'productos',value:'Productos'},
];
const cambia = (valor)=>{
    console.log(valor);
}


const Favoritos = ({navigation}) =>{
   
  return(
<SafeAreaView style = {styles.container} >
<   ScrollView >

    <Text style = {styles.title}  >
        Favoritos
    </Text>
    <View >
    <View style = {styles.contenedorSw}>

    <SwitchSelector
    textColor={'#838383'}
    buttonColor={"#EE7333"}
    selectedColor={"#FFFFFF"}
    backgroundColor={"rgba(131, 131, 131, 0.12)"}
    height={43}
    
    options={SwitchOp}
    initial={0}
    onPress={value => cambia(value)}
    />
    </View>
    </View>
    <View style = {styles.contenedorLista}>
    <ScrollView >
        <ProductosF ruta={require('../assets/img/pecesPrueba/trout.jpg')} tipo="Trucha" vendedor = "Ruvilo Jr"/>
        <ProductosF ruta={require('../assets/img/pecesPrueba/pargo.jpg')} tipo="Pargo" vendedor = "Fevilo Jr"/>
        <ProductosF ruta={require('../assets/img/pecesPrueba/Salmo.jpg')} tipo="Salmon" vendedor = "Kakudo Jr"/>
    </ScrollView>

    </View>
   
        
    </ScrollView>

</SafeAreaView>
    
   
        
  );
};
const styles = StyleSheet.create({
    contenedorSw:{
        width:"80%",
        margin:"auto",
        
        justifyContent: 'center',
   },
   contenedorLista:{

    width:"90%",
    margin:"auto",
    marginTop:10,
    justifyContent: 'center',
},
    title:{
        margin:25,
        textAlign:'center',
        fontSize: 16    ,
    fontWeight: "bold",
    },
    container: {
      
      padding:30,
      backgroundColor: colors.backgroundColor,
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center'
     
    },
    boton:{
        backgroundColor: '#FFFFFF',
    },


});

export default Favoritos;
import React from 'react';
import {TouchableOpacity, ListItem,StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Contacto from '../components/contacto';
import ProductosF from '../components/productosF';

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
    {/*<Contacto nombre="Andre Binda S" numero = "45243566"/>
    <Contacto nombre="Daniel P" numero = "341235345"/>
  <Contacto nombre="Ruben V" numero = "85647522"/>*/}
  <ProductosF ruta={require('../assets/img/peces/trucha.png')} tipo="Trucha" vendedor = "Ruvilo Jr"/>
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
      backgroundColor: '#FFFFFF',
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center'
     
    },
    boton:{
        backgroundColor: '#FFFFFF',
    },


});

export default Favoritos;
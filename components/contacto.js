import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';


const numFormat =(num)=>{
    let x="";
    for (let i = 0; i < num.length; i++) {
        if (i==4){x+="-"}
        x+=num[i]; }
    return x;
    }

const Contacto = ({nombre,numero,id}) =>{
    
  return(
   <SafeAreaView style = {styles.container}>
       <Text style = {styles.nombre}>{nombre}</Text>
       <Text style = {styles.numero}>{numFormat(numero)}</Text>
       <View style = {styles.row}>
       <TouchableOpacity>
       
        <Image  style = {styles.ima} source={require('../assets/img/call-icon.png')} />
       </TouchableOpacity>
       <TouchableOpacity>
       
        <Image  style = {styles.ima} source={require('../assets/img/opciones.png')} />
       </TouchableOpacity>

       </View>
       
   </SafeAreaView>
   
        
  );
};
const styles = StyleSheet.create({
    container: {
      
       flexDirection:"column",
      margin:20,
      

    },
    ima:{
        width:30,
        height:30,
        marginLeft:5,
    },
    row:{
        marginTop:-40,
        flexDirection:"row",
        justifyContent: 'flex-end',

    },
    nombre:{
        color:"#0C1722",
        fontSize:18,
        
      
    },
    numero:{
        color:"#838383"
    },
});

export default Contacto;
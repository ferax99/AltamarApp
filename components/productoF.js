import React from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { useState } from 'react/cjs/react.development';

const ProductoF = ({ruta, tipo, vendedor,id}) =>{
  return(
   <SafeAreaView style = {styles.container}>
       <Text style = {styles.tipo}>{tipo}</Text>
       <Text style = {styles.vendedor}>{vendedor}</Text>
       <View >
      
        <Image  style = {styles.ima} source={{uri:ruta}} />
       
       <View style = {styles.row}>
        <TouchableOpacity >
        <Image style = {styles.trash} source={require('../assets/img/trash.png')}/>
        </TouchableOpacity>
       </View>
       
       </View>
       
   </SafeAreaView>     
  );
};
const styles = StyleSheet.create({
    container: {
       flexDirection:"column",
      margin:10,
      borderRadius:10,
      backgroundColor:"white",
    },
    ima:{
        width:80,
        height:60,
        resizeMode:"contain",
        marginLeft:4,
        marginTop:-40,
    },

    trash:{
        width:16,
        height:22,
        justifyContent: 'flex-end',
        marginTop:-45,
        marginRight:10,

    },
    row:{
        marginRight:10,
        flexDirection:"row",
        justifyContent: 'flex-end',

    },
    tipo:{
        color:"#0C1722",
        fontSize:14,
        marginLeft:100,
        marginTop:20,
        fontWeight: "bold",
        
      
    },
    vendedor:{
        color:"#838383",
        marginLeft: 100,
    },
});

export default ProductoF;
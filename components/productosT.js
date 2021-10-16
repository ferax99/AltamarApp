import React, { useState } from "react";
import {View, Text, StyleSheet, Image,} from "react-native";
import { SafeAreaView } from 'react-navigation';
import colors from '../assets/colors/colors';

const ProductosT = ({ruta, tipo}) => {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Image  style = {styles.ima} source={ruta} />   
        </View>
        <Text style = {styles.tipo}>{tipo}</Text>
        
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"auto",
    margin:10,
    borderRadius:10,    
    backgroundColor:colors.whiteButtons,
    
    flexDirection: "row",
    flexWrap:"nowrap",
    
  },
  
  ima:{
    width:80,
    height:60,
    marginVertical:10,
    resizeMode:"contain",
    justifyContent:"flex-start",
  },
  tipo: {
    color:"#0C1722",
    fontWeight:"bold",
    fontSize:14,
    marginTop:35,
    marginLeft:20,
    textAlign:"center",
    paddingRight:10,
  },
});

export default ProductosT;

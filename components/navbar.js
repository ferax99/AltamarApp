import e from "cors";
import React, { useState,useEffect } from "react";
import { TouchableOpacity, StyleSheet, Image, Button, View, SafeAreaView, Text, TextInput, Alert, ScrollView } from 'react-native';
const user = require('../local_data/userData.json');
const color = ()=>{
  if (user.rol == "vendedor"){
    return  "#00A3FF";
  }
  else{
    return "#EE7333";
    
  }
}




const Navbar = ({navigation,num}) => {
    const [selectedButton, setSelectedButton] = useState(parseInt(num,10));
    
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <View style={styles.con}>

          {(color()=="#EE7333") && 
          <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('Favoritos');}} >
            <Image
              style={selectedButton===1?styles.tinyLogoS : styles.tinyLogo} 
              source={require('../assets/img/favoritos.png')}/>
          </TouchableOpacity>}

          {(color()=="#00A3FF") &&
          <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate("Mis productos")}} >
            <Image
              style={selectedButton===1?styles.tinyLogoS : styles.tinyLogo} 
              source={require('../assets/img/opciones2.png')}/>
          </TouchableOpacity>}

          <TouchableOpacity style={styles.box} onPress={() => {navigation.navigate('Home');}}>
            <Image
              style={selectedButton===2?styles.tinyLogoS : styles.tinyLogo} 
              source={require('../assets/img/busqueda2.png')}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.box} onPress={() => console.log("perfil")}>
            <Image
               style={selectedButton===3?styles.tinyLogoS : styles.tinyLogo} 
              source={require('../assets/img/miperfil.png')}/>
          </TouchableOpacity>
         
         
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    bottom: 0,
    width:"100%",
   
    
    
  },
  tinyLogo: {
    tintColor: "#838383",
    width:65,
    height:45,
    resizeMode: "contain",
  },
  tinyLogoS:{
    tintColor: color(),
    width:65,
    height:45,
    resizeMode: "contain"},
  nav: {
    height: "18%",
    borderRadius:14,    
  },
  box: {
    marginBottom: "auto",
    marginTop: "auto",
  },
  con:{
    flex:1,
    
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
    //marginBottom:45,
    //backgroundColor:"blue"
    
  }


});

export default Navbar;

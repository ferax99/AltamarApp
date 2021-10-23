import React from 'react';
import { useState, useEffect } from "react"; 
import {TouchableOpacity, StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import Axios from "axios";
import Server from "../serverData";

const Login = ({navigation}) =>{

  
  
  const [listOfProd, setListOfProd] = useState([]);

  const [tex, setTex] = useState('')
  var Value = tex;
  const telefono = navigation.getParam("telefono");
  useEffect(() => {
    Axios.get(Server+"/read"
    ).then((response)=>{
      setListOfProd(response.data);
      //setListOfCar(response.data.publicaciones);
    }).catch(()=> {
      console.log("ERROR");
    });

  }, []);

  const verificaUsuario = () =>{
    Axios.post(Server+"/login", {
    telefono: telefono,
    clave: tex,
    }).then((response) => {console.log(response.data);
   
    if(response.data == "True"){
      navigation.navigate('Home',{telefono:telefono});
    }
    else{
        Alert.alert('Clave incorrecta', 'Digite la clave de nuevo', [{text: 'OK'}]);

    }
    
    });
  };

  return(
  <SafeAreaView style={styles.container}>
    <SafeAreaView style={styles.logo}>
    <Image
        style={styles.tinyLogo}
        source={require('../assets/img/logoVenta.png')}
    />
    </SafeAreaView>
    <ScrollView>
    <View style = {styles.info}>
    
    <Text style = {styles.mainText} >Bienvenido! 
    </Text >
    <Text style = {{color: 'rgba(143, 146, 161, 1)', fontSize: 18}} >Mariscos de Costa Rica
    </Text>
    <Text style = {{fontWeight: "bold",color: 'rgba(30, 31, 32, 1)', fontSize: 18,marginTop:30}} >Contraseña
    </Text>
    <TextInput onChangeText={(Value) => {setTex(Value)  }}
        style={styles.input}
        secureTextEntry = {true}
        placeholder={"*******"}
        
      />

    <TouchableOpacity style= {styles.boton} onPress={ () => verificaUsuario()} >
        <Text style = {{fontWeight: "bold",color:"#FFFFFF"}}>Siguiente</Text>
    </TouchableOpacity>

    
    
    </View>
    </ScrollView>
 
  <Text style = {styles.footer} >Al iniciar sesión, aceptas nuestros   
    <Text style = {{color:"blue" }} onPress={()=>navigation.navigate('Info')}>
    - Términos de servicio
    </Text>
  </Text>   
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding:20,
    backgroundColor: '#FFFFFF',
    flex: 1,    
    justifyContent: 'flex-start',
    fontFamily: "TT Norms",
  },
  info:{
    padding:15,
  },
  boton:{
    backgroundColor :"rgba(131, 131, 131, 1)",
    height:50,
    alignItems: 'center',
    padding:15,
    color:"#FFFFFF",
    marginTop:8,
    borderRadius:50,
    
  },
  botonC:{
    
    borderWidth:3,
    borderColor:"rgba(131, 131, 131, 1)",
    height:50,
    alignItems: 'center',
    padding:15,
    color:"#FFFFFF",
    marginTop:30,
    borderRadius:50,
    
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth:1,
    borderColor: 'grey',
    padding: 10,
  },
  logo:{
    alignItems: 'center',
    marginTop:20,
  },
  tinyLogo: {
    
    width: 200,
    height: 250,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  mainText:{
    marginTop:50,
    
    fontSize: 44,
    fontWeight: "bold",
    color:"rgba(46, 48, 52, 1)"
  },
  footer:{
    fontSize: 14,
    padding:10
  },



});

export default Login;
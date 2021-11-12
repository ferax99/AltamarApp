import React from 'react';
import { useState, useEffect } from "react"; 
import {TouchableOpacity, StyleSheet,Image, Button, View, SafeAreaView, Text,TextInput, Alert,ScrollView } from 'react-native';
import Axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Server from "../serverData";
import Vendedor from '../components/vendedor';
import colors from '../assets/colors/colors';
import * as Updates from 'expo-updates';

var id ="";
var nombre="";
var rol = "";
var ubicacion = ""
var cedula = ""

const Login = ({navigation, route}) =>{

  const {telefono} = route.params;
  
  const [listOfProd, setListOfProd] = useState([]);

  const [tex, setTex] = useState('')

  var Value = tex;
  // const telefono = navigation.getParam("telefono");
  useEffect(() => {
    fetchUsr()
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
      guardar();
      navigation.push("FTabBar")
      console.log("guardado papu")
      Updates.reloadAsync();
    }
    else{
        Alert.alert('Clave incorrecta', 'Digite la clave de nuevo', [{text: 'OK'}]);

    }
    
    });
  };


  const guardar =async()=>{
    try{
      await AsyncStorage.setItem("telefono", telefono);
      await AsyncStorage.setItem("id", id);
      await AsyncStorage.setItem("nombre",nombre);
      await AsyncStorage.setItem("rol",rol);
      await AsyncStorage.setItem("ubicacion",ubicacion);
      await AsyncStorage.setItem("cedula",cedula);
      
      if(rol!="vendedor"){
        await AsyncStorage.setItem("color",colors.blueUI);
      }else{
        await AsyncStorage.setItem("color",colors.orangeUI);
      }
    }catch (err){
        console.log(err)
    }
}



  const fetchUsr = () => {
    console.log("##"+telefono)
    Axios.get(Server + "/getUsuario/"+telefono 
    ).then((response) => {
        if(response.data!="False"){
          //setNombre(response.data.nombre);
          //setId(console.data._id)
          id = response.data._id;
          nombre = response.data.nombre;
          rol = response.data.rol
          ubicacion= response.data.ubicacion
          cedula= response.data.cedula

          console.log(response.data.nombre)

         
        }
        else{
          console.log("Error al guardar usuario");
          
        }
    }).catch(() => {
        console.log("Error al guardar usuario");

    });
    }

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
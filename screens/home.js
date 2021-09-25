import React from 'react';
import {Text,StyleSheet} from 'react-native';

const Home = ({navigation}) =>{
    const telefono = navigation.getParam("telefono");
  return(
   
    <Text style = {styles.container}>Felicidades {telefono}, has iniciado sesion de manera exitosa! Home estara disponible proximamente al final de la segunda iteracion 
     </Text>
    
   
        
  );
};
const styles = StyleSheet.create({
    container: {
      marginTop:20,
      padding:30,
      backgroundColor: '#FFFFFF',
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center'
     
    }});

export default Home;
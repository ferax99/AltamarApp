import React from 'react';
import {Text,StyleSheet} from 'react-native';

const Info = () =>{
  return(
   
    <Text style = {styles.container}>La aplicacion se encuentra en desarrollo, actualmente en la iteracion 1 del proyecto.
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

export default Info;
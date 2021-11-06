import React from 'react';
import {Text,StyleSheet} from 'react-native';
import Navbar from '../components/navbar';
const Info = ({navigation}) =>{
  return(
   <view style={{flex:1}}>
 <Text >La aplicacion se encuentra en desarrollo, actualmente en la iteracion 1 del proyecto.
     </Text>
     <Navbar navigation={navigation} num="3" />
   </view>
   
   
        
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
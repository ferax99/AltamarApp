import React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Temporada from '../components/temporada';
import colors from '../assets/colors/colors';

const Home = ({navigation}) =>{
    const telefono = navigation.getParam("telefono");
  return(
    <View style = {styles.container}>
      <Temporada/>
    
     </View>
        
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center',

     
    }});

export default Home;
import React from 'react';
import {Text,StyleSheet,View,Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-navigation';
import colors from '../assets/colors/colors';

const ProductosF = ({ruta, tipo, vendedor,id}) =>{
    
  return(
   <SafeAreaView style = {styles.container}>
       <Text style = {styles.tipo}>{tipo}</Text>
       <Text style = {styles.vendedor}>{vendedor}</Text>
       <View style = {{flexDirection:'', flexWrap:'wrap'}}>
      <TouchableOpacity>
        <Image  style = {styles.ima} source={ruta} />
       </TouchableOpacity>
       <TouchableOpacity>
       <Image style = {styles.trash} source={require('../assets/img/trash.png')}/>
       </TouchableOpacity>
       </View>
       
   </SafeAreaView>     
  );
};
const styles = StyleSheet.create({
    container: {
       flexDirection:"column",
      margin:10,
      borderRadius:10,
      backgroundColor:colors.whiteButtons,
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
        marginLeft:250,
        marginTop:-45,

    },
    row:{
        marginTop:-40,
        flexDirection:"row",
        //justifyContent: 'flex-start',

    },
    tipo:{
        color:"#0C1722",
        fontSize:14,
        marginLeft:123,
        marginTop:20,
        
      
    },
    vendedor:{
        color:"#838383",
        marginLeft:119,
    },
});

export default ProductosF;
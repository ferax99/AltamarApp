import React from 'react';
import {Text,StyleSheet,View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import { useState,useEffect } from 'react/cjs/react.development';
import Axios from "axios";
import Server from "../serverData";

const sinConexion = "https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png";

const ProductoF = ({ruta, tipo, vendedor,id}) =>{
    const [foto, setFoto] = useState(sinConexion);
  const [obid, setObid] = useState('');
  const [state, setState] = useState({});

  useEffect(() => {
    fetchImg();
    //console.log("data:   "+data);
    return () => {
      setState({});
    }
  }, []);



  const fetchImg = () => {
    Axios.post(Server + "/getFotoPez", { nombre:tipo }
    ).then((response) => {
        if(response.data!="False"){
        setFoto(response.data);}
        else{
            setFoto(sinConexion);
        }
    }).catch(() => {
        console.log("ERROR");
        setFoto(sinConexion);

    });
    }

  return(
   <SafeAreaView style = {styles.container}>
       <Text style = {styles.tipo}>{tipo}</Text>
       <Text style = {styles.vendedor}>{vendedor}</Text>
       <View >
      
        <Image  style = {styles.ima} source={{uri:foto}} />
       
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
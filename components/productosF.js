import React, { useState ,useEffect} from "react";

import {View, Text, StyleSheet, Image,} from "react-native";
import { SafeAreaView } from 'react-navigation';
import Axios from "axios";
import colors from '../assets/colors/colors';
import Server from "../serverData";
import { TouchableOpacity } from "react-native-gesture-handler";
const sinConexion = "https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png" ;

const ProductosF = ({ data}) => {
  const [foto, setFoto] = useState('https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png');
    const [obid,setObid] =useState('');
    const [state, setState] = useState({});
    useEffect(() => {
        fetchData();
        return () => {
            setState({});
        }
    }, []);

    const fetchData = () => {
        Axios.post(Server + "/getFotoPez", {nombre: data.tipo }
        ).then((response) => {
            if(response.data!="False"){
            setFoto(response.data);}
            else{
                setFoto(sinConexion);
            }
            //console.log(response.data)
        }).catch(() => {
            console.log("ERROR");
            setFoto(sinConexion);

        });
    }



  return (
    <TouchableOpacity style={styles.container}>
        <View>
            <Image  style = {styles.ima} source={require("../assets/peces/dorado.jpg")} />   
        </View>
        <Text style = {styles.tipo}>{data.tipo}</Text>
        
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width:"90%",
    margin:10,
    borderRadius:10,    
    backgroundColor:colors.whiteButtons,
    justifyContent:"center"
    
  },
  
  ima:{
    width:85,
    height:85,
    marginVertical:10,
    resizeMode:"contain",
    justifyContent:"flex-start",
  },
  tipo: {
    color:"#0C1722",
    fontWeight:"bold",
    fontSize:14,
   
    textAlign:"center",
  },
});

export default ProductosF;

import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, _View, } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Axios from "axios";
import colors from '../assets/colors/colors';
import Server from "../serverData";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import userData from '../local_data/userData.json';

const sinConexion = "https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png" ;


const ProductosR = ({ data }) => {
  const [foto, setFoto] = useState(sinConexion);
  const [state, setState] = useState({});
  const [tipo, setTipo] = useState("");
  const [esFav, setEsFav] = useState(0);
  const [listo,setListo] = useState(0);
  //console.log(data);
  useEffect(() => {
    if(data){
      setTipo(data.tipo);
      fetchImg();
      isFav();
      setListo(1);
  }
    
    
    return () => {
    }
  }, []);

  const fetchImg = async() => {
    await Axios.post(Server + "/getFotoPez", { nombre:data.tipo }
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
  
  
  const isFav = () => {
    Axios.post(Server + "/getFavProd", { id:data._id , telefono:userData.telefono}
    ).then((response) => {
     
     if(response.data==true){
       setEsFav(1)
     }
    }).catch(() => {
      console.log("ERROR");
      setFoto(sinConexion);

    });
  }
  const marcarFav =()=>{
    setEsFav(1)
    
    Axios.post(Server + "/InsertaFavProd", { favorito:data._id , telefono:userData.telefono}
    ).then((response) => {
      //console.log(response.data)
    }).catch(() => {
      console.log("ERROR");
    });
  }
  

  const marcarNoFav=()=>{
    setEsFav(0);
    
    Axios.delete(Server + "/deleteFav", { data:  { favorito:data._id , telefono:userData.telefono} }
    ).then((response) => {
      //console.log(response.data)
    }).catch(() => {
      console.log("ERROR");
    });
    
  }
  const toggle=()=>{
    if (esFav==0){
      marcarFav();
    }
    else{
      marcarNoFav();
    }
  }


  return (
    <View>

      {(listo==1) &&
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.ima} source={{ uri: foto }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.tipo}>{tipo}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.posi} onPress={() => {toggle()}}  >
          <Image style={esFav ==1? styles.fav : styles.nofav} source={require("../assets/img/favorito.png")} />
        </TouchableOpacity>
      </View>}
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.9,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.whiteButtons,
    flexDirection: "row",

  },

  ima: {
    marginLeft:30,
    width: 80,
    height: 60,
    marginVertical: 10,
    resizeMode: "contain",
  },
  
  nofav: {
    
    width: 35,
    marginLeft:40,
    marginTop:22,
    height: 35,
    resizeMode: "contain",
    tintColor:"black",

  },
  fav: {
    
    width: 35,
    marginLeft:40,
    marginTop:22,
    height: 35,
    resizeMode: "contain",
    tintColor:"#ffd700",

  },
  tipo: {
    color: "#0C1722",
    fontWeight: "bold",
    width:120,
    fontSize: 14,
    marginTop: 35,
    marginLeft: 20,
    textAlign: "center",
    paddingRight: 10,
  },
});

export default ProductosR;

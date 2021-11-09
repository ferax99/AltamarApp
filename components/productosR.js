import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Axios from "axios";
import colors from '../assets/colors/colors';
import Server from "../serverData";
import { TouchableOpacity } from "react-native-gesture-handler";
const sinConexion = "https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png";
import { Dimensions } from 'react-native';
const windowWidth = Dimensions.get('window').width;
import userData from '../local_data/userData.json';

const ProductosR = ({ data }) => {
  const [foto, setFoto] = useState('https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg');
  const [state, setState] = useState({});
  const [tipo, setTipo] = useState("");
  const [esFav, setEsFav] = useState(0);
  //console.log(data);
  useEffect(() => {
    fetchData();
    isFav();
    if(data){setTipo(data.tipo)}
    return () => {
      
    }
  }, []);

  const fetchData = () => {
    Axios.post(Server + "/getFotoPez", { nombre: tipo}
    ).then((response) => {
      if (response.data != "False") {
        setFoto(response.data);
      }
      else {
        setFoto(sinConexion);
        
      }
      //console.log(response.data)
    }).catch(() => {
      console.log("ERROR");
      setFoto(sinConexion);

    });}
  
  
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

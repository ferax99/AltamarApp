import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Axios from "axios";
import colors from '../assets/colors/colors';
import Server from "../serverData";
import { TouchableOpacity } from "react-native-gesture-handler";
const sinConexion = "https://3.bp.blogspot.com/-d6krKQ4Jp0Y/XJvpi8vCdpI/AAAAAAAAJcg/wfSjA28SGBwZpV70m6X_M82rsJOWrPEpQCEwYBhgL/s1600/Nemo%2B1.png";

const ProductosF = ({ tipo }) => {
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




  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image style={styles.ima} source={{uri:foto}}/>
      </View>
      <Text style={styles.tipo}>{tipo}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.whiteButtons,
    justifyContent: "center"

  },

  ima: {
    width: 85,
    height: 85,
    marginVertical: 10,
    resizeMode: "contain",
    justifyContent: "flex-start",
  },
  tipo: {
    color: "#0C1722",
    fontWeight: "bold",
    fontSize: 14,

    textAlign: "center",
  },
});

export default ProductosF;

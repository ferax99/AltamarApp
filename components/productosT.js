import React, { useState, useEffect } from "react";

import { View, Text, StyleSheet, Image, } from "react-native";
import { SafeAreaView } from 'react-navigation';
import Axios from "axios";
import colors from '../assets/colors/colors';
import Server from "../serverData";
import { TouchableOpacity } from "react-native-gesture-handler";

const sinConexion = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Fish_icon_%28The_Noun_Project_27052%29.svg/2048px-Fish_icon_%28The_Noun_Project_27052%29.svg.png" ;

import { useNavigation } from '@react-navigation/native';

const ProductosT = ({ ruta, tipo }) => {
  const [foto, setFoto] = useState(sinConexion);
  const [obid, setObid] = useState('');
  const [state, setState] = useState({});

  const navigation = useNavigation();
  
  useEffect(() => {
    fetchImg();
    return () => {
      setState({});
    }
  }, []);

  const fetchImg = () => {
    Axios.post(Server + "/getFotoPez", { nombre: tipo.nombre }
    ).then((response) => {
      if (response.data != "False") {
        setFoto(response.data);
      }
      else {
        setFoto(sinConexion);
      }
    }).catch(() => {
      console.log("ERROR");
      setFoto(sinConexion);

    });
  }



  return (
    <TouchableOpacity style={styles.container} key={tipo._id}
      onPress={() => navigation.navigate('Búsqueda', {
        search: tipo.nombre,
        filtroUbicacion: '',
        filtroPrecioMax: '',
        filtroPrecioMin: ''
      })}>
      <View>
        <Image style={styles.ima} source={{ uri: foto }} />
      </View>
      <Text style={styles.tipo}>{tipo.nombre}</Text>

    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "90%",
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.whiteButtons,
    elevation: 5,
    flexDirection: "row",
    flexWrap: "nowrap",


  },

  ima: {
    width: 80,
    height: 60,
    marginVertical: 10,
    resizeMode: "contain",
    justifyContent: "flex-start",
  },
  tipo: {
    color: "#0C1722",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 35,
    marginLeft: 20,
    textAlign: "center",
    paddingRight: 10,
  },
});

export default ProductosT;

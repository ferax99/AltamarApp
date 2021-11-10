import React from 'react';
import { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Image, SafeAreaView, ScrollView } from 'react-native';
import Temporada from '../components/temporada';
import Recomendado from '../components/recomendado';
import colors from '../assets/colors/colors';
import axios from 'axios';
import Server from '../serverData'
import Frecuentes from '../components/frecuentes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
  // const telefono = navigation.getParam("telefono");
  const [listOfFish, setListOfFish] = useState([]);

  const [search, setSearch] = useState('')
  var ValueSearch = search;

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(Server + "/readTop")
      setListOfFish(data)
    }
    fetchPostList()

  }, [setListOfFish]);

  const guarda = async (tipo) => {
    if (tipo==='') {
      console.log('no guarda')
    } else {
      try {
        let x = await AsyncStorage.getItem("historial");
        if (x == null) {
          x = [tipo];
          const historial = JSON.stringify(x)
          await AsyncStorage.setItem("historial", historial);
          console.log("guardado")
        }
        else {
          let datos = JSON.parse(x)
          if (datos.length > 6) {
            datos.shift();
  
          }
          datos.push(tipo);
          const historial = JSON.stringify(datos);
          await AsyncStorage.setItem("historial", historial);
          console.log("guardado")
  
        }
  
  
  
      } catch (err) {
        console.log(err)
      }
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TextInput
          style={styles.search}
          value={search}
          placeholder="Buscar"
          onChangeText={(search) => setSearch(search)}
          onSubmitEditing={() => {guarda(search); navigation.navigate('Búsqueda', {
            search: ValueSearch,
            filtroUbicacion: '',
            filtroPrecioMax: '',
            filtroPrecioMin: ''
          })}}
        />
        <Image style={styles.ima} source={require('../assets/img/search-icon.png')} />
      </View>

      <ScrollView>
        <Frecuentes />
        <Temporada lista={listOfFish} />
        <Recomendado />
      </ScrollView>

z
    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    // padding: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',


  },
  search: {
    marginTop: 17,
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 48,
    paddingLeft: 20,


  },
  ima: {
    width: 15,
    height: 15,
    marginRight: 20,
    marginTop: 30,
    right: "45%",
  },
  row: {
    flexDirection: "row",
    padding: 30,

  },
  productosT: {
    height: "30%",
    marginHorizontal: -45,
    flex: 1,

  }
});

export default Home;
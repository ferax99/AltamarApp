import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import Server from "../serverData";
import axios from 'axios';
import Busqueda from '../components/busqueda'
import colors from '../assets/colors/colors'


const SearchResult = ({ navigation }) => {
  const search = navigation.getParam("search");

  const [productos, setProductos] = useState([]);


  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios(Server + "/BuscaProducto/" + search)
      if (data !== "empty") {
        let iterableResponse = data.map(elem => Object.values(elem))
        setProductos(iterableResponse)
      } else {
        Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
        navigation.navigate("Home")
      }
    }
    fetchPostList()

  }, [setProductos]);

  return (
    <View style={styles.general}>
      <View style={styles.filterRow}>
          <View
            style={styles.filter}
          />
          <View
            style={styles.filter}
          />
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => navigation.navigate("Filtros")} >
            <Image 
              style={styles.filterIcon}
              source={require('../assets/img/filter.png')}
            />
          </TouchableOpacity>
        </View>
      <ScrollView contentContainerStyle={styles.contenedor}>
        <Busqueda productos={productos} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  general: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contenedor: {
    alignContent: "center",
    height: "100%",
    marginLeft: 15,
  },
  filter: {
    marginRight: "5%",
    height: 19,
    width: 105,
    resizeMode: "contain",
    backgroundColor: colors.whiteButtons,
    elevation: 5,
    borderRadius: 6,
    
  },
  filterRow: {
    marginTop: 10,
    marginLeft: "9%",
    marginRight: "9%",
    height: 21,
    flexDirection: "row",
    backgroundColor: colors.background
  },
  filterIcon: {
    marginLeft: "6%",
    left: "100%",
    width: 21,
    height: 21,
    alignSelf: "flex-end"
  },
});

export default SearchResult;
import React, { useEffect, useState, useIsFocused } from 'react';
import { Text, StyleSheet, View, Alert, ScrollView, Image, TouchableOpacity } from 'react-native';
import Server from "../serverData";
import axios from 'axios';
import Busqueda from '../components/busqueda'
import colors from '../assets/colors/colors'


const SearchResult = ({ navigation }) => {
  var search = navigation.getParam("search");
  // search.charAt(0).toUpperCase();
  const filtroUbicacion = navigation.getParam("ubicacion");
  const filtroPrecioMax = navigation.getParam("precioMax");
  const filtroPrecioMin = navigation.getParam("precioMin");

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchTipo = async () => {
      const { data } = await axios(Server + "/BuscaProducto/" + search)
      if (data !== "empty") {
        let iterableResponse = data.map(elem => Object.values(elem))
        setProductos(iterableResponse)
      } else {
        Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
        navigation.navigate("Home")
      }
    }
    const fetchUbicacion = async () => {
      const { data } = await axios(Server + "/filtroUbicacion/" + search + "/" + filtroUbicacion)
      if (data !== "empty") {
        let iterableResponse = data.map(elem => Object.values(elem))
        setProductos(iterableResponse)
      } else {
        Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
        navigation.navigate("Home")
      }
    }
    const fetchRango = async () => {
      const { data } = await axios(Server + "/filtroRangoPrecio" + "/" + filtroPrecioMax + "/" + filtroPrecioMin + "/" + search)
      if (data !== "empty") {
        let iterableResponse = data.map(elem => Object.values(elem))
        setProductos(iterableResponse)
      } else {
        Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
        navigation.navigate("Home")
      }
    }
    const fetchDobleFiltro = async () => {
      const { data } = await axios(Server + "/filtroDoble" + "/" + filtroPrecioMax + "/" + filtroPrecioMin + "/" + filtroUbicacion + "/" + search)
      if (data !== "empty") {
        let iterableResponse = data.map(elem => Object.values(elem))
        setProductos(iterableResponse)
      } else {
        Alert.alert('Producto no encontrado', 'No existen productos que coincidan', [{ text: 'OK' }]);
        navigation.navigate("Home")
      }
    }

    if (filtroUbicacion !== undefined && filtroPrecioMax === undefined && filtroPrecioMin === undefined) {
      fetchUbicacion()
    }
    else if (filtroUbicacion === undefined && filtroPrecioMax !== undefined && filtroPrecioMin !== undefined) {
      fetchRango()
    }
    else if (filtroUbicacion !== undefined && filtroPrecioMax !== undefined && filtroPrecioMin !== undefined) {
      fetchDobleFiltro()
    } else {
      fetchTipo()
    }

  }, [setProductos]);

  return (
    <View style={styles.general}>
      <View style={styles.filterRow}>
        <View
          style={styles.filter}
        >
          <Image
            style={styles.locationFilterIcon}
            source={require('../assets/img/locationIcon.png')}
          />
          <Text style={{ fontWeight: "bold", color: colors.blackText, fontSize: 12 }} >
            {filtroUbicacion}
          </Text>
        </View>
        <View
          style={styles.filter}
        >
          <Image
            style={styles.moneyFilterIcon}
            source={require('../assets/img/moneyIcon.png')}
          />
          <Text style={{ fontWeight: "bold", color: colors.blackText, fontSize: 12 }}>
            ₡{filtroPrecioMin}-₡{filtroPrecioMax}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => navigation.navigate("Filtros", { search: search, precioMax: filtroPrecioMax, precioMin: filtroPrecioMin, ubicacion: filtroUbicacion })} >
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
    flexDirection: "row",
    alignItems: "center"

  },
  filterHidden: {
    marginRight: "5%",
    height: 19,
    width: 105,
    resizeMode: "contain",
    // backgroundColor: colors.whiteButtons,
    // elevation: 5,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center"

  },
  filterRow: {
    marginTop: 10,
    marginLeft: "9%",
    marginRight: "9%",
    height: 21,
    flexDirection: "row",
  },
  filterIcon: {
    width: 21,
    height: 21,
  },
  filterButton: {
    marginLeft: "18%",
    width: 21,
    height: 21,
    alignSelf: "flex-end",
  },
  moneyFilterIcon: {
    width: 15,
    height: 8,
    marginHorizontal: 5,
    resizeMode: 'contain'
  },
  locationFilterIcon: {
    width: 8,
    height: 12,
    marginHorizontal: 5,
    resizeMode: 'contain'
  },
});

export default SearchResult;
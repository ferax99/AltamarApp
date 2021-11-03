import React from 'react';
import { useState, useEffect } from 'react';
import { TextInput, StyleSheet, View, Image, SafeAreaView } from 'react-native';
import Temporada from '../components/temporada';
import colors from '../assets/colors/colors';
import axios from 'axios';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Home = ({ navigation }) => {
  const telefono = navigation.getParam("telefono");
  const [listOfFish, setListOfFish] = useState([]);

  const [search, setSearch] = useState('')
  var ValueSearch = search;

  useEffect(() => {
    const fetchPostList = async () => {
      const { data } = await axios("http://localhost:3001/readTop")
      setListOfFish(data)
    }
    fetchPostList()

  }, [setListOfFish]);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>

        <TextInput
          style={styles.search}
          value={search}
          placeholder="Buscar"
          onChangeText={(search) => setSearch(search)}
          onSubmitEditing={() => navigation.navigate('SearchResult')}
        />
        <Image style={styles.ima} source={require('../assets/img/search-icon.png')} />
      </View>

      <View style={styles.productosT}>
        <Temporada lista={listOfFish} />
      </View>

    </SafeAreaView>

  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    padding: 30,
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'center',


  },
  search: {
    marginBottom: 22,
    marginTop: 17,
    height: 40,
    width: "100%",
    backgroundColor: "white",
    borderRadius: 48,
    paddingLeft: 20


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

  },
  productosT: {
    height: "30%",
    marginHorizontal: -45,
    flex: 1,
    
  }
});

export default Home;
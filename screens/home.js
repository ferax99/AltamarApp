import React from 'react';
import { useState, useEffect } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Temporada from '../components/temporada';
import Recomendado from '../components/recomendado';
import colors from '../assets/colors/colors';
import axios from 'axios';
import ServerData from '../serverData';
import Frecuentes from '../components/frecuentes';
import { ScrollView } from 'react-native-gesture-handler';

const Home = ({ route,navigation }) => {

  //const {telefono} = route.params;
  const [listOfFish, setListOfFish] = useState([]);
  
  useEffect(() => {
    //console.log(telefono)
    const fetchPostList = async () => {
      const { data } = await axios(ServerData + "/readTop")
      setListOfFish(data)
    }
    fetchPostList()

  }, [setListOfFish]);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Frecuentes />
        <Temporada lista={listOfFish} />
        <Recomendado />

      </ScrollView>

    </View>

  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,


  }
});

export default Home;
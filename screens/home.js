import React from 'react';
import { useState, useEffect } from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Temporada from '../components/temporada';
import Recomendado from '../components/recomendado';
import colors from '../assets/colors/colors';
import axios from 'axios';
import ServerData from '../serverData';
import Frecuentes from '../components/frecuentes';
import { ScrollView } from 'react-native-gesture-handler';
const Home = ({navigation}) =>{
    const telefono = navigation.getParam("telefono");
    const [listOfFish, setListOfFish] = useState([]);

    useEffect(() => {
      const fetchPostList = async () => {
        const {data} = await axios(ServerData+"/readTop")
          setListOfFish(data)
      }
      fetchPostList()

  }, [setListOfFish]);
  return(
    <View style = {styles.container}>
      <ScrollView>
      <Frecuentes/>
      <Temporada lista = {listOfFish}/>
      <Recomendado />

      </ScrollView>
      
     </View>
        
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,    

     
    }});

export default Home;
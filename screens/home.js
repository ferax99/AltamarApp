import React from 'react';
import { useState, useEffect } from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Temporada from '../components/temporada';
import colors from '../assets/colors/colors';
import axios from 'axios';

const Home = ({navigation}) =>{
    const telefono = navigation.getParam("telefono");
    const [listOfFish, setListOfFish] = useState([]);

    useEffect(() => {
      const fetchPostList = async () => {
          const {data} = await axios("http://localhost:3001/readTop")
          setListOfFish(data)
      }
      fetchPostList()

  }, [setListOfFish]);
  return(
    <View style = {styles.container}>
      <Temporada lista = {listOfFish}/>
    
     </View>
        
  );
};
const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center',

     
    }});

export default Home;
import React from 'react';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import {
    StyleSheet,
    Text,
    View,
    Image,

} from "react-native";


export default class Favoritos extends React.Component{
    

    render() {
        
        const obtener = () =>{
            const [listOfProd, setListOfProd] = useState([]);
            const guarda = listOfProd.map(datos => {
                const obj = {foto:datos.foto};
                return obj;
            });
            useEffect(() => {
                axios.get("http://localhost:3001/read/peces"
                ).then((response)=>{
                setListOfProd(response.data);
                //console.log(response);
                }).catch(()=> {
                console.log("ERROR");
                });
            }, []);
            {console.log(guarda.foto)}
        };
        
        return(
            
            <View style={styles.container}>
                <Image
                    style={{width:150, height:150}}
                    ///home/danieloaiza/Downloads/pez.jpg
                    source={require('/home/danieloaiza/Downloads/pez.jpg')}
                    hhahhas
                />
            </View>
            
        );
    }
};
const styles = StyleSheet.create({
    container: {
      marginTop:20,
      padding:30,
      backgroundColor: '#FFFFFF',
      flex: 1,    
      justifyContent: 'center',
      alignContent:'center'
     
    }});

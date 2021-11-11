import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
import Favoritos from "../screens/favoritos";
import Home from "../screens/home";
import Perfil from "../screens/perfil";
import MiPerfil from "../screens/miPerfil";
import RutasMisProductos from "./rutasMisProductos";
import HomeRoute from "./homeRoute";
import PerfilRoute from "./perfilRoute";
import { Text, StyleSheet, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rolColor ="#EE7333"; //#00A3FF
//i
const TabBar = () => {
    const [rol, setRol] = useState("");
    const [rolColor, setRolColor] = useState("#EE7333");

    useEffect(() => {
        setNav();
      }, []);

    const setNav = async () => {
        try {
          const x = await AsyncStorage.getItem("rol");
          if (x !=null) {
              setRol(x);
              if(x==="vendedor"){setRolColor("#00A3FF")}
              else{
                  setRolColor("#EE7333")
              }
          }
        } catch (err) {
          console.log(err)
        }
      }


    return (
        <Tab.Navigator
            screenOptions={{
                style: {
                    
                }
            }}
        >
            {(rol != "vendedor") &&
                <Tab.Screen name="Favoritos"  component={Favoritos} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent:"center",top:10}}>
                            <Image
                            source={require('../assets/img/favoritos.png')}
                            resizeMode="contain"
                                style={{ 
                                width:30,
                                height:30,
                                marginBottom:15,
                            
                                tintColor:focused? rolColor: "#838383"
                            }}
                                 />
                        </View>
                    )
                }} />
            }
            {
                (rol == "vendedor") &&
                <Tab.Screen name="MisProductos "  component={RutasMisProductos} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{alignItems:'center',justifyContent:"center",top:10}}>
                            <Image
                            source={require('../assets/img/opciones2.png')}
                            resizeMode="contain"
                                style={{ 
                                    width:30,
                                    height:30,
                                    marginBottom:15,
                            
                                tintColor:focused? rolColor: "#838383"
                            }}
                                 />
                        </View>
                    )
                }} />
            }
            <Tab.Screen name="buscar" component={HomeRoute}
            options={{
                headerShown: false ,
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:"center",top:10}}>
                        <Image
                        source={require('../assets/img/busqueda2.png')}
                        resizeMode="contain"
                            style={{ 
                                width:30,
                                height:30,
                                marginBottom:15,
                        
                            tintColor:focused? rolColor: "#838383"
                        }}
                             />
                    </View>
                )
            }}
            />
            <Tab.Screen name="Perfil" component={PerfilRoute} options={{ headerShown: false }} 
            options={{
                tabBarIcon: ({ focused }) => (
                    <View style={{alignItems:'center',justifyContent:"center",top:10}}>
                        <Image
                        source={require('../assets/img/miperfil.png')}
                        resizeMode="contain"
                            style={{ 
                                width:30,
                                height:30,
                                marginBottom:15,
                        
                            tintColor:focused? rolColor: "#838383"
                        }}
                             />
                    </View>
                )
            }}
            />
        </Tab.Navigator>
    );
};

export default TabBar;
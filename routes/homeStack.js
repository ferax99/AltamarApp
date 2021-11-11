import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from '../screens/login';
import LoginPw from "../screens/loginPw";
import { useState, useEffect } from "react";
import ChooseRole from '../screens/chooseRole';
import CreateAccountBuyer from '../screens/createAccountBuyer';
import CreateAccountSeller from '../screens/createAccountSeller';

import TabBar from './tabBar';
const Stack = createNativeStackNavigator();
const HomeStack = () => {

  const [logged, setLogged] = useState(0);
  useEffect(() => {
    //vaciar();
    load();
  }, []);

  const load = async () => {
    try {
      const x = await AsyncStorage.getItem("id");
      if (x != null) {
        setLogged(1);
      }
      else {
        setLogged(0);
      }
    } catch (err) {
      console.log(err)
    }
  }
  
  


  const vaciar = async () => {
    try {
      
      // await AsyncStorage.setItem("rol","vendedor");
      
      
      await AsyncStorage.removeItem("telefono");
      await AsyncStorage.removeItem("id");
      await AsyncStorage.removeItem("nombre");
      await AsyncStorage.removeItem("rol");
      await AsyncStorage.removeItem("ubicacion");
      await AsyncStorage.removeItem("cedula");

      await AsyncStorage.removeItem("color");

    } catch (err) {
      console.log(err)
    }

  }




  return (
    <NavigationContainer>
      {
        (logged == 1) && <TabBar />
      }
      {
        (logged == 0) &&
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="LoginPw"
            component={LoginPw}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ChooseRole"
            component={ChooseRole}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FTabBar"
            component={TabBar}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Creando Vendedor"
            component={CreateAccountSeller}
            options={{
              title: "Creando Cuenta",
              headerShown: true,
              headerTitleAlign: 'center'
            }}
          />

          <Stack.Screen
            name="Creando Comprador"
            component={CreateAccountBuyer}
            options={{
              title: "Creando Cuenta",
              headerShown: true,
              headerTitleAlign: 'center'
            }}
          />

        </Stack.Navigator>
      }


    </NavigationContainer>

  );
};



export default HomeStack;

/*
await AsyncStorage.setItem("telefono", tex);
await AsyncStorage.getItem("historial");*/
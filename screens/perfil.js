import React from "react";
import { View, Text } from "react-native";
import { useState, useEffect } from "react/cjs/react.development";
import Catalogo from "../components/catalogo";
import Axios from "axios";
import UserData from "../userData";
import Server from "../serverData";


const Perfil = () => {
    const [publicaciones, setPublicaciones] = useState([]);

    useEffect(() => {
        fetchPublicaciones();


        return () => {

        }
    }, [])

    //console.log(publicaciones)

    const fetchPublicaciones = () => {
        const api = Server + "/read/" + UserData.id;
        //console.log(api)
        fetch(api)
            .then((response) => response.json())
            .then((responseJson) => {
                let iterableResponse = Object.values(responseJson)
                iterableResponse.map(item => console.log(item));
                setPublicaciones(iterableResponse);
            }).catch((error) => {
                console.log(error);
            });
    }

    let simpleOrders = publicaciones.map(order => order.map(elem => elem.tipo)
    )

    const lista = () => {

        return (
            <View>

                {publicaciones.map(order => order.map(elem =>
                    <Text key={elem._id}>
                        {elem.tipo}
                    </Text>)
                )}
            </View>
        )
    }
    console.log(simpleOrders)
    return (
        <View>

            {lista()}

            <Catalogo />
        </View>

    )
}
export default Perfil
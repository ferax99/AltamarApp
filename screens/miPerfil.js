import React from "react";
import { View } from "react-native";
import MiInfo from "../components/miInfo";


const MiPerfil=({ navigation })=>{
    return(
        <View>
            <MiInfo navigation={navigation}/>
        </View>
    )
}
export default MiPerfil
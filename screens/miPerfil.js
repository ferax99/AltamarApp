import React from "react";
import { View , ScrollView} from "react-native";
import MiInfo from "../components/miInfo";
import Frecuentes from "../components/frecuentes"



const MiPerfil=({ navigation })=>{
    return(
        <View>
            <MiInfo navigation={navigation}/>
            <ScrollView>
                <Frecuentes />
            </ScrollView>
        </View>
    )
}
export default MiPerfil
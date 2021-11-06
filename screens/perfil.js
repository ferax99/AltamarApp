import * as React from 'react';
import colors from "../assets/colors/colors";
import { TouchableOpacity, StyleSheet, Image, SafeAreaView, Text, TextInput, Alert, View } from 'react-native';

const Perfil = ({ navigation }) => {
    const kk = "Ruperta Canijos";
    const pataDeCamello = kk.split(' ');
    return(
        <View style={styles.container}>
            <View style={styles.fondo}>
            
                <Text style={styles.nombre}>
                    {pataDeCamello[0]}
                </Text>
                <Text style={styles.apellido}>{pataDeCamello[1]}</Text>
                <Text style={styles.resto}>
                    Desamparados, San Jose</Text>
                <Text style={styles.resto}>
                    <TouchableOpacity>
                        <Image style={styles.num} src={require('../assets/img/call-icon.png')}/>
                    </TouchableOpacity>
                    88965421
                </Text>
                
            </View>
            
        </View>
    )
    
}
const styles = StyleSheet.create({
    container: {
        //paddingTop: 50,
        flex: 1,
        backgroundColor: colors.background,
        flexWrap:"wrap",
        zIndex:-1
    },
    fondo: {
        backgroundColor: colors.orangeUI,
    },
    num: {
        top:"25%",
        width: 40,
        height: 40,
        resizeMode: "contain",

        zIndex: 999
        //left: "65%",
        //marginTop: -50,
    },
    nombre:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 40,
        //margin:5,
        marginTop:20,
        marginLeft: 60,
        
        fontWeight: 'bold'
    },
    apellido:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 40,    
        marginLeft: 60,
        //marginBottom:4,
        fontWeight: 'bold'
    },
    resto:{
        color: colors.whiteButtons,
        alignContent: 'center',
        fontSize: 20,    
        marginLeft: 60,
        marginBottom:10,
        //fontWeight: 'bold'
    }
});

export default Perfil;
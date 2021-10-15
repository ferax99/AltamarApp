import React from 'react';
import { useState } from "react";
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import colors from '../assets/colors/colors';
import AddButton from '../components/addButton';
import SkipButton from '../components/skipButton';


const MyProducts = ({ navigation }) => {
    const [listOfProd, setListOfProd] = useState([]);
    const mensaje = "Omitir"
    return (
        <SafeAreaView style={styles.container}>
            <AddButton navigation={navigation} />
            <SkipButton navigation={navigation} mensaje={mensaje} onPress={() => { navigation.navigate('Info') }} />
        </SafeAreaView>


    )

}
const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.background,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontFamily: "TT Norms",
    },

});

export default MyProducts
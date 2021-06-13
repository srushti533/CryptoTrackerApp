import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const Header=()=>{
    return(
        <View style={headerContainer}>
            <Text style={header}>
                Crypto App
            </Text>

        </View>
    )
}

const styles=StyleSheet.create({
    headerContainer:{
        display:'flex',
        marginTop:55,
        alignItems:'center'
    },
    header:{
        fontWeight='bold',
        fontSize:20,
    }
})

const {headerContainer,header}=styles;
export default Header;

// import "react-native-gesture-handler";
// import { registerRootComponent } from "expo";

// import App from "../../App";

// // registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// // It also ensures that whether you load the app in Expo Go or in a native build,
// // the environment is set up appropriately
// registerRootComponent(App);

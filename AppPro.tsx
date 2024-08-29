import React from "react";
import {View,Text, useColorScheme, StyleSheet}   from 'react-native';

function AppPro(): JSX.Element{
    const isDarkMode = useColorScheme() === 'dark'
    return(
        <View style={styles.container}>
            <Text style={isDarkMode ? 'style.whiteText' : 'Style.BlackText'}> Hello Buddyss</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        alignContent:'center',
    },
    whiteText:{
        color: '#Ffffff',
    },
    BlackText:{
        color: '#000',
    },
})

export default AppPro
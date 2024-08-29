import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>scroll</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>And More..</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
    },
    container:{
        padding:8,
        flex:1,
        flexDirection:"row",
        color:"#efefef"
    },
    card:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:5,
        borderRadius:5,
    },
    cardElevated:{
        backgroundColor:'#EF5354',
        elevation:8,
        shadowOffset:{
            width:1,
            height:1,
        },
        shadowColor:"#efefef",
        shadowOpacity:0.2,
        shadowRadius:.5
    }

})
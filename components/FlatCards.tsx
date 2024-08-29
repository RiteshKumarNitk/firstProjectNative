import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
                <Text >coral</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
                <Text >orangered</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
                <Text >orange</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
                <Text >orange</Text>
        </View> 
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    headingText:{
        backgroundColor:"#efefef",
        fontSize:24,
        color:'black',
        fontWeight:"bold",
        paddingHorizontal:10,
        textAlign:'center',
    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        width:100,
        height:100,
        backgroundColor:'tomato',
        margin:8,
        borderRadius:4,
    },
    cardOne:{
        backgroundColor:"coral"
    },
    cardTwo:{
        backgroundColor:"orangered"
        
    },
    cardThree:{
        backgroundColor:"orange"
    }
    
})
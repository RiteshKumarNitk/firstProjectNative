import { StyleSheet,Image, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Tranding Places</Text>
      <View style={[styles.card,styles.cardElevated]}> 
      <Image
        style={styles.cardImg}
        source={{
          uri: 'https://images.pexels.com/photos/14247658/pexels-photo-14247658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />
      <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Hawa Mahal</Text>
        <Text style={styles.cardLabel}>Pink City</Text>
        <Text style={styles.cardDiscription}>The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur, and extends to the Zenana, or women's chambers. Hawa Mahal famously known as the “ palace of winds “ has one of the best architecture in Jaipur, Rajasthan </Text>
        <Text style={styles.cardFooter}>Pink City</Text>
      </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8,
        
    },
    card:{
        width:360,
        borderRadius:10,
        overflow: 'hidden',
        marginVertical:12,
        marginHorizontal:16,
        
    },
    cardElevated:{
        backgroundColor:'#efefef',
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        }
        
        
    },
    cardImg:{
       overflow:'hidden',
       height:200,
       marginBottom:8,
       resizeMode:'cover',
    },
    cardBody:{
        paddingHorizontal:12,
        flex:1,
        flexGrow:1,
    },
    cardTitle:{
        fontSize:22,
        fontWeight:'bold',
        color:'#000000',
        marginBottom:12,
    },
    cardLabel:{
        fontSize:16,
        marginBottom:6,
        color:'#000000',
    },
    cardDiscription:{
        fontSize:20,
        marginBottom:6,
        flexShrink:1,
        color:'#242B2E',
        
    },
    cardFooter:{
        fontSize:12,
        color:'#000000',
        marginBottom:12,
    },
})
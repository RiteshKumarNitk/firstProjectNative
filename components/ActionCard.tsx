import { StyleSheet, Text, View ,Linking, Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {

    function openWebsite(websiteLink:string){
        Linking.openURL(websiteLink)
    }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.ElevatedCard]}>
        <Text style={styles.headingContainer}></Text>
        <Text style={styles.headerText}>
            What's new in js es-12
        </Text>
        <Image style={styles.cardimg} source={{uri:'https://www.abhibus.com/blog/wp-content/uploads/2023/06/Top-10-Places-to-Visit-in-Jaipur-How-to-Reach-Best-Time-Tourist-Attractions.jpg'}}/>
        

        <View style={styles.headingContainer}>
                <Text numberOfLines={1} style={styles.headingContainer}>
                There are two ways to handle URLs that open your app.
                1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired
                You can handle these events with Linking.addEventListener- it calls callback with the linked URL
                2. If the app is not already open, it is opened and the url is passed in as the initialURL
                You can handle these events with Linking.getInitialURL- it returns a Promise that resolves to the URL, if there is one.
                </Text>
            </View>
            <View style={styles.FooterContainer} >
                <Text numberOfLines={3} style={styles.headingContainer}>
                There are two ways to handle URLs that open your app.
                1. If the app is already open, the app is foregrounded and a Linking 'url' event is fired
                You can handle these events with Linking.addEventListener- it calls callback with the linked URL
                2. If the app is not already open, it is opened and the url is passed in as the initialURL
                You can handle these events with Linking.getInitialURL- it returns a Promise that resolves to the URL, if there is one.
                </Text>
            </View>
            <View style={styles.FooterContainer}>
                <TouchableOpacity onPress={()=>openWebsite('https://www.abhibus.com/blog/places-to-visit-in-jaipur')}>
                        <Text> Read More</Text>
                </TouchableOpacity>
            </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{

    },
    card:{},
    headingContainer:{},
    ElevatedCard:{},
    headerText:{},
    cardimg:{
        height:250,
    },
    FooterContainer:{}
})
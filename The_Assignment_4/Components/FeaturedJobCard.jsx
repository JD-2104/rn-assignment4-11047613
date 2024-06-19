import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native';

const FeaturedJobCard = ({ imageUrl, textColour, imageAlt, bgColour, label, miniLabel, location, price, }) => {
  return (
    <>
    <View style={[styles.container, {backgroundColor: bgColour}]}>
        <Image 
        source={imageUrl} 
        alt={imageAlt} 
        style={styles.logo} />
        <Text style={[styles.label, {color: textColour}]}>{label}</Text>        
        <Text style={[styles.miniLabel, {color: textColour}]}>{miniLabel}</Text>
        <Text style={[styles.location, {color: textColour}]}>{location}</Text>
        <Text style={[styles.price, {color: textColour}]}>{price}</Text>
        
    </View>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 280,  
      height: 186, 
      marginVertical: 1,      
      borderRadius: 24, 
      margin: 15,         
      overflow: 'hidden',
      
    },
  
    label: {
      position: 'absolute',
      top: 18,
      left: 60,
      marginLeft: 10,
      paddingHorizontal: 5,
      paddingVertical: 2,
      borderRadius: 3,
      fontSize: 14,
      fontWeight: 'bold',      
    },

    price: {
      position: 'absolute',
      left: 20,
      bottom: 30,      
    },

    location: {
      position: 'absolute',
      right: 30,
      bottom: 30,      
    },

    miniLabel: {
      position: 'relative',
      left: 64,
      top: 4,
      fontWeight: 'ultralight',
      marginLeft: 10,
    },

    logo: {
      position: 'relative',
      top: 22,
      left: 20,
      width: 35,
      height: 35,
      padding: 15,
      paddingBottom: 20,
      borderRadius: 15,
      backgroundColor: 'white',
      resizeMode: 'cover',
    }

});

export default FeaturedJobCard;
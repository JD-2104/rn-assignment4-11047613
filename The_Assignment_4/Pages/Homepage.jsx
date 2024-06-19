import React from 'react'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import FeaturedJobCards from '../Components/FeaturedJobCard'
import PopularJobCard from '../Components/PopularJobCard'
import { ScrollView, FlatList, SafeAreaView, View, Pressable, Text, TextInput, StyleSheet, Image } from 'react-native';

const Filter = require( "../assets/Images/filter.png")
const Profile = require("../assets/Images/Profile.png")

const horizontalData = [
	{ key: '1', imageUrl: require("../assets/Images/apple.png"), imageAlt: "appleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", bgColour: "black", textColour: "white", },
	{ key: '2', imageUrl: require("../assets/Images/google.png"), imageAlt: "googleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", bgColour: "white", textColour: "black", },
	{ key: '3', imageUrl: require("../assets/Images/facebook.png"), imageAlt: "facebookImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", bgColour: "blue", textColour: "white", },
	{ key: '4', imageUrl: require("../assets/Images/burgerKing.png"), imageAlt: "burgerKing", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Burger King", bgColour: "yellow", textColour: "black", },
	{ key: '5', imageUrl: require("../assets/Images/beats.png"), imageAlt: "beatsImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Beats", bgColour: "white", textColour: "red", },
	{ key: '6', imageUrl: require("../assets/Images/apple.png"), imageAlt: "appleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", bgColour: "black", textColour: "white", },
	{ key: '7', imageUrl: require("../assets/Images/google.png"), imageAlt: "googleImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", bgColour: "white", textColour: "black", },
	{ key: '8', imageUrl: require("../assets/Images/facebook.png"), imageAlt: "facebookImage", location: "Accra,Ghana", price: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", bgColour: "blue", textColour: "white", },
  ];

  const verticalData = [
	{ key: '1', imageUrl: require("../assets/Images/burgerKing.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Burger King", },
	{ key: '2', imageUrl: require("../assets/Images/beats.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Beats", },
	{ key: '3', imageUrl: require("../assets/Images/google.png"),  location: "Accra,Ghana", pay: "$3,000/mth", label: "Software ", miniLabel: "Google", },
	{ key: '4', imageUrl: require("../assets/Images/apple.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple",  },
	{ key: '5', imageUrl: require("../assets/Images/facebook.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", },
	{ key: '6', imageUrl: require("../assets/Images/apple.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Apple", },
	{ key: '7', imageUrl: require("../assets/Images/google.png"),  location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Google", },
	{ key: '8', imageUrl: require("../assets/Images/facebook.png"), location: "Accra,Ghana", pay: "$3,000/mth", label: "Software Engineering", miniLabel: "Facebook", },
  ];



const Homepage = ( { route }) => {
	
	const { name, email } = route.params || {}

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
{/*Code body*/}
<View style={{marginBottom: 20, marginTop: 30,}}>

	<View style={{flexDirection: 'row', marginBottom: 20,}}>
		<View>
			<Text style={{fontWeight: 'bold', margin: 2, marginLeft: 25, marginRight: 40,  fontSize: 30,}}> {name} </Text>
			<Text style={{margin: 1, marginLeft: 30, marginRight: 40, fontWeight: 'ultralight', fontSize: 15,}}> {email} </Text>
		</View>

		<Image source={Profile} style={{height: 50, width: 50, margin: 10, marginLeft: 90, marginTop: 15,}} />
	</View>

	<View style={{flexDirection: 'row', marginBottom: 10,}}>
		<TextInput 
			placeholder='Search a job or position'
			style={{ margin: 6, marginLeft: 23, backgroundColor: '#F2F2F3', height: 50, borderRadius: 15, paddingLeft: 40, width: 280,}}
		/> 

		<Pressable
		onPress={() => alert('Filter Button clicked')}
		>
			<Image source={Filter} style={{ height: 40, width: 40, marginTop: 10, backgroundColor: '#F2F2F3', borderRadius: 8, padding: 10, marginLeft: 14, margin: 4}} />
		</Pressable>
		

</View>
	   
	
    </View>

		<View style={{flexDirection: 'row'}}>

<Text style={{margin: 20, marginLeft: 40, fontWeight: 'bold', fontSize: 20,}}>
			Featured Jobs
		  </Text>

			<Text style={{margin: 20, marginLeft: 140, marginTop: 30, fontWeight: 'ultralight', fontSize: 10,}}>
				See all
			</Text>

					</View>

	<FlatList
          horizontal
          data={horizontalData}
          renderItem={({ item }) => (
            <FeaturedJobCards
			bgColour={item.bgColour}
			textColour={item.textColour}
			location={item.location}
			price={item.price}
			imageAlt={item.imageAlt}
            imageUrl={item.imageUrl}
            label={item.label}
            miniLabel={item.miniLabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{ paddingLeft: 20, marginBottom: 20,}}
          showsHorizontalScrollIndicator={false}
        />

					<View style={{flexDirection: 'row'}}>

<Text style={{margin: 20, marginLeft: 40, fontWeight: 'bold', fontSize: 20,}}>
			Popular Jobs
		  </Text>

			<Text style={{margin: 20, marginLeft: 140, marginTop: 30, fontWeight: 'ultralight', fontSize: 10,}}>
				See all
			</Text>

					</View>

		  

	<FlatList          
          data={verticalData}
          renderItem={({ item }) => (
            <PopularJobCard
			location={item.location}
			pay={item.pay}
            imageUrl={item.imageUrl}
            label={item.label}
            miniLabel={item.miniLabel}
            />
          )}
          keyExtractor={(item) => item.key}
          contentContainerStyle={{alignItems: 'center', paddingLeft: 20,}}
        />

{/*Code body*/}
    </ScrollView>
    </View>
    </SafeAreaView>
    </>
  )
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: '#FAFAFE',
	},
  
	pressed: {
	  opacity: 0.5,
	},
  
  });

export default Homepage
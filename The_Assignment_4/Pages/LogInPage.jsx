import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInputBox from '../Components/SignInputBox';
import { ScrollView, SafeAreaView, View, TouchableOpacity , Pressable, Text, TextInput, StyleSheet, Image } from 'react-native';

const appleImage = require("../assets/Images/apple.png")
const googleImage = require("../assets/Images/google.png")
const facebookImage = require("../assets/Images/facebook.png")

const LogInPage = ( { navigation }) => {

	const [name, setName] = useState('');
  	const [email, setEmail] = useState('');
	const [isPressed, setIsPressed] = useState(false)

	const isButtonDisabled = !name || !email;

  return (
    <>
    <SafeAreaView style={{flex: 1,}}>
    <View style={styles.container}>
    <StatusBar style="auto"/>
    <ScrollView>
{/*Code body*/}
    <View style={{marginBottom: 10, marginTop: 30,}}>
      <View>
			<Text style={{marginLeft:16, fontSize: 32, margin: 10, fontWeight: 'bold', color: '#356899'}} >Jobizz</Text>

				<Text style={{ marginLeft:16, fontSize: 33, fontWeight: 'bold', color: '#0D0D26'}}>Welcome Back</Text>

				<Text style={{ marginLeft:16, margin: 4, marginBottom: 46, fontSize: 18, opacity: 0.5, color: '#0D0D26' }}> Let’s log in. Apply to jobs!</Text>
			</View>

			<View>

			<SignInputBox 
    		placeholder="Name"
			onInputChange={setName}
			required={true}
    	/>

			<SignInputBox 
			placeholder="Email"
			onInputChange={setEmail}
			required={true}
			/>

			<TouchableOpacity
    		activeOpacity={1}
    		style={[styles.touchableOpacity, isPressed && styles.pressed]} 
				onPressIn={() => setIsPressed(true)} 
				onPressOut={( ) => setIsPressed(false)}
				
				>

      <Pressable
	  			onPress={() => {
					if (!isButtonDisabled) {
					  navigation.navigate('Homepage', { name, email });
					}
				  }}
				  disabled={isButtonDisabled}			
				onPressIn={() => setIsPressed(true)} 
				onPressOut={( ) => setIsPressed(false)}
				style={[{margin: 10, marginHorizontal: 20, alignItems: 'center', borderRadius: 5, justifyContent: 'center', padding: 10,  backgroundColor: '#356899',}, isPressed && styles.pressed, isButtonDisabled && styles.disabled]}>

        <Text style={{color: "white", fontSize: 14, letterSpacing: 0.5,}}>Log In</Text>
      </Pressable>
    </TouchableOpacity>

			</View>

			<View styles={{flexDirection: 'row', alignItems: 'center', marginVertical: 10,}}>
				<View style={{flex: 1, width: 100, top: 31, marginLeft:30, height: 1, backgroundColor: '#ccc',}}/>
				<Text style={{textAlign: 'center', marginHorizontal: 10, marginTop: 20, marginBottom: 20,}}> Or Continue with</Text>
				<View style={{flex: 1, height: 1, left: 260, top: -28, width: 100, backgroundColor: '#ccc',}}/>
			</View>
			

			<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',}}>

				<Image source={appleImage} style={{height: 30, width: 30, margin: 15, backgroundColor: '#ffffff', borderRadius: 20 }} />
				<Image source={googleImage} style={{height: 30, width: 30, margin: 15, backgroundColor: '#ffffff', borderRadius: 20 }} />
				<Image source={facebookImage} style={{height: 30, width: 30, margin: 15, backgroundColor: '#ffffff', borderRadius: 20 }} />

			</View>

			<Text style={{ marginTop: 80, color: '#ccc', textAlign: 'center',}}>Haven’t an account? Register</Text>

    </View>
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

  disabled: {
    backgroundColor: '#B0B0B0',
  },

});

export default LogInPage
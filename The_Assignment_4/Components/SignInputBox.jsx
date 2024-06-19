import React from 'react'
import { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SignInputBox = ({ placeholder, onInputChange, required }) => {

  const [input, setInput] = useState('')

  const handleChange = (val) => {
    setInput(val);
    onInputChange(val);
  };

  return (
    <>
    <View>
      <TextInput 
      placeholder={placeholder}
      placeholderTextColor='#999'
      onChangeText={handleChange}
      value={input}
      style={{backgroundColor: "#ffffff", width: 350, height: 52, borderRadius: 10, padding: 1, paddingLeft: 10, borderWidth: 1,  margin: 4, marginLeft: 20, borderColor: '#AFB0B6',}}
      />

{required && !input && <Text style={styles.errorText}>This field is required</Text>}
    </View>
    </>
  )
}

const styles= StyleSheet.create(
  {
    errorText: {
      color: 'red',
      marginLeft: 20,
    }
  }
)

export default SignInputBox
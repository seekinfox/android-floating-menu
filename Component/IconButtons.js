import {Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

export default function IconButtons({isActive, name, onPress, icon}) {

  let symbol = icon ? (isActive.active && isActive.button === name)? icon('white'): icon('black') : null
  
  return (

    <Pressable
      name={name} 
      android_ripple={{color: 'hsl(237, 77%, 79%)', radius: 35,  borderless: true}}
      onPress={() => onPress(name)} 
      style={{
        ...styles.iconButton, 
        backgroundColor: (isActive.active && isActive.button === name) ? 'hsl(237, 77%, 69%)': 'transparent' ,
        transform: [{
          scale: (isActive.active && isActive.button === name)? 1.3 : 1
        }],      
      }}
    >
      {({ pressed }) =>(
        <Text style={{
          
        }}>
          {symbol}
          {/* {icon} */}
        </Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
   iconButton: {
      width: 75,
      height: 75,
      // backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
   },
   
})
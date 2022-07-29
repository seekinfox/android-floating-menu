import { View, Text, TouchableOpacity, StyleSheet, Animated, Easing} from 'react-native'
import React, { useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function InnerButton({size, onPress}) {
   const [toggle,setToggle] = useState(true)
   const [rotateAnimation, setRotateAnimation]= useState(new Animated.Value(0))

   const rotate =()=> {
      setToggle(prev => !prev)
      if(toggle){
         Animated.timing(rotateAnimation, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
         }).start();
      } else {
         Animated.timing(rotateAnimation, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true
         }).start();
      }
   }

   const interpolateRotating = rotateAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '45deg'],
    });

    const animatedStyle = {
      transform: [
        {
          rotate: interpolateRotating,
        },
      ],
    };
    const buttonSize ={
      width: size + size,
      height: size + size
    }
    

  return (
   
      <TouchableOpacity 
      onPress={async() => {
         rotate();
         onPress();
      }} 
      style={{...styles.button__container, ...buttonSize}}
      >
         <Animated.View style={animatedStyle}>
            <AntDesign 
               name="plus" 
               size={size} 
               color="white"
            />
         </Animated.View>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
   button__container: {
      elevation: 10,
      padding: 15,
      backgroundColor: '#6a5acd',
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      zIndex: 1000
   }
})
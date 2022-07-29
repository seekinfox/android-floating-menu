import { View, StyleSheet, Animated } from 'react-native'
import React, { useState } from 'react'
import InnerButton from './InnerButton'
import IconButtons from './IconButtons'
import { bell, bin, folder, home, msg, que, setting, shop } from './utils.js/ButtonsList'

export default function Button({size}) {
   const [toggle, setToggle] = useState(false)
   const [shrinkAnimation, setShrinkAnimation] = useState(new Animated.Value(0))
   const [isActive, setIsActive] = useState({ active: true, button: 'home'})

   const innerButtonPressed =() => {
      setToggle(prev => !prev)
      if(toggle){
         Animated.timing(shrinkAnimation, {
            toValue: 0,
            duration: 400,
            useNativeDriver: true
         }).start();
      } else {
         Animated.timing(shrinkAnimation, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
         }).start();
      }
   }

   const buttonSize = {
      width: size * 8.5,
      height: size * 8.5
   }
   const sigleButtonSize = {
      width: size + size,
      height: size + size
   }

   const handleonPress =(name)=>{
      setIsActive({
         active: true,
         button: name
      })
   }
  return (
   <View style={{
      ...styles.button__container, 
      ...sigleButtonSize,
      borderRadius: 500,
      }}>
      <InnerButton
         onPress={innerButtonPressed}
         size={size} 
      />
   
      <Animated.View style={{width: '100%',
            ...styles.iconContainer,
            ...buttonSize,
            transform: [{
               scale: shrinkAnimation
            }]
         }}>
            <View style={styles.row1}>
               <IconButtons
                  isActive={isActive}
                  name='shop' 
                  onPress={handleonPress} 
                  icon={shop}
                  />
            </View>
            <View style={styles.row2}>
               <IconButtons
                  isActive={isActive} 
                  name="msg"
                  onPress={handleonPress} 
                  icon={msg} />
               <IconButtons
                  isActive={isActive}
                  name='folder' 
                  onPress={handleonPress} 
                  icon={folder} />
            </View>
            <View style={styles.row3}>
               <IconButtons
                  isActive={isActive}
                  name='home' 
                  onPress={handleonPress} 
                  icon={home} />
               <IconButtons
                  isActive={isActive}
                  name='bin' 
                  onPress={handleonPress} 
                  icon={bin} />
            </View>
            <View style={styles.row4}>
               <IconButtons
                  isActive={isActive}
                  name='que' 
                  onPress={handleonPress} 
                  icon={que} />
               <IconButtons
                  isActive={isActive}
                  name='bell' 
                  onPress={handleonPress} 
                  icon={bell} />
            </View>
            <View style={styles.row5}>
               <IconButtons
                  isActive={isActive}
                  name='setting' 
                  onPress={handleonPress} 
                  icon={setting} />
            </View>
            
      </Animated.View>
   </View>
  )
}
const center = {
   // borderWidth: 1,
   flexDirection:'row',
   width: '100%',
   alignItems: 'center',
   justifyContent:'center'
}

const center_1 ={
   // borderWidth: 1,
   flexDirection:'row',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingHorizontal: 60
}
const center_2 ={
   flexDirection:'row',
   width: '100%',
   alignItems: 'center',
   justifyContent: 'space-between',
   paddingHorizontal: 20
}

const styles = StyleSheet.create({
   iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 500,
      backgroundColor: 'white',
   },
   button__container: {
      justifyContent: 'center',
      alignItems: 'center',
   },
   row1: {
      ...center,
      marginBottom: -35
   },
   row2: center_1,
   row3: center_2,
   row4: center_1,
   row5: {
      ... center,
      marginTop: -35,
   },
   single: {
      borderRadius: 500,
   }
})
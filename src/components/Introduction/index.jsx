
import React, { useEffect, useState, useContext} from 'react';

import {  
   Text,   
   View,   
}
   from 'react-native';


import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';








export default function Introduction({pthight}) {


   


   useEffect(() => {     
   }, []);


  


   return (


      <View 
        style={{

         flex:1,
         paddingTop:pthight,
         height:'auto',        
         alignItems:'center',

         backgroundColor:'orange', 
         marginStart:10,
         marginEnd:10,
        // paddingStart:10,
        // paddingEnd:10,
         borderRadius:4 

      }}
      >

         <View style={styles.content}> 

           <Text>Component Introduction</Text>   
          
         </View> 

      </View>
      
   )
}





import {} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

//import {Feather} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight +22 : 64 ;




export default function Header({user , info}){



    return(


      <View style={styles.container}>
       
         <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.content}>

              <Text style={styles.text}>{user}</Text>
              <Text style={styles.text}>{info}</Text>

              {/* 
              <TouchableOpacity style={styles.buttonUser}>
                 <Feather name='user' size={27} color={'blue'} />
              </TouchableOpacity>
             */}
              
        </LinearGradient>



      </View>



    )

}


const styles = StyleSheet.create({

     container:{
      
         width:'auto',
         height:'auto',
        // alignItems:'center',
        
      
         padding:10,
         marginTop:5,
         marginBottom:10, 
         
        // borderRadius: 6,
      /*
        
        paddingTop:statusBarHeight,
        paddingStart:16,
        paddingEnd:16,
        paddingBottom:30
        */
     },


     content:{
         borderRadius: 6,

         width:'auto',
         height:'auto',
        // flexDirection:'row',
        
         alignItems:'center',
       //  justifyContent:'space-around',
         padding:10,
         /*
         flex:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',
         backgroundColor:'#062531'
         */
     },


     text: {
        color: '#44E8C3',
        fontSize: 14,
        fontWeight: 'bold',
     },
  

     /*
      buttonUser:{
         width:44,
         height:44,
         backgroundColor:'rgba(255,255,255,0.9)',
         justifyContent:'center',
         alignItems:'center',
         borderRadius: 44 / 2,
      },
     */


})

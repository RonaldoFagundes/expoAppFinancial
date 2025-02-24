import {} from 'react';
import {View, Text, StyleSheet, StatusBar, TouchableOpacity} from 'react-native';

import {Feather} from '@expo/vector-icons';


const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight +22 : 64 ;




export default function Header({user}){

    return(

        <View style={styles.container}>


            <View style={styles.content}>
             <Text>{user}</Text>
            
             <TouchableOpacity style={styles.buttonUser}>
                <Feather name='user' size={27} color={'blue'} />
             </TouchableOpacity>

            </View>

            


        </View>



    )

}

const styles = StyleSheet.create({

     container:{        
        backgroundColor:'green',
        paddingTop:statusBarHeight,

        paddingStart:16,
        paddingEnd:16,
        paddingBottom:30
     },

     content:{
         flex:1,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between',

         backgroundColor:'yellow'
     },

      buttonUser:{
         width:44,
         height:44,
         backgroundColor:'rgba(255,255,255,0.9)',
         justifyContent:'center',
         alignItems:'center',
         borderRadius: 44 / 2,

      },
})
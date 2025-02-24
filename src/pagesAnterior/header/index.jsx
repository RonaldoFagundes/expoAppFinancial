
import React, { ref, useRef } from 'react';
import {
   FlatList,
   Text,
   View,  
   Image,
   Animated,   
   StatusBar
}
   from 'react-native';

   import { StyleSheet } from "react-native";

   

const h_max_hight = 150;
const h_min_hight =  50;
const h_scroll_distance = h_max_hight - h_min_hight;






export default function Header() {




  const scrollOffsetY = useRef(new Animated.Value(0)).current;
  const headerScrollHeight = scrollOffsetY.interpolate({
     inputRange:[0,h_scroll_distance],
     outputRange:[h_max_hight, h_min_hight],
     extrapolate:'clamp'
  });


  const dataTest = [
   {id:'1', title:'item 1'},
   {id:'2', title:'item 2'},
   {id:'3', title:'item 3'},
   {id:'4', title:'item 4'},
];


   


   return (      

     <View style={{flex:1}}>
 
       <StatusBar backgroundColor={"#121212"} barStyle={'light-content'} translucent={false}/>

        <Animated.View 
           
            style={{
               position:'absolute',
               top:0,
               left:0,
               right:0,
               zIndex:99,
               width: '100%',
               padding: 10,  
               backgroundColor: '#121212',
               alignItems:'center',
               justifyContent:'center',
               height:headerScrollHeight,
               overflow:'hidden'
            }}
          >


             <Text 
                style={{
                  fontSize:18,
                  fontWeight:'bold',
                  textAlign:'center',
                  color:'#fff'
                }}
              >Tela Home</Text>


         </Animated.View>




        <FlatList
          style={{paddingTop:h_max_hight}}
          data={dataTest}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={( {item} ) => (


             <View
              style={{
               height:300,
               padding:20,
               borderBottomWidth:1,
               borderBottomColor:'#ccc'
              }}
             >
                  <Text>{item.title}</Text>
             </View> 


          )}



          onScroll={Animated.event([
            {
             nativeEvent:{contentOffset:{y:scrollOffsetY}}
            },
           ], { useNativeDriver:false}
         )}

          scrollEventThrottle={16}
           
          >
        </FlatList>

      </View>
   )

}




StyleSheet.create({

containerHeader: {
   //  height:150,
     width: '100%',
     padding: 10,  
     backgroundColor: '#121212',
     alignItems:'center',
     justifyContent:'center'
  },
 
 



  contentHeader: {  
   width: '100%',
   flexDirection:'row',
   alignItems: 'center',
   justifyContent:'center'
 },
 
 



 textHeader: {  
   fontSize:18,
   fontWeight:'bold',
   textAlign:'center',
   color:'#fff'
 },
 



 
 itemFlatList:{
    height:300,
    padding:20,
    borderBottomWidth:1,
    borderBottomColor:'#ccc'
 },




});
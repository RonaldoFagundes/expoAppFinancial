import React, {useContext} from 'react';
import {
   Pressable,   
   Text,
   TextInput,
   View, 
   StyleSheet 
} from 'react-native';

import { AuthContext } from '../../context/auth';



export default function Config({ navigation }) {





const {
    setEndpoint ,
    endpoint,
} = useContext(AuthContext);






const handleInputChange = (value) => {
      setEndpoint(value)
}






const conectEndPoint = async () => {

    await fetch(endpoint + "?action=conect", {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },       
     })
        .then((res) => res.json())
        .then(
           (result) => {

                console.log(result);

               if(result === 200){
                  navigation.navigate("Login"); 
               }else{
                  console.log(' erro => '+result); 
               }
                
           })
        .catch(function (error) {
           console.log(' erro => wrong url ');
        });
}









return(

   <View style={styles.main}>

      <View style={styles.container}>

         <TextInput  style={styles.input}
            placeholder={"End Point"}
            placeholderTextColor="#44E8C3"
            type="text"
            onChangeText={(valor) =>
               handleInputChange(valor)
         }/>           

         <View >
            <Pressable style={styles.btn}
               onPress={() => conectEndPoint()}>
               <Text style={styles.textBtn}>Confirm</Text>
            </Pressable>
         </View>

      </View>

   </View>

)}


const styles = StyleSheet.create({

   main:{   
    backgroundColor:'#000000',    
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100%',
    width: '100%',    
   },


   container:{
      width: '94%',
      height: 'auto',
      padding: 14,
      backgroundColor: '#08042F',
      alignItems:'center',
      borderRadius: 10,  
   },


   input: {
      width: '100%',
      height: 50,
      marginBottom: 20,
      padding: 6,
      borderBottomWidth: 1,
      borderBottomColor: "#44E8C3",
      borderRadius: 10,
      color: "#44E8C3",
      backgroundColor: '#062531',
      fontSize: 16
   },


   btn: {
      width: 'auto',
      height: 'auto',
      padding: 14,
      alignItems:'center',    
      borderRadius: 10,      
      backgroundColor: '#062531',       
   },
        
    
   textBtn: {
      color: '#44E8C3',
      fontSize: 14,
      fontWeight: 'bold',
   },

})
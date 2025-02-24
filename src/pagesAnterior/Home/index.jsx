
import React, { useEffect, useState, useContext, ref, useRef } from 'react';
import {  
   Pressable,
   FlatList,
   Text,
   TextInput,
   View,
   Modal,
   Image,
   Animated,   
   StatusBar
}
   from 'react-native';

import { AuthContext } from '../../context/auth';

import { FontAwesome } from '@expo/vector-icons';

import * as ImagePicker from 'expo-image-picker';



import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';




const h_max_hight = 300;
const h_min_hight = 60;
const h_scroll_distance = h_max_hight - h_min_hight;




export default function Home({ navigation }) {


   //const endpointPhp = 'http://localhost:3322/php-api-financial';

   // const endpointPhp = 'http://192.168.100.6:3322/php-api-financial';

   //const endpointPhp = 'http://127.0.0.1:3322/php-api-financial';







   const {
      endpointPhp,
      setBankData,
      bankData,
   } = useContext(AuthContext);




   useEffect(() => {
      getListBank();
   }, []);


   //const imgUpdate = null;



   const scrollOffsetY = useRef(new Animated.Value(0)).current;
   const headerScrollHeight = scrollOffsetY.interpolate({
      inputRange: [0, h_scroll_distance],
      outputRange: [h_max_hight, h_min_hight],
      extrapolate: 'clamp'
   });

   const imageScaleHeight = scrollOffsetY.interpolate({
      inputRange: [0, h_max_hight],
      outputRange: [80, 24],
      extrapolate: 'clamp'
   });


   /*
   const dataTest = [
      { id: '1', title: 'item 1' },
      { id: '2', title: 'item 2' },
      { id: '3', title: 'item 3' },
      { id: '4', title: 'item 4' },
   ];
   */




   const [modalCadBank, setModalCadBank] = useState(false);

   const [modalUpdateBank, setModalUpdateBank] = useState(false);

   const [isList, setIsList] = useState(false);


   const [bank, setBank] = useState({
      id: 0,
      number: "",
      name: "",
      cnpj: "",
      contact: "",
      desc: "",
      img: null,
      base64: null,
   });


   const cleanFields = () => {

      setBank(
         {
            ...bank, 'id': 0,
            bank, 'number': "",
            bank, 'name': "",
            bank, 'cnpj': "",
            bank, 'contact': "",
            bank, 'desc': "",
            bank, 'img': null,
            bank, 'base64': null,
         }
      )
   }



   const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
         base64: true,
         // includeBase64: true
      });

      if (!result.canceled) {

         //console.log(result)

         setBank(
            {
               ...bank, 'img': result.assets[0].uri,
               bank, 'base64': result.assets[0].base64,
            }
         )
      }
   };





   const removeImage = (atribute) => {
      setBank(
         {
            ...bank, [atribute]: null
         }
      )
   }




   const [listBank, setListBank] = useState([]);

   const [bankSelected, setBankSelected] = useState([]);



   const handleInputChange = (atribute, value) => {

      setBank(
         {
            ...bank, [atribute]: value
         }
      )
   }







   const insertBank = async () => {

      //setModalCadBank(false);
      // closeModal('cad');

      await fetch(endpointPhp + "?action=cadBank", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         //body:JSON.parse(JSON.stringify({bank}))

         body: JSON.stringify({
            bank
         })

      })
         .then((res) => res.json())
         .then(
            (result) => {

               if (result !== "error") {
                  alert(result + " cad success");
                  console.log(' insertBank => ' + result);
               } else {
                  alert(result + " on api ");
               }

            })
         .catch((error) =>
            // alert('Error no fetch'));
            console.log(" type => " + error));

      closeModal('cad');
   }




   /*
    const getListBank2 = async () => {
     await fetch(endpointPhp + "?action=test", {
       method: "GET",
      
       headers: {
         "X-RapidAPI-Key": "your-api-key",
         "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
       },
   
     })
     .then(function(response) {
        response.text()
        .then(function(result) {
        console.log(result);
        })
        })
       .catch((error) => 
       // alert('Error no fetch'));
       console.log(" type => "+error));
   };
   */





   const getListBank = async () => {

      console.log(" tela home getListBank ");

      await fetch(endpointPhp + "?action=listBank")
         .then((res) => res.json())
         .then(
            (result) => {

               if (result != "not found") {
                  setIsList(true);
                  setListBank(result);
                  console.log(" result getListBank => " + result);
               } else {
                  alert(result);
               }
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
   }







   const getListBankById = async (id, number, name, cnpj, contact, desc, img) => {

      console.log("function getListBankById nº " + id);

      //  cleanFields();

      setBank(
         {
            ...bank, ['id']: id,
            bank, ['number']: number,
            bank, ['name']: name,
            bank, ['cnpj']: cnpj,
            bank, ['contact']: contact,
            bank, ['desc']: desc,
            bank, ['base64']: img,
         }
      )

      await fetch(endpointPhp + "?action=listBankById", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               if (result != "not found") {
                  setBankSelected(result);
                  console.log(" result getListBankById => " + result);
               } else {
                  alert(result);
               }
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
      setModalUpdateBank(true);
   }






   const updateBank = async () => {

      console.log("function updateBank ");

      await fetch(endpointPhp + "?action=updateBank", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            bank
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               if (result != "error") {
                  alert(result);
               } else {
                  alert(result);
               }
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

      closeModal('update');
   }












   const deleteBank = async (id) => {

      console.log("function deletebank id nº ", id);


      await fetch(endpointPhp + "?action=deleteBank", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            id
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               if (result != "error") {
                  getListBank();
                  alert(result);
               } else {
                  alert(result);
               }

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

   }







   const closeModal = async (atribute) => {

      if (atribute == "cad") {
         setModalCadBank(false);
      } else {
         setModalUpdateBank(false);
      }
      getListBank();
      cleanFields();
   }







   const selectBanc = (id, name, img) => {

      console.log(id, name);

      setBankData(
         {
            ...bankData, ['id']: id,
            bankData, ['name']: name,
            bankData, ['img']: img,
         }
      )

      navigation.navigate("SelectedBank");

   }





   const screenCashPost = () => {
      console.log("Cash");
   }






   return (

      <View style={styles.main}>

         <StatusBar backgroundColor={"#121212"} barStyle={'light-content'} translucent={false} />

         <Animated.View

            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               zIndex: 99,
               width: '100%',
               padding: 10,               
               backgroundColor: '#121212',
               alignItems: 'center',
               justifyContent: 'center',
               height: headerScrollHeight,
               overflow: 'hidden'
            }}
         >
        
           
            <Animated.Image 
                 source={require('../logo_rfideia.png')}
                  style={{
                     padding:imageScaleHeight,                                
                     width:80,                    
                     height:imageScaleHeight
                  }}
                  resizeModel='contain'
               />         
         
         </Animated.View>







         <FlatList

            style={{ paddingTop: h_max_hight }}
            showsVerticalScrollIndicator={false}
            data={listBank}
            renderItem={({ item }) =>

              <View style={styles.containerList} >

                 <LinearGradient

                     /* 
                      colors={[
                         'rgba(255, 249, 145, 0.07)',
                         'rgba(249, 225, 175 ,0.09)',
                      ]}
                     */
                     colors={['#121212', '#cc0000']}

                     style={styles.contentList}>


                     <View>
                        <Image source={{ uri: `data:image/png;base64,${item.img_bnk}` }}
                           style={styles.resizeModel}                          
                        />
                     </View>


                     <View style={styles.contentCardList}>

                        <Text style={styles.textList}>
                           {`ID  :  ${item.id_bnk}`}
                        </Text>


                        <Text style={styles.textList}>
                           {`Nº :  ${item.number_bnk}`}
                        </Text>

                        <Text style={styles.textList}>
                           {`Name :  ${item.name_bnk}`}
                        </Text>

                        <Text style={styles.textList}>
                           {`Cnpj :  ${item.cnpj_bnk}`}
                        </Text>

                        <Text style={styles.textList}>
                           {`Contact :  ${item.contact_bnk}`}
                        </Text>

                        <Text style={styles.textList}>
                           {`Desk :  ${item.desc_bnk}`}
                        </Text>

                     </View>


                     <View style={styles.boxBtn}>

                        <View >
                           <Pressable style={styles.btn}
                              onPress={() => selectBanc(
                                 item.id_bnk,
                                 item.name_bnk,
                                 item.img_bnk
                              )}
                           >
                              <Text style={styles.textAlert}>Select</Text>
                           </Pressable>
                        </View>

                        <View >
                           <Pressable style={styles.btn}
                              onPress={() => deleteBank(
                                 item.id_bnk
                              )}
                           >
                              <Text style={styles.textAlert}>Delete</Text>
                           </Pressable>
                        </View>

                        <View >
                           <Pressable style={styles.btn}
                              onPress={() => getListBankById(
                                 item.id_bnk,
                                 item.number_bnk,
                                 item.name_bnk,
                                 item.cnpj_bnk,
                                 item.contact_bnk,
                                 item.desc_bnk,
                                 item.img_bnk
                              )}
                           >
                              <Text style={styles.textAlert}>Update</Text>
                           </Pressable>
                        </View>

                     </View>

                  </LinearGradient>

               </View>

            }
            onScroll={Animated.event([
               {
                  nativeEvent: { contentOffset: { y: scrollOffsetY } }
               },
            ], { useNativeDriver: false }
            )}

            scrollEventThrottle={16}
         >

         </FlatList>






         <View>

            <Modal
               animationType='fade'
               visible={modalCadBank}
            >

               <View style={styles.containerModal}>

                  <View style={styles.titleModal} >
                     <Text style={styles.textInfo}>{` Register MODAL`}</Text>
                  </View>

                  {
                     bank.img === null ?

                        <View style={styles.boxAddImg}>

                           <Pressable onPress={() => pickImage()}>
                              <FontAwesome name='image' size={40} color={"#fff"} />
                           </Pressable>

                           <Text style={styles.textInfo}>Add Image</Text>

                        </View>


                        :

                        bank.img &&

                        <View style={styles.boxImg}>

                           <Image source={{ uri: bank.img }} style={styles.resizeModel} />

                           <Pressable onPress={() => removeImage('img')}>

                              <FontAwesome name='remove' size={14} color={"#B8AAA7"} />

                           </Pressable>

                        </View>

                  }


                  <View style={styles.formModal}>

                     <TextInput style={styles.input}
                        placeholder="Bank Nº "
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('number', valor)
                        }
                        value={bank.number}
                     />

                     <TextInput style={styles.input}
                        placeholder="Bank Name"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('name', valor)
                        }
                        value={bank.name}
                     />

                     <TextInput style={styles.input}
                        placeholder="CNPJ"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('cnpj', valor)
                        }
                        value={bank.cnpj}
                     />

                     <TextInput style={styles.input}
                        placeholder="Contact"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('contact', valor)
                        }
                        value={bank.contact}
                     />

                     <TextInput style={styles.input}
                        placeholder="Description"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('desc', valor)
                        }
                        value={bank.desc}
                     />


                  </View>


                  <View style={styles.boxModalBtn}>

                     <View>
                        <Pressable onPress={() => insertBank()} style={styles.btn}                 >
                           <Text style={styles.textBtn}>Confirm</Text>
                        </Pressable>
                     </View>

                     <View>
                        <Pressable onPress={() => closeModal('cad')} style={styles.btn}                 >
                           <Text style={styles.textBtn}>Cancel</Text>
                        </Pressable>
                     </View>

                  </View>

               </View>

            </Modal>

         </View>



         <View>

            <Modal animationType='fade'
               visible={modalUpdateBank}
            >

             <View style={styles.containerModal}>


               <View style={styles.titleModal} >
                  <Text style={styles.textInfo}>{` UPDATE MODAL`}</Text>
               </View>


                  <FlatList

                     data={bankSelected}

                     renderItem={({ item }) =>


                      <View style={styles.containerList}>

                                             
                           <View style={styles.contentList}>


                              <View style={styles.boxAddImg}>
                                 <Pressable onPress={() => pickImage()}>
                                    <FontAwesome name='image' size={40} color={"#fff"} />
                                 </Pressable>
                                 <Text style={styles.textInfo}>Chosse Image</Text>
                              </View>

                              <View style={styles.boxImg}>
                                  {/*   <Image source={{ uri: bank.img }} style={styles.resizeModel} />  */}
                                 <Image source={{ uri: `data:image/png;base64,${bank.base64}` }}
                                    style={styles.resizeModel}
                                 />

                                 <Pressable onPress={() => removeImage('base64')}>
                                    <FontAwesome name='remove' size={14} color={"#B8AAA7"} />
                                 </Pressable>
                              </View>


                             {/* 
                              <TextInput style={styles.input}
                                 placeholder={` ${item.id_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('id', valor)
                                 }
                                 value={bank.id}
                              />
                             */}


                              <TextInput style={styles.input}
                                 placeholder={` ${item.number_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('number', valor)
                                 }
                                 value={bank.number}
                              />

                              <TextInput style={styles.input}
                                 placeholder={` ${item.name_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('name', valor)
                                 }
                                 value={bank.name}
                              />

                              <TextInput style={styles.input}
                                 placeholder={` ${item.cnpj_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('cnpj', valor)
                                 }
                                 value={bank.cnpj}
                              />

                              <TextInput style={styles.input}
                                 placeholder={` ${item.contact_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('contact', valor)
                                 }
                                 value={bank.contact}
                              />

                              <TextInput style={styles.input}
                                 placeholder={` ${item.desc_bnk}`}
                                 placeholderTextColor="#cc0000"
                                 type="text"
                                 onChangeText={
                                    (valor) => handleInputChange('desc', valor)
                                 }
                                 value={bank.desc}
                              />


                              <View style={styles.boxBtn}>
                                 <View>
                                    <Pressable style={styles.btn}
                                       onPress={() => updateBank()}>
                                       <Text style={styles.textBtn}>Confirm</Text>
                                    </Pressable>
                                 </View>

                                 <View >
                                    <Pressable style={styles.btn}
                                       onPress={() => closeModal('update')}>
                                       <Text style={styles.textBtn}>Cancel</Text>
                                    </Pressable>
                                 </View>
                              </View>



                           </View>

                        </View>
                     }
                  >
                  </FlatList>

               </View>

            </Modal>

         </View>



        <View style={styles.boxBtnOut}>
          <Pressable style={styles.btn}
                     onPress={() => setModalCadBank(true)}
                  >
                     {
                        !isList
                           ?
                           <Text style={styles.textAlert}>Insert 1º Banc</Text>
                           :
                           <Text style={styles.textAlert}>Insert New Banc</Text>
                     }
                  </Pressable>
               
                  <Pressable style={styles.btn}
                     onPress={() => screenCashPost()}
                  >
                     <Text style={styles.textAlert}>Insert Cash Payment</Text>
                  </Pressable>                     

        </View>



      </View>


   )

}










{/* 


       <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
          <View style={styles.main}>
          </View>

       </KeyboardAvoidingView>
    


       https://www.youtube.com/watch?v=iiqea8lTM6A
       
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

             <Text style={styles.textHeader}>Tela Home</Text>

          </Animated.View>    

        <FlatList
          style={{paddingTop:h_max_hight}}
          data={dataTest}
          keyExtractor={(item)=>item.id}
          showsVerticalScrollIndicator={false}
          renderItem={( {item} ) => (
             <View style={styles.itemFlatList}>
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

         */}










{/* 
           
            <View style={styles.boxBtnOut}>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => setModalCadBank(true)}
                  >
                     {
                        !isList
                           ?
                           <Text style={styles.textAlert}>Insert 1º Banc</Text>
                           :
                           <Text style={styles.textAlert}>Insert New Banc</Text>
                     }
                  </Pressable>
               </View>


               <View >
                  <Pressable style={styles.btn}
                     onPress={() => screenCashPost()}
                  >
                     <Text style={styles.textAlert}>Insert Cash Payment</Text>
                  </Pressable>
               </View>

            </View>

          */}






{/* 
               {
               !isList
                  ?
                  <View></View>
                  :

                */}



{/* 
                  <View>

                     <FlatList

                        style={{ paddingTop: h_max_hight }}
                        //showsVerticalScrollIndicator={false}
                        data={listBank}
                        renderItem={({ item }) =>


                           //  <View style={styles.dataList}>


                           <View style={styles.cardList}>

                              <View>
                                 <Image source={{ uri: `data:image/png;base64,${item.img_bnk}` }}
                                    style={styles.resizeModel}
                                 />
                              </View>


                              <View style={styles.contentCardList}>

                                 <Text style={styles.textList}>
                                    {`ID  :  ${item.id_bnk}`}
                                 </Text>


                                 <Text style={styles.textList}>
                                    {`Nº :  ${item.number_bnk}`}
                                 </Text>

                                 <Text style={styles.textList}>
                                    {`Name :  ${item.name_bnk}`}
                                 </Text>

                                 <Text style={styles.textList}>
                                    {`Cnpj :  ${item.cnpj_bnk}`}
                                 </Text>

                                 <Text style={styles.textList}>
                                    {`Contact :  ${item.contact_bnk}`}
                                 </Text>

                                 <Text style={styles.textList}>
                                    {`Desk :  ${item.desc_bnk}`}
                                 </Text>

                              </View>



                              <View style={styles.boxBtn}>

                                 <View >
                                    <Pressable style={styles.btn}
                                       onPress={() => selectBanc(
                                          item.id_bnk,
                                          item.name_bnk,
                                          item.img_bnk
                                       )}
                                    >
                                       <Text style={styles.textAlert}>Select</Text>
                                    </Pressable>
                                 </View>

                                 <View >
                                    <Pressable style={styles.btn}
                                       onPress={() => deleteBank(
                                          item.id_bnk
                                       )}
                                    >
                                       <Text style={styles.textAlert}>Delete</Text>
                                    </Pressable>
                                 </View>

                                 <View >
                                    <Pressable style={styles.btn}
                                       onPress={() => getListBankById(
                                          item.id_bnk,
                                          item.number_bnk,
                                          item.name_bnk,
                                          item.cnpj_bnk,
                                          item.contact_bnk,
                                          item.desc_bnk,
                                          item.img_bnk
                                       )}
                                    >
                                       <Text style={styles.textAlert}>Update</Text>
                                    </Pressable>
                                 </View>

                              </View>

                           </View>

                           //   </View>

                        }


                        onScroll={Animated.event([
                           {
                              nativeEvent: { contentOffset: { y: scrollOffsetY } }
                           },
                        ], { useNativeDriver: false }
                        )}

                        scrollEventThrottle={16}

                     >

                     </FlatList>

                  </View>

               */}



{/*    } */ }






{/* 
            <View>

               <Modal
                  animationType='fade'
                  visible={modalCadBank}
               >

                  <View style={styles.containerModal}>

                     <View style={styles.titleModal} ><Text style={styles.textInfo}>{` Register MODAL`}</Text></View>

                     {
                        bank.img === null ?

                           <View style={styles.boxAddImg}>

                              <Pressable onPress={() => pickImage()}>
                                 <FontAwesome name='image' size={40} color={"#fff"} />
                              </Pressable>

                              <Text style={styles.textInfo}>Add Image</Text>

                           </View>


                           :

                           bank.img &&

                           <View style={styles.boxImg}>

                              <Image source={{ uri: bank.img }} style={styles.resizeModel} />

                              <Pressable onPress={() => removeImage('img')}>

                                 <FontAwesome name='remove' size={14} color={"#B8AAA7"} />

                              </Pressable>

                           </View>

                     }


                     <View style={styles.formModal}>

                        <TextInput style={styles.input}
                           placeholder="Bank Nº "
                           placeholderTextColor="#cc0000"
                           type="text"
                           onChangeText={
                              (valor) => handleInputChange('number', valor)
                           }
                           value={bank.number}
                        />

                        <TextInput style={styles.input}
                           placeholder="Bank Name"
                           placeholderTextColor="#cc0000"
                           type="text"
                           onChangeText={
                              (valor) => handleInputChange('name', valor)
                           }
                           value={bank.name}
                        />

                        <TextInput style={styles.input}
                           placeholder="CNPJ"
                           placeholderTextColor="#cc0000"
                           type="text"
                           onChangeText={
                              (valor) => handleInputChange('cnpj', valor)
                           }
                           value={bank.cnpj}
                        />

                        <TextInput style={styles.input}
                           placeholder="Contact"
                           placeholderTextColor="#cc0000"
                           type="text"
                           onChangeText={
                              (valor) => handleInputChange('contact', valor)
                           }
                           value={bank.contact}
                        />

                        <TextInput style={styles.input}
                           placeholder="Description"
                           placeholderTextColor="#cc0000"
                           type="text"
                           onChangeText={
                              (valor) => handleInputChange('desc', valor)
                           }
                           value={bank.desc}
                        />


                     </View>


                     <View style={styles.boxModalBtn}>

                        <View>
                           <Pressable onPress={() => insertBank()} style={styles.btn}                 >
                              <Text style={styles.textBtn}>Confirm</Text>
                           </Pressable>
                        </View>

                        <View>
                           <Pressable onPress={() => closeModal('cad')} style={styles.btn}                 >
                              <Text style={styles.textBtn}>Cancel</Text>
                           </Pressable>
                        </View>

                     </View>

                  </View>

               </Modal>

            </View>

          */}









{/* 
            <View>

               <Modal animationType='fade'
                  visible={modalUpdateBank}
               >

                  <View style={styles.containerModal}>

                     <View style={styles.titleModal} ><Text style={styles.textInfo}>{` UPDATE MODAL`}</Text></View>

                     <FlatList

                        data={bankSelected}

                        renderItem={({ item }) =>

                           <View style={styles.dataList}>

                              <View style={styles.cardList}>



                                 <View style={styles.boxAddImg}>
                                    <Pressable onPress={() => pickImage()}>
                                       <FontAwesome name='image' size={40} color={"#fff"} />
                                    </Pressable>
                                    <Text style={styles.textInfo}>Chosse Image</Text>
                                 </View>

                                 <View style={styles.boxImg}>
                                    /   <Image source={{ uri: bank.img }} style={styles.resizeModel} />  /
                                    <Image source={{ uri: `data:image/png;base64,${bank.base64}` }}
                                       style={styles.resizeModel}
                                    />

                                    <Pressable onPress={() => removeImage('base64')}>
                                       <FontAwesome name='remove' size={14} color={"#B8AAA7"} />
                                    </Pressable>

                                 </View>





                                 <TextInput style={styles.input}
                                    placeholder={` ${item.id_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('id', valor)
                                    }
                                    value={bank.id}
                                 />





                                 <TextInput style={styles.input}
                                    placeholder={` ${item.number_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('number', valor)
                                    }
                                    value={bank.number}
                                 />

                                 <TextInput style={styles.input}
                                    placeholder={` ${item.name_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('name', valor)
                                    }
                                    value={bank.name}
                                 />

                                 <TextInput style={styles.input}
                                    placeholder={` ${item.cnpj_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('cnpj', valor)
                                    }
                                    value={bank.cnpj}
                                 />

                                 <TextInput style={styles.input}
                                    placeholder={` ${item.contact_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('contact', valor)
                                    }
                                    value={bank.contact}
                                 />

                                 <TextInput style={styles.input}
                                    placeholder={` ${item.desc_bnk}`}
                                    placeholderTextColor="#cc0000"
                                    type="text"
                                    onChangeText={
                                       (valor) => handleInputChange('desc', valor)
                                    }
                                    value={bank.desc}
                                 />


                                 <View style={styles.boxBtn}>

                                    <View>
                                       <Pressable style={styles.btn}
                                          onPress={() => updateBank()}>
                                          <Text style={styles.textAlert}>Confirm</Text>
                                       </Pressable>
                                    </View>


                                    <View >
                                       <Pressable style={styles.btn}
                                          onPress={() => closeModal('update')}>
                                          <Text style={styles.textBtn}>Cancel</Text>
                                       </Pressable>
                                    </View>

                                 </View>


                              </View>

                           </View>
                        }
                     >
                     </FlatList>

                  </View>

               </Modal>

            </View>

          */}










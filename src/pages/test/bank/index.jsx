
import React, { useEffect, useState } from 'react';
import {
   Pressable,
   FlatList,
   Text,
   TextInput,
   View,
   Modal,
   Image   
}
   from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 
   
import * as ImagePicker from 'expo-image-picker';



import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';




export default function Bank() {

   const endpointPhp = 'http://localhost:3322/php-api-financial';

   useEffect(() => {
      getListBank();
   }, []);



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

         console.log(result)
         
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









   const [modalCadBank, setModalCadBank] = useState(false);

   const [modalUpdateBank, setModalUpdateBank] = useState(false);

   const [bank, setBank] = useState({
      id: "",
      number: "",
      name: "",
      cnpj: "",
      contact: "",
      desc: "",
      img: null,
      base64: null,
   });


   const [listBank, setListBank] = useState([]);

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
         body: JSON.stringify({
            bank
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

              // getListBank();
               closeModal('cad');
               console.log(' insertBank ' + result);

            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }



   const getListBank = async () => {

      await fetch(endpointPhp + "?action=listBank")
         .then((res) => res.json())
         .then(
            (result) => {

               if (result === 'not found') {
                  console.log("empty array");
               } else {
                  console.log(result);
                  setListBank(result);
               }

            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }





   const getListBankById = async (id) => {

      setModalUpdateBank(true);

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

               if (result === 'not found') {
                  console.log("empty array");
               } else {
                  console.log(result);
                  setListBank(result);
               }

            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }




   const updateBank = async (id) => {

      setBank(
         {
            ...bank, ['id']: id
         }
      )

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
               closeModal('update')
               //setModalUpdateBank(false);
               //getListBank();
               console.log(result);
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

   }




   const deleteBank = async (id) => {

      // console.log("function deletebank id nº ",id);

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
               console.log(result);
               getListBank();

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
   }




   const closeModal = async (atribute) => {

       if(atribute == "cad"){
         setModalCadBank(false);         
       }else{
         setModalUpdateBank(false); 
       }  
       getListBank();
   }




   return (

      <View style={styles.main}>



       <FlatList

            data={listBank}
            renderItem={({ item }) =>
               

               <View style={styles.dataList}>

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



                  <View style={styles.boxBtn}>
                     <Pressable
                        onPress={() => deleteBank(
                           item.id_bnk
                        )}
                     >
                        <Text style={styles.textAlert}>Deletar</Text>
                     </Pressable>
                  </View>



                  <View style={styles.boxBtn}>
                     <Pressable
                        onPress={() => getListBankById(item.id_bnk) }
                     >
                        <Text style={styles.textAlert}>Editar</Text>
                     </Pressable>
                  </View>



               </View>
            }
         >
         </FlatList>



         <View style={styles.boxBtn}>
            <Pressable
               onPress={() => setModalCadBank(true)}
            >
               <Text style={styles.textAlert}>Cadastrar</Text>
            </Pressable>
         </View>




         <Modal style={styles.main}
            animationType='fade'
            visible={modalCadBank}
         >

             {
               bank.img === null  ?        
             
               <LinearGradient
                 colors={['#B1B2AB', '#7D7F72']}
                 style={styles.styleBtnImg}
            >

                  <Pressable onPress={() => pickImage()}>
                     <FontAwesome name='image' size={22} color={"#fff"} />
                  </Pressable>

                  <Text style={styles.textBtn}>Adcionar Imagem</Text>

               </LinearGradient>

               :             
            
                 bank.img &&

                 <View style={styles.boxImg}>

                    <Image source={{ uri: bank.img }} style={styles.resizeModel} />

                      <Pressable onPress={() => removeImage('img')}>

                        <FontAwesome name='remove' size={14} color={"#B8AAA7"} />

                      </Pressable>

                 </View>              

              }   









            <TextInput style={styles.input}
               placeholder="Nº do Banco"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('number', valor)
               }
               value={bank.number}
            />

            <TextInput style={styles.input}
               placeholder="Nome"
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
               placeholder="Contato"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('contact', valor)
               }
               value={bank.contact}
            />

            <TextInput style={styles.input}
               placeholder="Descrição"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('desc', valor)
               }
               value={bank.desc}
            />

            <View style={styles.boxBtn}>
               <Pressable onPress={() => insertBank()}                  >
                  <Text style={styles.textBtn}>Cadastrar</Text>
               </Pressable>
            </View>

            <View style={styles.boxBtn}>
               <Pressable onPress={() => closeModal('cad')}                  >
                  <Text style={styles.textBtn}>Fechar</Text>
               </Pressable>
            </View>

        </Modal>


       <Modal style={styles.main}
            animationType='fade'
            visible={modalUpdateBank}
         >


         <FlatList

              data={listBank}

               renderItem={({ item }) =>

                  <View style={styles.dataList}>

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
                        <Pressable
                           onPress={() => updateBank(item.id_bnk)}
                        >
                           <Text style={styles.textAlert}>Editar</Text>
                        </Pressable>
                     </View>

                     <View style={styles.boxBtn}>

                        <Pressable onPress={() => closeModal('update')}                  >
                           <Text style={styles.textBtn}>Fechar</Text>
                        </Pressable>

                     </View>

                  </View>
               }
            >
            </FlatList>

         </Modal>

      </View>


   )


}
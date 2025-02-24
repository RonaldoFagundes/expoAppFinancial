
import React, { useEffect, useState, useContext } from 'react';
import {
   KeyboardAvoidingView,
   Pressable,
   FlatList,
   Text,
   TextInput,
   View,
   Modal,
   Platform,
}
   from 'react-native';


import { AuthContext } from '../../context/auth';




import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';








export default function TransactionsOut({ navigation }) {



   //const endpointPhp = 'http://localhost:3322/php-api-financial';
   //const accountData_id = 4;

   const {
      endpointPhp,
      accountData,
      bankData,
   } = useContext(AuthContext);



   useEffect(() => {
   }, []);




   const [modalTransaction, setModalTransaction] = useState(false);

   const [postTransaction, setPostTransaction] = useState({
      date: "",
      value: 0,
      source: "",
      desc: "",
      type: "",
      idac: accountData.id
   });



   const handleInputChangeCad = (atribute, value) => {

      setPostTransaction(
         {
            ...postTransaction, [atribute]: value
         }
      )
   }



   const safePost = async () => {

      await fetch(endpointPhp + "?action=postTransactionOut", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            postTransaction
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               console.log(' postTransactionOut => ' + result);

               setModalTransaction(false);
               cleanFields();


            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

   }



   const cleanFields = () => {

      setPostTransaction(
         {
            ...postTransaction, 'date': "",
            postTransaction, 'value': 0,
            postTransaction, 'source': "",
            postTransaction, 'desc': "",
            postTransaction, 'type': "",
         }
      )
   }



   return (

      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height"}
      >


         <View style={styles.main}>




            <View style={styles.containerHeader}>



               <View >
                  <Pressable style={styles.btn}
                     onPress={() => navigation.navigate("Home")}
                  >
                     <Text style={styles.textBtn}>Home</Text>
                  </Pressable>
               </View>



               <View>

                  <Text style={styles.textList}>TransactionsOut - Account Info</Text>

                  <Text style={styles.textList}>{` Banc = ${bankData.name}`}</Text>

                  <Text style={styles.textList}>{` ID = ${accountData.id}`}</Text>

                  <Text style={styles.textList}>{` NUMBER = ${accountData.number}`}</Text>

               </View>



            </View>


            <View style={styles.boxBtn}>

               <Pressable style={styles.btn} onPress={() => setModalTransaction(true)}                  >
                  <Text style={styles.textBtn}>Post</Text>
               </Pressable>

            </View>






            {/* 
         {listCreditCard == "not found"

            ?

            <View>

               <View style={styles.boxBtn}>

                  <View >
                     <Pressable style={styles.btn}
                        onPress={() => setModalCreditCard(true)}

                     // onPress={() => insertCadCreditCard()}
                     >
                        <Text style={styles.textBtn}>Adcione o 1º cartao</Text>
                     </Pressable>
                  </View>

               </View>

            </View>

            :            


          <View>
         
           <View style={styles.boxBtn}>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => setModalCreditCard(true)}

                  // onPress={() => insertCadCreditCard()}
                  >
                     <Text style={styles.textBtn}>Add Credit Card</Text>
                  </Pressable>
               </View>

            </View>         
         

              <FlatList
                  data={listCreditCard}
                  renderItem={({ item }) =>

                   <View style={styles.dataContainer}>

                        <View style={styles.dataList}>

                           <View>
                              {item.type_cc == "visa"
                                 ?
                                 <FontAwesome name='cc-visa' size={42} color={"white"} />
                                 :
                                 <FontAwesome name='cc-mastercard' size={42} color={"red"} />
                              }
                           </View>

                           <View style={styles.dataContent}>
                              <Text style={styles.textList}>
                                 {` ${item.number_cc} `}
                              </Text>
                           </View>

                           <View style={styles.dataContent}>
                              <Text style={styles.textList}>
                                 {` user `}
                              </Text>

                              <Text style={styles.textList}>
                                 {` ${item.expery_date_cc} `}
                              </Text>                            
                           </View>                           

                        </View>

                       <View style={styles.boxBtn}>

                           <View >
                              <Pressable style={styles.btn}
                                 onPress={() => selectCreditCard(
                                    item.id_cc,
                                    item.number_cc,
                                    item.type_cc,
                                    item.expery_date_cc
                                 )}
                              >
                                 <Text style={styles.textAlert}>Select</Text>
                              </Pressable>
                           </View>

                           <View >
                              <Pressable style={styles.btn}
                                 onPress={() => updateCreditCard(item.id_cc)}
                              >
                                 <Text style={styles.textAlert}>Update</Text>
                              </Pressable>
                           </View>

                           <View >
                              <Pressable style={styles.btn}
                                 onPress={() => deleteCreditCard(item.id_cc)}
                              >
                                 <Text style={styles.textAlert}>Delete</Text>
                              </Pressable>
                           </View>

                        </View>

                     </View>
                  }
               >
               </FlatList> 

             </View>                        
          }

       </View>


         


          */}






            <Modal
               animationType='fade'
               visible={modalTransaction}
            >

               <View style={styles.main}>



                  <View style={styles.boxCard}>


                     <TextInput style={styles.input}
                        placeholder="Date"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('date', valor)
                        }
                        value={postTransaction.date}
                     />

                     <TextInput style={styles.input}
                        placeholder="Value"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('value', valor)
                        }
                        //value={postTransaction.value}
                     />

                     <TextInput style={styles.input}
                        placeholder="Source"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('source', valor)
                        }
                        value={postTransaction.source}
                     />

                     <TextInput style={styles.input}
                        placeholder="Description"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('desc', valor)
                        }
                        value={postTransaction.desc}
                     />

                     <TextInput style={styles.input}
                        placeholder="Type"
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('type', valor)
                        }
                        value={postTransaction.type}
                     />

                  </View>





                  <View style={styles.boxBtn}>

                     <Pressable style={styles.btn} onPress={() => safePost()}                  >
                        <Text style={styles.textBtn}>Confirm</Text>
                     </Pressable>

                     <Pressable style={styles.btn} onPress={() => setModalTransaction(false)}                  >
                        <Text style={styles.textBtn}>Cancel</Text>
                     </Pressable>

                  </View>




               </View>

            </Modal>






         </View>


      </KeyboardAvoidingView>

   )
}
















{/*     
         <View style={styles.boxCard}>


            <LiteCreditCardInput
               autoFocus
               inputStyle={styles.textInfo}

               requireCVC
               requirePostalCode

               validColor={"black"}
               invalidColor={"red"}
               placeholderColor={"darkgray"}

               onFocus={this._onFocus}
               onChange={this._onChange}
            />

           
            <CreditCardInput
             // autoFocus

             // requiresName
              requiresCVC
              requiresPostalCode

             // labelStyle={s.label}
            //  inputStyle={s.input}
              validColor={"black"}
              invalidColor={"red"}
              placeholderColor={"darkgray"}

             // onFocus={this._onFocus}
             // onChange={this._onChange}
           />
       
                        
         <CreditCardInput
          autoFocus
          requireName
          requireCVC
          requirePostalCode
          validColor="black"
          invalidColor="red"
          placeholderColor='darkgray'
          labelStyle={{color:'black', fontSize:12}}
          inputStyle={{color:'black', fontSize:16}}
          //onFocusField={focus()}
          //onChange={dataCreditCard()}
         />        
       

          <LiteCreditCardInput 
            autoFocus
            requireName
            requireCVC
            requirePostalCode
            validColor="black"
            invalidColor="red"
            placeholderColor='darkgray'
            labelStyle={{color:'black', fontSize:12}}
            inputStyle={{color:'black', fontSize:16}}          
          /> 
        
         </View>

          */}


{/* 
            <View>

               {USE_LITE_CREDIT_CARD_INPUT ?
                  (<LiteCreditCardInput

                     onChange={this._onChange}
                     _onFocus={this._onFocus}

                  />) : (<CreditCardInput

                     requiresName
                     requiresPostalCode

                     onChange={this._onChange}
                     _onFocus={this._onFocus}

                  />
                  )
               }

            </View>

        */}


{/* 
        <CreditCardInput
        autoFocus
        requireName
        requireCVC
        requirePostalCode
        validColor="black"
        invalidColor="red"
        placeholderColor='darkgray'
        labelStyle={{color:'black', fontSize:12}}
        inputStyle={{color:'black', fontSize:16}}
        onFocusField={focus()}
        onChange={dataCreditCard()}
        />
        */}
{/*  <LiteCreditCardInput /> */ }


{/*   
          <View style={styles.boxCard}>
             <Text style={styles.textInfo}>{` Saldo R$ ${amount}`}</Text>
          </View>
        
         <TextInput style={styles.input}
            placeholder="Nº do cartão"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('number', valor)
            }
            value={postCreditCard.number}
         />         

         <TextInput style={styles.input}
            placeholder="tipo"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('desc', valor)
            }
            value={postCreditCard.desc}
         />

         <TextInput style={styles.input}
            placeholder="data"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('date', valor)
            }
            value={postCreditCard.date}
         />

         <TextInput style={styles.input}
            placeholder="user"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('user', valor)
            }
            value={postCreditCard.user}
         />

         <TextInput style={styles.input}
            placeholder="parcela"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('parcel', valor)
            }
            value={postCreditCard.parcel}
         />

         <TextInput style={styles.input}
            placeholder="valor"
            placeholderTextColor="#cc0000"
            type="text"
            onChangeText={
               (valor) => handleInputChangePost('value', valor)
            }
            value={postCreditCard.value}
         />

        <View style={styles.boxBtn}>
         
          <Pressable style={styles.btn} onPress={() => insertPostCreditCard()}                  >
             <Text style={styles.textBtn}>Lançar</Text>
          </Pressable>

          <Pressable style={styles.btn} onPress={() => setModalCreditCard(true)}                  >
             <Text style={styles.textBtn}>Cadastrar Cartão</Text>
          </Pressable> 

       </View>
       */}
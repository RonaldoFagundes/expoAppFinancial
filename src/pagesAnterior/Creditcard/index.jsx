
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

   //UIManager, LayoutAnimation
}
   from 'react-native';


import { AuthContext } from '../../context/auth';



import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

//const USE_LITE_CREDIT_CARD_INPUT = false;









import styles from './styles';

import { FontAwesome } from '@expo/vector-icons';








export default function CreditCard({ navigation }) {



   //const endpointPhp = 'http://localhost:3322/php-api-financial';
   //const accountData_id = 4;

   const {
      endpointPhp,
      accountData,
      bankData,
      setCreditCardData,
      creditCardData,
   } = useContext(AuthContext);



   useEffect(() => {
      //  amountCreditCard();
      getListCreditCardByAccount(accountData.id);
   }, []);




   //const [useLiteCreditCardInput, setUseLiteCreditCardInput] = useState(false);





   const [modalCreditCard, setModalCreditCard] = useState(false);

   const [cadCreditCard, setCadCreditCard] = useState({
      number: "",
      type: "",
      format: "",
      desc: "",
      fromDate: "",
      expiry: "",
      limit: 0,
      idac: accountData.id
   });



   const [listCreditCard, setListCreditCard] = useState([]);

   const [selectedCreditCard, setSelectedCreditCard] = useState([]);

   const [isList, setIsList] = useState(false);



   /*
   const [postCreditCard, setPostCreditCard] = useState({
      number: "",     
      desc: "",
      date: "",
      user: "",
      parcel: 0,
      value: 0
   });
  */





   /*
    const handleInputChangePost = (atribute, value) => {
    
       setPostCreditCard(
             {
                ...postCreditCard, [atribute]: value
             }
          )    
    }
   */




   const handleInputChangeCad = (atribute, value) => {

      setCadCreditCard(
         {
            ...cadCreditCard, [atribute]: value
         }
      )
   }



 //  const [amount, setAmount] = useState();


   /*
     const getListAllCreditCard = async () => {
  
        await fetch(endpointPhp + "?action=listAllCreditCard")
           .then((res) => res.json())
           .then(
              (result) => {
  
                 //   if (result === 'not found') {
                 //     console.log("empty array");
                 //   } else {
                 console.log(result);
                 //setListAccount(result);
                 //  }
  
              })
           .catch(() => {
              alert('Erro', 'Não foi possível carregar os dados ');
           });
  
     }
    */



   const getListCreditCardByAccount = async (id) => {      

     // console.log(" tela creditCard listCreditCardByAccount idAccount "+id);

      await fetch(endpointPhp + "?action=listCreditCardByAccount", {
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

               if (result != "not found"){  
                  setIsList(true);
                  setListCreditCard(result);
                  console.log(" result getListCreditCardByAccount => " + result);
                }else{
                   alert(result);
                }              
              
            })
            .catch(function (error) {
               console.log('erro => ' + error.message);
            }); 
   }







   const insertCadCreditCard = async () => {

      setModalCreditCard(false);

      console.log(" dados para api => " +
         cadCreditCard.number + "  " +
         cadCreditCard.type + "  " +
         cadCreditCard.format + "  " +
         cadCreditCard.desc + "  " +
         cadCreditCard.fromDate + "  " +
         cadCreditCard.expiry + "  " +
         cadCreditCard.limit + " " +
         cadCreditCard.idac
      );

      await fetch(endpointPhp + "?action=cadCreditCard", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            cadCreditCard
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {
                 
               if (result !== "error"){  
                  getListCreditCardByAccount(accountData.id);               
                  alert(result+" cad success");
                  console.log(' insertBank => ' + result);
               }else{
                  alert(result+" on api ");
               }
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

   }




  





   const selectCreditCard = (id , number, type ,ex) => {
      console.log(" selectCreditCard id " + id);

       setCreditCardData(
          {
            ...creditCardData,['id']:id,
            creditCardData,['number']:number,
            creditCardData,['type']:type,          
            creditCardData,['expiry']:ex,

          }
       )
      
      navigation.navigate("SelectedCreditCard");    

   }





   const updateCreditCard = (id) => {
      console.log(" updateCreditCard id " + id);
   }


  
   

      const deleteCreditCard  = async (id) => {

      //   console.log(" deleteCreditCard id " + id);
   
         await fetch(endpointPhp + "?action=deleteCreditCard", {
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

                 if (result != "error"){  
                     getListCreditCardByAccount(accountData.id);  
                     alert(result);                  
                  }else{
                     alert(result);
                 }
                         
               })
            .catch(function (error) {
               console.log('erro => ' + error.message);
            });
   }




   /*
   const insertPostCreditCard = async () => {

      await fetch(endpointPhp + "?action=postCreditCard", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            postCreditCard
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {
             //  setAmount(result);
             console.log(result);             
            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }
   */



   /*
    const amountCreditCard = async () => {
 
       await fetch(endpointPhp + "?action=amountCreditCard", {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify({
             //creditCard
          })
       })
          .then((res) => res.json())
          .then(
             (result) => {
                setAmount(result);
                console.log(result);
             })
          .catch(() => {
             alert('Erro', 'Não foi possível carregar os dados ');
          });
    }
   */





   /*
   const insertCreditCard2 = async () => {

      const params = new URLSearchParams({
         creditCard
     });

   fetch(endpointPhp, {
      method: 'POST',
      body: params,
  })
      .then(async function (fdata) {
          var data = await fdata.json();
          // var data = JSON.parse(fdata);     
     
          console.log(data)
       
      })
      .catch(error => {
          console.log('error', error);
  })
}
*/




   //const [cadCreditCardT, setCadCreditCardT] = useState([]);



   _onChange = formData => {

      //  console.log(JSON.stringify(formData, null, " "));
      /*
       setCadCreditCardT(formData);   
   
       setCadCreditCard(
         {
            ...cadCreditCard, ['number']: cadCreditCardT.values.number,
               cadCreditCard, ['type']: cadCreditCardT.values.type,
         }
      ) 
     */

      setCadCreditCard(
         {
            ...cadCreditCard, ['number']: formData.values.number,
            cadCreditCard, ['type']: formData.values.type,
            cadCreditCard, ['expiry']: formData.values.expiry,
         }
      )

      //console.log(formData);
   };



   _onFocus = field => {
      // console.log(" focus "+field);
   }


   /*
    if (Platform.OS === "android") {
      // UIManager.setLayoutAnimationEnabledExperimental &&
         UIManager.setLayoutAnimationEnabledExperimental(true);         
    }
   */


   //UIManager.setLayoutAnimationEnabledExperimental(true);


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

            <Text style={styles.textList}>Account Info</Text>

            <Text style={styles.textList}>{` Banc = ${bankData.name}`}</Text>

            <Text style={styles.textList}>{` ID = ${accountData.id}`}</Text>

            <Text style={styles.textList}>{` NUMBER = ${accountData.number}`}</Text>

         </View>

      </View>


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
                              {item.type_cc == "Visa"
                                 ?
                                 <FontAwesome name='cc-visa' size={42} color={"white"} />
                                 :
                                 <FontAwesome name='cc-mastercard' size={42} color={"red"} />
                              }
                           </View>


                           {/* 
                           <View style={styles.dataContent}>
                              <Text style={styles.textList}>
                                 {` ${item.type_cc} `}
                              </Text>
                           </View>
                           */}

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


         


        <Modal
            animationType='fade'
            visible={modalCreditCard}
         >

            <View style={styles.main}>

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

               </View>        

               <View style={styles.boxCard}>

                  <TextInput style={styles.input}
                     placeholder="Format"
                     placeholderTextColor="#cc0000"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChangeCad('format', valor)
                     }
                     value={cadCreditCard.format}
                  />

                  <TextInput style={styles.input}
                     placeholder="Description"
                     placeholderTextColor="#cc0000"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChangeCad('desc', valor)
                     }
                     value={cadCreditCard.desc}
                  />

                  <TextInput style={styles.input}
                     placeholder="From Date"
                     placeholderTextColor="#cc0000"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChangeCad('fromDate', valor)
                     }
                     value={cadCreditCard.fromDate}
                  />

                  <TextInput style={styles.input}
                     placeholder="Limit"
                     placeholderTextColor="#cc0000"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChangeCad('limit', valor)
                     }
                     value={cadCreditCard.limit}
                  />
               </View>

               <View style={styles.boxBtn}>

                  <Pressable style={styles.btn} onPress={() => insertCadCreditCard()}                  >
                     <Text style={styles.textBtn}>Confirm</Text>
                  </Pressable>

                  <Pressable style={styles.btn} onPress={() => setModalCreditCard(false)}                  >
                     <Text style={styles.textBtn}>Cancel</Text>
                  </Pressable>

               </View>

            </View>

         </Modal>










     

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
         {/*  <LiteCreditCardInput /> */}


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
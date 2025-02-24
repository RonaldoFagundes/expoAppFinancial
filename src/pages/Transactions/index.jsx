
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
   ScrollView,
} from 'react-native';


import { SelectList } from 'react-native-dropdown-select-list';

import { AuthContext } from '../../context/auth';

import { FontAwesome } from '@expo/vector-icons';

import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import styles from './styles';

import Header from '../../components/Header';






export default function Transactions({ navigation }) {



   //const endpointPhp = 'http://localhost:3322/php-api-financial';
   //const accountData_id = 4;

   const {
      // endpointPhp,
      endpoint,
      accountData,
      bankData,
   } = useContext(AuthContext);



   useEffect(() => {
      listAccounts(accountData.id);
   }, []);






   const [modalTransaction, setModalTransaction] = useState(false);

   const [transaction, setTransaction] = useState({
      move: "",
      date: "",
      type: "",
      source: "",
      form: "",
      desc: "",
      value: 0,
      idac: accountData.id,
      idacf: 0
   });





   const handleInputChangeCad = (atribute, value) => {

      setTransaction(
         {
            ...transaction, [atribute]: value
         }
      )
   }






   const [selectedType, setSelectedType] = useState("");

   const type = [
      { key: '1', value: 'Pix Pessoal' },
      { key: '2', value: 'Pix Outros' },
      { key: '3', value: 'Ted Pessoal' },
      { key: '4', value: 'Ted Outros' },
      { key: '5', value: 'Payment' },
      { key: '6', value: 'Deposito' },
      { key: '7', value: 'Saque' },
   ]


   const checkType = () => {
      console.log(' type ' + selectedType);
   }









   const [account, setAccount] = useState([]);

   const [selectedAccount, setSelectedAccount] = useState("");


   const accounts = [];

   const listAccounts = async (id) => {

      await fetch(endpoint + "?action=listAccountById", {
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

               var count = Object.keys(result).length;
               console.log(" count " + count);

               for (var i = 0; i < count; i++) {

                  accounts.push(

                     {
                        value:
                           result[i].id_bka + " " +
                           result[i].name_bnk + " " +
                           result[i].type_bka + " " +
                           result[i].number_bka,
                     }

                  )

               }

               setAccount(accounts);
               console.log(" listUserCC " + accounts);

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

   }



   const checkAccount = () => {
      console.log(' type ' + selectedAccount);
   }










   const safePost = async () => {

      console.log('safePost');

      await fetch(endpoint + "?action=postTransaction", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            transaction
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

      setTransaction(
         {
            ...transaction, 'move': "",
            transaction, 'date': "",
            transaction, 'type': "",
            transaction, 'source': "",
            transaction, 'form': "",
            transaction, 'desc': "",
            transaction, 'value': 0,
         }
      )

      setStatusCheckBox(null);
   }




   const mov = [
      { key: '1', value: 'out' },
      { key: '2', value: 'in' },
   ]





   const [checkBox, setCheckBox] = useState([]);
   const [randomCheckBox, setRandomCheckBox] = useState(null);
   const [statusCheckBox, setStatusCheckBox] = useState(null);




   const selectStatus = (index, item) => {

      setStatusCheckBox(index);
      if (statusCheckBox !== index && checkBox[index] !== undefined) {
         checkBox[index] = undefined;
      } else {
         checkBox[index] = item;
         setStatusCheckBox(index);
      }
      setRandomCheckBox(Math.random());

      setTransaction(
         {
            ...transaction, 'move': item
         }
      )

      // console.log(" index "+index+" item "+item)

      /*
       console.log(" index "+index+" value "+value)
 
       if (checkBox[index] !== undefined) {
 
          checkBox[index] = undefined;
 
       } else {
 
          checkBox[index] = value;
       }
 
       setStatusCheckBox(Math.random());
 
       console.log(checkBox)
      */



   }





   /*
   const selectStatus = (key, value) => {

      setStatusCheckBox(key);

    
      if (statusCheckBox !== index && checkBox[index] !== undefined) {
         checkBox[index] = undefined;
      } else {
         checkBox[index] = item.id_tag;
         setStatusCheckBox(index);
      }

      
      setRandomCheckBox(Math.random());
      setDataRel(
          {
              ...dataRel, ['status']: item.status_tag,
          }
      )
   

   }
*/




   const checkMov = () => {
      console.log(' type statusCheckBox ', transaction.move);
   }





   return (

      /*  
       <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
       >
      */


      <View style={styles.main}>


         <Header user="user name" />


         <View style={styles.containerInfo}>

            <Text style={styles.textInfo}>{` Banc = ${bankData.name}`}</Text>

            <Text style={styles.textInfo}>{` ID = ${accountData.id}`}</Text>

            <Text style={styles.textInfo}>{` NUMBER = ${accountData.number}`}</Text>

            <Text style={styles.textInfo}>{` AMOUNT = ${accountData.amount}`}</Text>

         </View>



         <View style={styles.containerBtn}>

            <Pressable style={styles.btn} onPress={() => setModalTransaction(true)}                  >
               <Text style={styles.textBtn}>Post</Text>
            </Pressable>

            <Pressable style={styles.btn}
               onPress={() => navigation.navigate("Home")}>
               <Text style={styles.textBtn}>Home</Text>
            </Pressable>

            <Pressable style={styles.btn}
               onPress={() => checkType()}>
               <Text style={styles.textBtn}>checkType</Text>
            </Pressable>

            <Pressable style={styles.btn}
               onPress={() => checkAccount()}>
               <Text style={styles.textBtn}>checkAccount</Text>
            </Pressable>

            <Pressable style={styles.btn}
               onPress={() => checkMov()}>
               <Text style={styles.textBtn}>checkMov</Text>
            </Pressable>

         </View>





         <Modal
            animationType='fade'
            visible={modalTransaction}
         >

            <ScrollView>

               <View style={styles.modal}>



                  <View style={styles.boxCard}>



                     <View style={styles.contentCheckBox}>


                        <View>
                           <Text style={styles.textInfo}>Tipo de Movimentação</Text>
                        </View>


                        <FlatList
                           data={mov}
                           renderItem={({ item, index }) =>

                              <View>

                                 <Pressable onPress={() => selectStatus(index, item.value)}>

                                    {

                                       statusCheckBox !== index ?

                                          // checkBox[index] === undefined ?

                                          <View style={styles.checkBox}>

                                             <Text style={styles.textInfo}>{item.value}</Text>

                                             <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="white" />
                                             {/*   
                                          <Text style={styles.textInfo}>{` index : ${index} -key  ${item.key}`}</Text>
                                          <Text style={styles.textInfo}>{` index : ${index} -value  ${item.value}`}</Text>
                                         */}

                                          </View>

                                          :

                                          <View style={styles.checkBox}>

                                             <Text style={styles.textInfo}>{item.value}</Text>
                                             <MaterialCommunityIcons name="checkbox-intermediate" size={24} color="white" />

                                          </View>
                                    }




                                 </Pressable>


                                 {/*  
                          
                          <Pressable onPress={() => selectStatus(key , value)}>

                              {

                                 statusCheckBox !== key
                                    ?

                                    <View>
                                      <MaterialCommunityIcons name="checkbox-blank-outline" size={24} color="white" />
                                      <Text>{key}</Text>
                                    </View>

                                    :

                                    <View>
                                      <MaterialCommunityIcons name="checkbox-intermediate" size={24} color="white" />
                                      <Text>{key}</Text>
                                    </View>

                              }

                           </Pressable> 
                           
                           */}

                              </View>

                           }
                        >
                        </FlatList>

                     </View>




                  </View>




                  <View style={styles.boxCard}>


                     <View>

                        <SelectList

                           // setSelected={(val) => setTest(val)} 
                           // setSelected={(val) => setSelected(val.replace(/[^0-9]/g, ''))}

                           // setSelected={(val) => setSelectedType(val)}

                           setSelected={(val) =>

                              setTransaction(
                                 {
                                    ...transaction, 'type': val
                                 }
                              )
                           }



                           data={type}
                           save="value"

                           placeholder='Select Type'

                           // placeholderTextColor='#44E8C3'
                           // boxStyles={{color:'#44E8C3'}}        
                           //  dropdownItemStyles={{color:'#44E8C3'}}
                           boxStyles={{
                              backgroundColor: '#314452',
                              width: 'auto',
                              marginBottom: 10
                           }}

                           inputStyles={{ color: '#44E8C3' }}
                           dropdownTextStyles={{ color: '#44E8C3' }}
                        />

                     </View>




                     {
                        // selectedType == "Pix Pessoal" || selectedType == "Ted Pessoal"

                        transaction.type == "Pix Pessoal" || transaction.type == "Ted Pessoal"
                           ?

                           <View>

                              <SelectList

                                 // setSelected={(val) => setTest(val)} 
                                 // setSelected={(val) => setSelected(val.replace(/[^0-9]/g, ''))} 

                                 //setSelected={ (key) => setSelectedAccount(key.substr(0, 2))}


                                 setSelected={(val) =>

                                    setTransaction(
                                       {
                                          ...transaction, 'idacf': val.substr(0, 2)
                                       }
                                    )
                                 }



                                 data={account}
                                 save="value"

                                 placeholder='Select Account'

                                 // placeholderTextColor='#44E8C3'
                                 //  boxStyles={{color:'#44E8C3'}}        
                                 //  dropdownItemStyles={{color:'#44E8C3'}}
                                 boxStyles={{
                                    backgroundColor: '#314452',
                                    width: 'auto'
                                 }}

                                 inputStyles={{ color: '#44E8C3' }}
                                 dropdownTextStyles={{ color: '#44E8C3' }}
                              />

                           </View>

                           :

                           <View></View>
                     }

                  </View>





                  <View style={styles.boxCard}>

                     <TextInput style={styles.input}
                        placeholder="Date"
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('date', valor)
                        }
                        value={transaction.date}
                     />

                     <TextInput style={styles.input}
                        placeholder="Origem"
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('source', valor)
                        }
                        value={transaction.source}
                     />

                     <TextInput style={styles.input}
                        placeholder="Tipo de Transação"
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('form', valor)
                        }
                        value={transaction.form}
                     />

                     <TextInput style={styles.input}
                        placeholder="Description"
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('desc', valor)
                        }
                        value={transaction.desc}
                     />

                     <TextInput style={styles.input}
                        placeholder="Value"
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChangeCad('value', valor)
                        }
                     //value={postTransaction.value}
                     />
                  </View>



                  <View style={styles.containerBtn}>

                     <Pressable style={styles.btn} onPress={() => safePost()}                  >
                        <Text style={styles.textBtn}>Confirm</Text>
                     </Pressable>

                     <Pressable style={styles.btn} onPress={() => setModalTransaction(false)}                  >
                        <Text style={styles.textBtn}>Cancel</Text>
                     </Pressable>

                  </View>


               </View>

            </ScrollView>

         </Modal>

















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



      </View>

      /* 
       </KeyboardAvoidingView>
      */


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
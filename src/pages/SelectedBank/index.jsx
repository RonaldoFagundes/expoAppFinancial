
import React, { useEffect, useState, useContext, ref, useRef } from 'react';
import {
   ActivityIndicator,
   Pressable,
   FlatList,
   Text,
   TextInput,
   View,
   Modal,
   Image,
   Animated,
   StatusBar,
}
   from 'react-native';



import { AuthContext } from '../../context/auth';

//import { SelectList } from 'react-native-dropdown-select-list'
//npm i react-native-dropdown-select-list

import styles from './styles';
import { LinearGradient } from 'expo-linear-gradient';
import { SelectList } from 'react-native-dropdown-select-list'
import { FontAwesome } from '@expo/vector-icons';
import Header from '../../components/Header';


const h_max_hight = 300;
const h_min_hight = 200;
const h_scroll_distance = h_max_hight - h_min_hight;






export default function SelectedBank({ navigation }) {




   //const testBankDataId = 10; 

   const {
      setLoad,
      load,
      endpoint,
      user,
      bankData,
      setAccountData,
      accountData,
      setAmountAccount,
     // amountAccount,      
   } = useContext(AuthContext);



   useEffect(() => {
      navigation.addListener('focus', () => setLoad(!load));
      // getListAccount();
      // console.log(' bankData.id ', bankData.id)
      getListAccountByBank(bankData.id);


     // getAccountType();


   }, [load, navigation]);




   // const endpointPhp = 'http://localhost:3322/php-api-financial';




   



   const scrollOffsetY = useRef(new Animated.Value(0)).current;
   const headerScrollHeight = scrollOffsetY.interpolate({
      inputRange: [0, h_scroll_distance],
      outputRange: [h_max_hight, h_min_hight],
      extrapolate: 'clamp'
   });

   const imageScaleHeight = scrollOffsetY.interpolate({
      inputRange: [0, h_max_hight],
      outputRange: [60, 24],
      extrapolate: 'clamp'
   });



   const [isLoading, setIsLoading] = useState(true);

   const [modalCadAccount, setModalCadAccount] = useState(false);

   const [modalUpdateAccount, setModalUpdateAccount] = useState(false);

   const [listAccount, setListAccount] = useState([]);

   const [isList, setIsList] = useState(false);

   //const [testData, setTestData] = useState([]);




   const [account, setAccount] = useState({
      id: 0,
      number: "",
      type: "",
      open: "",
      desc: "",
      amount: 0,
      fkbnk: bankData.id
   });



   /*
      const [selected, setSelected] = useState("");
   
      const [test, setTest] = useState("");
   
      const data3 = [
         { key: '1', value: 'Mobiles', disabled: true },
         { key: '2', value: 'Appliances' },
         { key: '3', value: 'Cameras' },
         { key: '4', value: 'Computers', disabled: true },
         { key: '5', value: 'Vegetables' },
         { key: '6', value: 'Diary Products' },
         { key: '7', value: 'Drinks' },
      ]
   */





   //const [listBank, setListBank] = useState([]);




   const handleInputChange = (atribute, value) => {

      setAccount(
         {
            ...account, [atribute]: value
         }
      )
   }




   /*
   const bank = [];

   const getListBank = async () => {

      await fetch(endpointPhp + "?action=listBankDropdown")
         .then((res) => res.json())

         .then(
            (result) => {

               if (result === 'not found') {

                  console.log("empty array");

               } else {

                  var count = Object.keys(result).length;

                  //console.log(result);

                  // let bank = [];

                  for (var i = 0; i < count; i++) {
                     bank.push({
                        // value:result[i].name_bnk,
                        // label:result[i].id_bnk,                        
                        // id:result[i].id_bnk+result[i].name_bnk,
                        value: result[i].id_bnk + " " + result[i].name_bnk,
                        // value:result[i].id_bnk+" "+result[i].name_bnk,   
                        // key:result[i].name_bnk, 
                        //  value:result[i].id_bnk,                  
                     })
                  }
                  //console.log(bank[0].id);
                  setListBank(bank);


                  //
                result.map(
                  (item)=> 
                     data = {key:item.id_bnk, value:item.name_bnk},
                     setListBank(
                       {
                          ...listBank,[key]:item.id_bnk,
                             listBank,[value]:item.name_bnk
                       }
                     )

                    
                     setListBank(
                       {
                          ...listBank,['id']:item.id_bnk,
                             listBank,['name']:item.name_bnk
                       }
                     )  
                )
                   //


               }

            })
        .catch(function (error) {
               console.log('erro => ' + error.message);
         }); 
   }
    */




   const insertAccount = async () => {

      //console.log(" insertAccount  idBank " + account.fkbnk + " number " + account.number);

     
      await fetch(endpoint + "?action=cadAccount", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            account
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               //alert(result+" on api ");
               console.log(' insertAccount => ' + result);


            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

      closeModal('cad');
     
   }



 // const [accountType, setAccountType] = useState([]);

  const type = [];


   const getAccountType = async () => {
   
      await fetch(endpoint + "?action=listAccountType")
         .then((res) => res.json())
         .then(

            (result) => {
                             
               var count = Object.keys(result).length;

               for (var i = 0; i < count; i++) {

                  type.push({
                      value: result[i].type_bka,
                  })

              }

            //  setAccountType(type);
              
            //  console.log(accountType);


            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
   }



   /*
      const getListAccount = async () => {
   
         await fetch(endpoint + "?action=listAccount")
            .then((res) => res.json())
            .then(
               (result) => {
   
                  console.log(result);
               })
            .catch(function (error) {
               console.log('erro => ' + error.message);
            });
      }
   */






   const getListAccountByBank = async (idBank) => {

      // console.log(" tela selectedBank getListAccountByBank  id bank " + idBank)

      await fetch(endpoint + "?action=listAccountByBank", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            idBank
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               if (result != "not found") {

                  setIsLoading(false);
                  setListAccount(result);
                  setIsList(true);
                  // console.log(" result getListAccountByBank => " + result);

               } else {

                  console.log(result);
               }

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
   }










   const getListAccountById = async (id, number, type, open, desc, amount) => {

      // console.log(" update id getListAccountById  id account " + id + " id do banco " + account.fkbnk);

      setAccount(
         {
            ...account, ['id']: id,
            account, ['number']: number,
            account, ['type']: type,
            account, ['open']: open,
            account, ['desc']: desc,
            account, ['amount']: amount,
         }
      )




      /*
      await fetch(endpointPhp + "?action=listAccountById", {
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
                  setListAccount(result); 
                  console.log(" result getListAccountByBank => " + result);
               }else{
                   alert(result);
              }

            })
            .catch(function (error) {
               console.log('erro => ' + error.message);
         });  
         
         */

      setModalUpdateAccount(true)
   }







   /* 
      const safe = () => {
         var numsStr = account.idbk.replace(/[^0-9]/g,'');       
         console.log(" id "+parseInt(numsStr));
      }
    */






   const updateAccount = async () => {

      // console.log(" id bank " + account.fkbnk + " id accont " + account.id);

      await fetch(endpoint + "?action=updateAccount", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
            account
         })
      })
         .then((res) => res.json())
         .then(
            (result) => {

               // alert(result);
               console.log(result);

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });

      closeModal('update');
   }








   const deleteAccount = async (id) => {
      //console.log(id);
      await fetch(endpoint + "?action=deleteAccount", {
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
                  getListAccountByBank(bankData.id);
                  alert(result);
               } else {
                  alert(result);
               }

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });
   }








   const closeModal = (atribute) => {

      if (atribute == "cad") {
         setModalCadAccount(false);
      } else {
         setModalUpdateAccount(false);
      }
      getListAccountByBank(bankData.id);
      cleanFields();
   }




   /*
    const removeString =(value)=>{
       //let formatStr =   value.replace(/[^0-9]/g, '');
        return value.replace(/[^0-9]/g, '');
    }
   */



   const selectAccount = (id, type, number, amount) => {

      setAccountData(
         {
            ...accountData, ['id']: id,
            accountData, ['type']: type,
            accountData, ['number']: number,
           // accountData, ['amount']: amount,
         }
      )

      setAmountAccount(amount)

      navigation.navigate("SelectedAccount")
   }



   const cleanFields = () => {

      setAccount(
         {
            ...account, ['id']: 0,
            account, ['number']: "",
            account, ['type']: "",
            account, ['open']: "",
            account, ['desc']: "",
            account, ['amount']: "",
            account, ['id']: 0,
         }
      )


   }



   /*
  const  sendDataAccount = (id ,type , number, amount)=>{
    
      
         setAccountData(
             {
               ...accountData,['id']:id                  
             }
         )
      

         setTestData(
            {
               ...testData,['id']:id ,   
                  testData,['type']:type,
                  testData,['number']:number,
                  testData,['amount']:amount,
            }
          )
          // chamar tela credit card

       // setTestData(id,img);
       // setAccountData(id,img);
  }

*/










   if (isLoading) {
        return (
          <View style={styles.containerLoading}>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text>Loading...</Text>
          </View>
        )
    }
    


   return (

      <View style={styles.main}>

         <StatusBar
            backgroundColor={"#121212"}
            barStyle={'light-content'}
            translucent={false} />

         <Animated.View
            style={{
               position: 'absolute',
               top: 0,
               left: 0,
               right: 0,
               zIndex: 99,
               width: '100%',
               padding: 10,
               backgroundColor: '#06121c',
               alignItems: 'center',
               justifyContent: 'center',
               height: headerScrollHeight,
               overflow: 'hidden'
            }}
         >

            <Animated.Image
               source={{ uri: `data:image/png;base64,${bankData.img}` }}
               style={{
                  padding: imageScaleHeight,
                  width: 80,
                  height: imageScaleHeight,
                  borderRadius: 10,
               }}
               resizeModel='contain'
            />
            <Header info={bankData.name} />
            <Header user={`${user}`} />
         </Animated.View>

         {/* 

        <View style={styles.containerHeader}>

           <View>          
            <Image source={{ uri: `data:image/png;base64,${bankData.img}` }}
             style={styles.resizeModel}
             />            
           </View>

           <View ><Text style={styles.textAlert}>{bankData.name}</Text></View>
 
        </View>

     */}



         {
            !isList
               ?

               <View style={{

                  width: 'auto',
                  height: 'auto',
                  alignItems: 'center',
                  backgroundColor: '#0A0352',
                  marginStart: 10,
                  marginEnd: 10,
                  borderRadius: 10,
                  paddingTop: h_max_hight
               }}>

                  <Text style={styles.textAlert}>Ainda não existe conta cadastrada</Text>

               </View>

               :

               <FlatList
                  style={{ paddingTop: h_max_hight }}
                  showsVerticalScrollIndicator={false}
                  data={listAccount}
                  renderItem={({ item }) =>

                     <View style={styles.containerList} >

                        <LinearGradient colors={['#0a0439', '#170c7c']} style={styles.contentList}>

                           <View style={styles.contentCardList}>

                              {/*
                   <Text style={styles.textList}>
                     {`Bank Name : ${item.name_bnk}`}
                   </Text>
                  */}

                              <Text style={styles.textList}>
                                 {`Type :  ${item.type_bka}`}
                              </Text>

                              <Text style={styles.textList}>
                                 {`Nº :  ${item.number_bka}`}
                              </Text>

                              <Text style={styles.textList}>
                                 {`Amount:  ${item.amount_bka}`}
                              </Text>

                           </View>

                           <View style={styles.containerBtn}>

                              <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}>
                                 <Pressable style={styles.btn}
                                    onPress={() => selectAccount(
                                       item.id_bka,
                                       item.type_bka,
                                       item.number_bka,
                                       item.amount_bka,
                                    )}
                                 >
                                    <FontAwesome name='eye' size={16} color={"#44E8C3"} />
                                    <Text style={styles.textBtn}>Select</Text>
                                 </Pressable>
                              </LinearGradient>

                              <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}>
                                 <Pressable style={styles.btn}
                                    onPress={() => getListAccountById(
                                       item.id_bka,
                                       item.number_bka,
                                       item.type_bka,
                                       item.open_date_bka,
                                       item.desc_bka,
                                       item.amount_bka,
                                    )}
                                 >
                                    <FontAwesome name='edit' size={16} color={"#44E8C3"} />
                                    <Text style={styles.textBtn}>Edit</Text>
                                 </Pressable>
                              </LinearGradient>

                              <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}>
                                 <Pressable style={styles.btn}
                                    onPress={() => deleteAccount(item.id_bka)}
                                 >
                                    <FontAwesome name='trash' size={16} color={"#44E8C3"} />
                                    <Text style={styles.textBtn}>Delete</Text>
                                 </Pressable>
                              </LinearGradient>

                           </View>

                        </LinearGradient>

                     </View>
                  }

                  onScroll={Animated.event([
                     { nativeEvent: { contentOffset: { y: scrollOffsetY } } },],
                     { useNativeDriver: false })}
                  scrollEventThrottle={16}
               >
               </FlatList>
         }

         <LinearGradient colors={['#08042F', '#050b3d']} style={styles.containerBtn}>

            <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
               <Pressable style={styles.btn}
                  onPress={() => setModalCadAccount(true)}
               >
                  <FontAwesome name='plus' size={16} color={"#44E8C3"} />
                  <Text style={styles.textBtn}>Add Account</Text>
               </Pressable>
            </LinearGradient>

            <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
               <Pressable style={styles.btn}
                  onPress={() => navigation.navigate("Home")}
               >
                  <FontAwesome name='home' size={16} color={"#44E8C3"} />
                  <Text style={styles.textBtn}>Home</Text>
               </Pressable>
            </LinearGradient>

         </LinearGradient>






         <Modal
            animationType='fade'
            visible={modalCadAccount}
         >

            <LinearGradient colors={['#08042F', '#050b3d']} style={styles.containerModal}>

               <View style={styles.contentModal} >
                  <Text style={styles.textInfo}>{` REGISTER ACCOUNT`}</Text>
               </View>

               <View style={styles.formModal}>

                  <TextInput style={styles.input}
                     placeholder="Account Number"
                     placeholderTextColor="#44E8C3"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('number', valor)
                     }
                     value={account.number}
                  />



                    {/* 
                  <TextInput style={styles.input}
                     placeholder="type"
                     placeholderTextColor="#44E8C3"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('type', valor)
                     }
                     value={account.type}
                  />
                  */}

                 <View style={styles.boxSurch}>
                    
                      <SelectList

                        setSelected={(value) =>

                           setAccount(
                              {
                                 ...account, 'type': value
                              }
                           )

                        }
                        
                        data={type}

                        placeholder='Select Type'

                        onPress={getAccountType()}

                       // onSelect={getAccountType()}

                        boxStyles={{ backgroundColor: '#314452' }}

                        inputStyles={{ color: '#44E8C3' }}
                        dropdownTextStyles={{ color: '#44E8C3' }}

                       />

                 </View>




                  <TextInput style={styles.input}
                     placeholder="open date"
                     placeholderTextColor="#44E8C3"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('open', valor)
                     }
                     value={account.open}
                  />

                  <TextInput style={styles.input}
                     placeholder="description"
                     placeholderTextColor="#44E8C3"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('desc', valor)
                     }
                     value={account.desc}
                  />

                  <TextInput style={styles.input}
                     placeholder="Saldo"
                     placeholderTextColor="#44E8C3"
                     type="text"
                     onChangeText={
                        (valor) => handleInputChange('amount', valor)
                     }
                  // value={account.amount}
                  />

               </View>

               <LinearGradient colors={['#08042F', '#050b3d']} style={styles.containerBtn}>

                  <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
                     <Pressable style={styles.btn}
                        onPress={() => insertAccount()}
                     >
                        <FontAwesome name='save' size={16} color={"#44E8C3"} />
                        <Text style={styles.textBtn}>Safe</Text>
                     </Pressable>
                  </LinearGradient>

                  <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
                     <Pressable style={styles.btn}
                        onPress={() => closeModal('cad')}>
                        <FontAwesome name='close' size={16} color={"#44E8C3"} />
                        <Text style={styles.textBtn}>Cancel</Text>
                     </Pressable>
                  </LinearGradient>

               </LinearGradient>

            </LinearGradient>

         </Modal>






         <Modal
            animationType='fade'
            visible={modalUpdateAccount}
         >

            <LinearGradient colors={['#08042F', '#050b3d']} style={styles.containerModal}>

               <View style={styles.contentModal} >
                  <Text style={styles.textInfo}>{` UPDATE ACCOUNT `}</Text>
               </View>

               <View style={styles.containerList}>

                  <View style={styles.contentList}>

                     <TextInput style={styles.input}
                        placeholder={` ${account.number}`}
                        type="text"
                        placeholderTextColor="#cc0000"
                        onChangeText={(valor) =>
                           handleInputChange('number', valor)
                        }
                        value={account.number}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${account.type}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={(valor) =>
                           handleInputChange('type', valor)
                        }
                        value={account.type}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${account.open}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={(valor) =>
                           handleInputChange('open', valor)
                        }
                        value={account.open}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${account.desc}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={(valor) =>
                           handleInputChange('desc', valor)
                        }
                        value={account.desc}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${account.amount}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={(valor) =>
                           handleInputChange('amount', valor)
                        }
                        value={account.amount}
                     />

                     <LinearGradient colors={['#08042F', '#050b3d']} style={styles.containerBtn}>

                        <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
                           <Pressable style={styles.btn}
                              onPress={() => updateAccount()}>
                              <FontAwesome name='save' size={16} color={"#44E8C3"} />
                              <Text style={styles.textBtn}>Safe</Text>
                           </Pressable>
                        </LinearGradient>

                        <LinearGradient colors={['#08042F', '#413f56']} style={styles.boxBtn}>
                           <Pressable style={styles.btn}
                              onPress={() => closeModal('update')}>
                              <FontAwesome name='close' size={16} color={"#44E8C3"} />
                              <Text style={styles.textBtn}>Cancel</Text>
                           </Pressable>
                        </LinearGradient>

                     </LinearGradient>

                  </View>

               </View>

            </LinearGradient>

         </Modal>







      </View>

   )

}





{/*
           <FlatList

               data={listAccount}

                renderItem={({ item }) =>               

                <View style={styles.dataList}>

                  <View style={styles.cardList}>

                     <TextInput style={styles.input}
                        placeholder={` ${item.number_bka}`}
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('number', valor)
                        }
                        value={account.number}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.type_bka}`}
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('type', valor)
                        }
                        value={account.type}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.open_date_bka}`}
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('open', valor)
                        }
                        value={account.open}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.desc_bka}`}
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('desc', valor)
                        }
                       value={account.desc}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.amount_bka}`}
                        placeholderTextColor="#44E8C3"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('amount', valor)
                        }
                        value={account.amount}
                     />

              
                   <View style={styles.contentBtn}>
                                    
                     <View>
                        <Pressable style={styles.btn}
                           onPress={() => updateAccount()}>
                           <Text style={styles.textBtn}>Confirm</Text>
                        </Pressable>
                     </View>


                     <View>
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
    */}












{/*     
            <SelectList
               //setSelected={(val) => setTest(val)} 
               // setSelected={(val) => handleInputChange('idbk', val)}  
               //setSelected={(val) => handleInputChange('fkbnk', val.replace(/[^0-9]/g, ''))}
               setSelected={(val) => handleInputChange('fkbnk', removeString(val))}
               data={listBank}
               save="value"
           
              onChange={item => {
                 {
                 handleInputChange('idbk', item.value)            
                 }
               }}  

            //
             onChangeText={
              (valor) => handleInputChange('idbk', valor)
            }
            value={account.idbk}
            //

            //
            onValueChange={
              (valor) => handleInputChange('idbk', valor)
           }
            value={account.idbk}
            //
         />
        */}


{/* 
         <View>
              <SelectList
                data={listBank}

                boxStyles={{backgroundColor:'blue', marginHorizontal:50}}
                inputStyles={{fontSize:10}}
                dropdownStyles={{backgroundColor:'blue'}}
                dropdownItemStyles={{marginHorizontal:50}}
                dropdownTextStyles={{color:'white'}}
                placeholder="Select Banc"              
                           
                onChangeText={
                  (valor) => handleInputChange('idbk', valor)
                }
                value={account.idbk}
               
                onValueChange={
                  (valor) => handleInputChange('idbk', valor)
               }
                value={account.idbk}
                
              />
           </View>
        */}



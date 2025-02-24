
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
   StatusBar,  
}
   from 'react-native';



import { AuthContext } from '../../context/auth';

//import { SelectList } from 'react-native-dropdown-select-list'
//npm i react-native-dropdown-select-list

import styles from './styles';


const h_max_hight = 300;
const h_min_hight = 60;
const h_scroll_distance = h_max_hight - h_min_hight;






export default function SelectedBank({ navigation }) {




   //const testBankDataId = 10; 

   

   useEffect(() => {
     // getListAccount();
      getListAccountByBank(bankData.id);
   }, []);



  // const endpointPhp = 'http://localhost:3322/php-api-financial';




   const {
      endpointPhp,
      bankData, 
      setAccountData,
      accountData,     
   } = useContext(AuthContext);


   
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



   

  const [modalCadAccount, setModalCadAccount] = useState(false);

  const [modalUpdateAccount, setModalUpdateAccount] = useState(false);

  const [listAccount, setListAccount] = useState([]);

  const [isList, setIsList] = useState(false);

   //const [testData, setTestData] = useState([]);




   const [account, setAccount] = useState({
      id: "",
      number: "",
      type: "",
      open: "",
      desc: "",
      amount:0,
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

      console.log(account);    
           
      await fetch(endpointPhp + "?action=openAccount", {
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

            if (result !== "error"){                 
               alert(result+" cad success");
               console.log(' insertAccount => ' + result);
            }else{
               alert(result+" on api ");
            }           
           
         })
         .catch(function (error) {
            console.log('erro => ' + error.message);
      });
      closeModal('cad'); 
}

         
   





   const getListAccount = async () => {
     
      await fetch(endpointPhp + "?action=listAccount")
         .then((res) => res.json())
         .then(
            (result) => {

                  console.log(result);
            })
            .catch(function (error) {
               console.log('erro => ' + error.message);
         });       
   }

 



   const getListAccountByBank = async (id) => {

      console.log(" tela selectedBank getListAccountByBank  id bank "+id)           
           
      await fetch(endpointPhp + "?action=listAccountByBank", {
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
                  setIsList(true); 
                  console.log(" result getListAccountByBank => " + result);
               }else{
                   alert(result);
              }
                  
           })
            .catch(function (error) {
               console.log('erro => ' + error.message);
         });      
   }



  

      




   const getListAccountById = async (id) => {

     // console.log(" update id getListAccountById  id account "+id);

      setModalUpdateAccount(true)
       
      setAccount(
         {
            ...account, ['id']: id
         }
      )  
      
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
   }







   /* 
      const safe = () => {
         var numsStr = account.idbk.replace(/[^0-9]/g,'');       
         console.log(" id "+parseInt(numsStr));
      }
    */

    
   


   
   const updateAccount = async () => {
      /*
      console.log(id);     
      setAccount(
         {
            ...account, ['id']: id
         }
      ) 
     */
    
      await fetch(endpointPhp + "?action=updateAccount", {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           // bank
           account
         })
      })
         .then((res) => res.json())
         .then(
            (result) => { 

               if (result != "error"){                  
                  alert(result);                  
               }else{
                   alert(result);
              }              

            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         }); 
         
         closeModal('update');
   }
   




  
   const deleteAccount = async (id) => {
      console.log(id);     
      await fetch(endpointPhp + "?action=deleteAccount", {
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
                  getListAccountByBank(bankData.id);
                  alert(result);                  
               }else{
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
   }
 



  /*
   const removeString =(value)=>{
      //let formatStr =   value.replace(/[^0-9]/g, '');
       return value.replace(/[^0-9]/g, '');
   }
  */



   const  selectAccount = (id ,type , number, amount)=>{

       setAccountData(
          {
            ...accountData,['id']:id ,   
               accountData,['type']:type,
               accountData,['number']:number,
               accountData,['amount']:amount,
          }
       )

       navigation.navigate("SelectedAccount")
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

     source={{ uri: `data:image/png;base64,${bankData.img}` }}
      style={{
         padding:imageScaleHeight,                                
         width:80,                    
         height:imageScaleHeight,
         borderRadius: 10,
      }}
      resizeModel='contain'
   />       

   <View ><Text style={styles.textInfo}>{bankData.name}</Text></View>  

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
             paddingTop: h_max_hight ,
             backgroundColor:'black',            
            
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

                 <View style={styles.contentList}>

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


               <View style={styles.boxBtn}>
              
                  <View>
                     <Pressable style={styles.btn}
                       onPress={() => selectAccount(
                        item.id_bka ,
                        item.type_bka, 
                        item.number_bka,
                        item.amount_bka
                      )}
                      >
                      <Text style={styles.textBtn}>Select</Text>
                    </Pressable>                    
                  </View> 
                                  
                  <View>
                     <Pressable style={styles.btn}
                        onPress={() => deleteAccount(item.id_bka)}
                     >
                        <Text style={styles.textBtn}>Deletar</Text>
                     </Pressable>
                  </View>


                  <View>
                     <Pressable style={styles.btn}
                        onPress={() => getListAccountById(item.id_bka)}
                     >
                        <Text style={styles.textBtn}>Editar</Text>
                     </Pressable>
                  </View>   


              </View>

             </View>        

            }
         >
     </FlatList>

    }

     





     <View>

        <Modal 
            animationType='fade'
            visible={modalCadAccount}
         >
         
        <View  style={styles.containerModal}>

           <View style={styles.titleModal} >
              <Text style={styles.textInfo}>{` Register MODAL`}</Text>
           </View>


           <View style={styles.formModal}>

             <TextInput style={styles.input}
               placeholder="Account Number"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('number', valor)
               }
               value={account.number}
            />



            <TextInput style={styles.input}
               placeholder="type"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('type', valor)
               }
               value={account.type}
            />



            <TextInput style={styles.input}
               placeholder="open date"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('open', valor)
               }
               value={account.open}
            />


            <TextInput style={styles.input}
               placeholder="description"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('desc', valor)
               }
               value={account.desc}
            />


             <TextInput style={styles.input}
               placeholder="Amount"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('amount', valor)
               }
               value={account.amount}
            />

          </View>


            <View style={styles.boxBtn}>
               <View >
                  <Pressable style={styles.btn}
                     onPress={() => closeModal('cad')}>                  
                     <Text style={styles.textBtn}>Cancel</Text>
                  </Pressable>
               </View>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => insertAccount()}
                  >
                     <Text style={styles.textBtn}>Safe</Text>
                  </Pressable>
               </View>
            </View>

         </View>

     </Modal>

  </View>




  
  <View>

     <Modal 
       animationType='fade'
       visible={modalUpdateAccount}
     >

      <View style={styles.containerModal}>

         <View style={styles.titleModal} >
            <Text style={styles.textInfo}>{` UPDATE MODAL`}</Text>
         </View>

           <FlatList

               data={listAccount}

                renderItem={({ item }) =>               

                <View style={styles.dataList}>

                  <View style={styles.cardList}>

                     <TextInput style={styles.input}
                        placeholder={` ${item.number_bka}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('number', valor)
                        }
                        value={account.number}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.type_bka}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('type', valor)
                        }
                        value={account.type}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.open_date_bka}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('open', valor)
                        }
                        value={account.open}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.desc_bka}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('desc', valor)
                        }
                       value={account.desc}
                     />

                     <TextInput style={styles.input}
                        placeholder={` ${item.amount_bka}`}
                        placeholderTextColor="#cc0000"
                        type="text"
                        onChangeText={
                           (valor) => handleInputChange('amount', valor)
                        }
                        value={account.amount}
                     />



                   <View style={styles.boxBtn}>
                                    
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

            </View>

         </Modal>       

    </View>
 
 



 
   
     <View style={styles.boxBtn}>

       <View style={styles.btn}>
          <Pressable
             onPress={() => setModalCadAccount(true)}
          >
             <Text style={styles.textBtn}>Register Account</Text>
          </Pressable>
       </View>
     
       <View style={styles.btn}>
          <Pressable
             onPress={() => navigation.navigate("Home")}
          >
             <Text style={styles.textBtn}>Home</Text>
          </Pressable>
       </View>

    </View>



   </View>     

   )

}





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



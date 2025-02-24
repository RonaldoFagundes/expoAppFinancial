
import React, { useEffect, useState, useContext } from 'react';
import {
   Pressable,
   FlatList,
   Text,
   TextInput,
   View,
   Modal,
   Image,
}
   from 'react-native';

import { AuthContext } from '../../context/auth';



//import { SelectList } from 'react-native-dropdown-select-list'
//npm i react-native-dropdown-select-list

import styles from './styles';


import Header from '../../components/Header';



export default function SelectedAccount({ navigation }) {








   //  const idBank = 10;
   //  const idAccont = 1;

   //const endpointPhp = 'http://localhost:3322/php-api-financial';



   useEffect(() => {
      //selectAccount(idAccont);
   }, []);


   const {
      endpointPhp,
      bankData,
      accountData,
   } = useContext(AuthContext);



   // const [modalUpdateAccount, setModalUpdateAccount] = useState(false);




  /*
   const [account, setAccount] = useState({
      id: accountData.id,
      number: "",
      type: "",
      open: "",
      desc: "",
      amount: 0,
      fkbnk: bankData.id
   });
  */




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










   // const [selectedAccount, setSelectedAccount] = useState([]);




   //const [listBank, setListBank] = useState([]);



   /*
   const handleInputChange = (atribute, value) => {

      setAccount(
         {
            ...account, [atribute]: value
         }
      )
   }
  */




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
          .catch(() => {
             alert('Erro', 'Não foi possível carregar os dados ');
          });
    }
   */








   /*
   const selectAccount = async (id) => {

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

               //  if (result === 'not found') {
               console.log(result);
               //  } else {  
               setSelectedAccount(result);

               // }

            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }
  */





   /*
    const updateAccount = async () => {
 
         
      //
      console.log(" updateAccount id "+id+" fk "+idBank);
     
       setAccount(
          {
             ...account, ['id']: id,
             account, ['fkbnk']: idBank
          }
       )
      //
       
       await fetch(endpointPhp + "?action=updateAccount", {
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
 
               // setModalUpdateAccount(false);
                selectAccount(idAccont);
                //getListBank();
                console.log(result);
             })
          .catch(function (error) {
             console.log('erro => ' + error.message);
          });     
        
    }
   */




   /*
    const deleteAccount = async () => {
 
       //console.log(" deleteAccount "+id);
       let id = idAccont ;
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
                //   getListAccount();
                selectAccount(idAccont);
                console.log(result);
             })
          .catch(() => {
             alert('Erro');
          });
      
    }
   */







  




   /*
    const closeModal = async (atribute) => {
       if (atribute == "cad") {
          setModalCadAccount(false);         
       } else {
          setModalUpdateAccount(false);
       }
       // getListAccount();
    }
   */




   /*
   const removeString =(value)=>{
      //let formatStr =   value.replace(/[^0-9]/g, '');
       return value.replace(/[^0-9]/g, '');
   }
   */





   const cleanFields =()=>{
     
   }
  





   


   return (



    <View style={styles.main}>

      <Header user="user name"/>

         <View style={styles.boxCard}>

            <View style={styles.boxBtn}>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => navigation.navigate("Home")}
                  >
                     <Text style={styles.textInfo}>Home</Text>
                  </Pressable>
               </View>

            </View>

         </View>




         <View style={styles.boxCard}>
            <Text style={styles.textList}>Tela Account selected</Text>

            <Text style={styles.textList}>{` Banc = ${bankData.name}`}</Text>

            <Text style={styles.textList}>{` ID = ${accountData.id}`}</Text>

            <Text style={styles.textList}>{` TYPE = ${accountData.type}`}</Text>

            <Text style={styles.textList}>{` NUMBER = ${accountData.number}`}</Text>

            <Text style={styles.textList}>{` AMOUNT = ${accountData.amount}`}</Text>
         </View>



         <View style={styles.boxCard}>


            <View style={styles.boxBtn}>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => navigation.navigate("CreditCard")}
                  >
                     <Text style={styles.textInfo}>creditCard</Text>
                  </Pressable>
               </View>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => navigation.navigate("TransactionsIn")}
                  >
                     <Text style={styles.textInfo}>TransactionsIn</Text>
                  </Pressable>
               </View>

               <View >
                  <Pressable style={styles.btn}
                     onPress={() => navigation.navigate("TransactionsOut")}
                  >
                     <Text style={styles.textInfo}>TransactionsOut</Text>
                  </Pressable>
               </View>

            </View>

         </View>





         {/* 
            <SelectList
               //setSelected={(val) => setTest(val)} 
               // setSelected={(val) => handleInputChange('idbk', val)}  
               //setSelected={(val) => handleInputChange('fkbnk', val.replace(/[^0-9]/g, ''))}
               //setSelected={(val) => getListAccountByBank(val.replace(/[^0-9]/g, ''))}
               setSelected={(val) => getListAccountByBank(removeString(val))}
               data={listBank}
               save="value"

            //
            onChange={item => {
                 {
                 handleInputChange('idbk', item.value)            
                 }
             }}
             //

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
         


       {
        selectedAccount == "not found" 

         ?

          <View><Text style={styles.textList}>Not Found</Text></View>

         :

        <FlatList

            data={selectedAccount}

             renderItem={({ item }) =>

               <View style={styles.dataList}>
                  

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

                     type="number"

                     onChangeText={
                        (valor) => handleInputChange('amount', valor)
                     }
                     
                  />


                 



                  <View style={styles.boxBtn}>

                     <View style={styles.btn}>
                        <Pressable
                           onPress={() => updateAccount()}
                        >
                           <Text style={styles.textAlert}>Editar</Text>
                        </Pressable>
                     </View>

                     <View style={styles.btn}>
                        <Pressable
                           onPress={() => deleteAccount()}
                        >
                           <Text style={styles.textBtn}>Deletar</Text>
                        </Pressable>
                     </View>

                      <View style={styles.btn}>
                        <Pressable
                           onPress={() => creditCard()}
                        >
                           <Text style={styles.textBtn}>Credit Card</Text>
                        </Pressable>
                     </View>  

                      <View style={styles.btn}>
                        <Pressable
                           onPress={() => postMove()}
                        >
                           <Text style={styles.textBtn}>Post</Text>
                        </Pressable>
                     </View>                    

                  </View>

               </View>
            }
         >
         </FlatList>

         }









        {/* 
         <FlatList
            data={selectedAccount}
            renderItem={({ item }) =>

               <View style={styles.dataList}>
              
                <View>          
                  <Image source={{ uri: `data:image/png;base64,${item.img_bnk}` }}
                  style={styles.imgLogo}
                 />            
                </View>              

                  <View>
                     <Text style={styles.textList}>
                        {`Number :  ${item.number_bka}`}
                     </Text>

                     <Text style={styles.textList}>
                        {`Type :  ${item.type_bka}`}
                     </Text>

                     <Text style={styles.textList}>
                        {`Amount:  ${item.amount_bka}`}
                     </Text>
                  </View>

                  <View style={styles.boxBtn}>

                     <View style={styles.btn}>
                        <Pressable
                           onPress={() => setModalUpdateAccount(true)}
                        >
                           <Text style={styles.textAlert}>Editar</Text>
                        </Pressable>
                     </View>

                     <View style={styles.btn}>
                        <Pressable
                           onPress={() => deleteAccount(item.id_bka)}
                        >
                           <Text style={styles.textBtn}>Deletar</Text>
                        </Pressable>
                     </View>

                     <View style={styles.btn}>
                        <Pressable
                           onPress={() => addCreditCard(item.id_bka)}
                        >
                           <Text style={styles.textBtn}>Add Credit Card</Text>
                        </Pressable>
                     </View>

                  </View>

               </View>
            }
         >
         </FlatList>
      



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




        
         <View style={styles.boxBtn}>

            <View style={styles.btn}>
               <Pressable
                  onPress={() => setModalCadAccount(true)}
               >
                  <Text style={styles.textBtn}>Cadastrar</Text>
               </Pressable>
            </View>

            <View style={styles.btn}>
               <Pressable
                  onPress={() => getListAccount()}
               >
                  <Text style={styles.textBtn}>List All Account</Text>
               </Pressable>
            </View>

         </View>
       



         <Modal style={styles.main}
            animationType='fade'
            visible={modalCadAccount}
         >

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

             onChangeText={
              (valor) => handleInputChange('idbk', valor)
            }
            value={account.idbk}         
      
            onValueChange={
              (valor) => handleInputChange('idbk', valor)
           }
            value={account.idbk}           

            />

            <TextInput style={styles.input}
               placeholder="Nº do conta"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('number', valor)
               }
               value={account.number}
            />

            <TextInput style={styles.input}
               placeholder="tipo"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('type', valor)
               }
               value={account.type}
            />

            <TextInput style={styles.input}
               placeholder="data abertura"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('open', valor)
               }
               value={account.open}
            />

            <TextInput style={styles.input}
               placeholder="descrição"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('desc', valor)
               }
               value={account.desc}
            />

             <TextInput style={styles.input}
               placeholder="Saldo"
               placeholderTextColor="#cc0000"
               type="text"
               onChangeText={
                  (valor) => handleInputChange('amount', valor)
               }
               value={account.amount}
            />

            <View style={styles.boxBtn}>

               <View style={styles.btn}>
                  <Pressable
                     onPress={() => setModalCadAccount(false) }
                  >
                     <Text style={styles.textBtn}>Fechar</Text>
                  </Pressable>
               </View>

               <View style={styles.btn}>
                  <Pressable
                     onPress={() => insertAccount()}
                  >
                     <Text style={styles.textBtn}>Salvar</Text>
                  </Pressable>
               </View>

            </View>

         </Modal>
    




         <Modal style={styles.main}
            animationType='fade'
            visible={modalUpdateAccount}
         >

            <FlatList

               data={selectedAccount}

               renderItem={({ item }) =>

                  <View style={styles.dataList}>

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

                        <View style={styles.btn}>

                           <Pressable
                              onPress={() => updateAccount(item.id_bka)}
                           >
                              <Text style={styles.textAlert}>Editar</Text>
                           </Pressable>
                        </View>


                        <View style={styles.btn}>
                           <Pressable onPress={() => setModalUpdateAccount(false)}                  >
                              <Text style={styles.textBtn}>Fechar</Text>
                           </Pressable>
                        </View>

                     </View>

                  </View>
               }
            >
            </FlatList>

         </Modal>
       */}



     



     </View>
   )

}

import React, { useEffect, useState , useContext} from 'react';
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

import { SelectList } from 'react-native-dropdown-select-list'
//npm i react-native-dropdown-select-list

import styles from './styles';






export default function Account() {



   const endpointPhp = 'http://localhost:3322/php-api-financial';

   

   const {
     // setIdAccount,
    //  idAccont,
       setAccountData,
       accountData
     
    } = useContext(AuthContext);



   useEffect(() => {
      getListBank();
      // getListAccount();
   }, []);



   const [modalCadAccount, setModalCadAccount] = useState(false);

   //const [modalUpdateAccount, setModalUpdateAccount] = useState(false);


   const [testData, setTestData] = useState([]);



   const [account, setAccount] = useState({
      //id: 0,
      number: "",
      type: "",
      open: "",
      desc: "",
      amount:0,
      fkbnk: 0
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










   const [listAccount, setListAccount] = useState([]);

   const [listBank, setListBank] = useState([]);


   const handleInputChange = (atribute, value) => {

      setAccount(
         {
            ...account, [atribute]: value
         }
      )
   }


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

                  /*
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
                   */

               }

            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });
   }




   const insertAccount = async () => {

     // console.log(account);   

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

               if(result != "error"){

                  setModalCadAccount(false); 
                  getListAccountByBank(account.fkbnk);

               }else {

                  console.log(result);
               }
               
            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
         });  
          
        
   }



 



   const getListAccount = async () => {
     
      await fetch(endpointPhp + "?action=listAccount")
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




 /*
   const getListAccountById = async (id) => {
      console.log(id);
   }
*/




   const getListAccountByBank = async (id) => {

      console.log(" id getListAccountByBank "+id);

      
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
           
             //  if (result === 'not found') {
                console.log(result);
             //  } else {  
                                  
                 setListAccount(result);
              // }
                

            })
         .catch(() => {
            alert('Erro Não foi possível carregar os dados ');
         });
        
       
   }



   /* 
      const safe = () => {
         var numsStr = account.idbk.replace(/[^0-9]/g,'');       
         console.log(" id "+parseInt(numsStr));
      }
    */


    
 
   


   /*
   const updateAccount = async (id) => {
      console.log(id);     
      setAccount(
         {
            ...account, ['id']: id
         }
      )          
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
               closeModal('update')
               //setModalUpdateBank(false);
               //getListBank();
               console.log(result);
            })
         .catch(function (error) {
            console.log('erro => ' + error.message);
         });     
   }
   */




   /*
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
               //   getListAccount();
               console.log(result);
            })
         .catch(() => {
            alert('Erro', 'Não foi possível carregar os dados ');
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



   
   const removeString =(value)=>{
      //let formatStr =   value.replace(/[^0-9]/g, '');
       return value.replace(/[^0-9]/g, '');
   }




  const  sendDataAccount = (id, img, fk)=>{

         console.log(" id "+id+" img "+img+" fk "+fk)

           /*
         setAccountData(
             {
               ...accountData,['id']:id,
                  accountData,['img']:img,
                  accountData,['fkbnk']:fk
             }
         )
          */
         
         setTestData(
            {
               ...testData,['id']:id,
                  testData,['img']:img,
                  testData,['fkbnk']:fk
            }
          )

          // chamar tela credit card

       // setTestData(id,img);
       // setAccountData(id,img);
  }



  const  respsta = ()=>{
    //console.log(" respsta "+testData.id);
    console.log(" id => "+testData.id+" img => "+testData.img+" fk => "+testData.fkbnk);
}



   return (

      <View style={styles.main}>

            <SelectList
               //setSelected={(val) => setTest(val)} 
               // setSelected={(val) => handleInputChange('idbk', val)}  
               //setSelected={(val) => handleInputChange('fkbnk', val.replace(/[^0-9]/g, ''))}
               //setSelected={(val) => getListAccountByBank(val.replace(/[^0-9]/g, ''))}
               setSelected={(val) => getListAccountByBank(removeString(val))}
               data={listBank}
               save="value"

            /*
            onChange={item => {
                 {
                 handleInputChange('idbk', item.value)            
                 }
             }}
             */

            /*
             onChangeText={
              (valor) => handleInputChange('idbk', valor)
            }
            value={account.idbk}
            */

            /*
            onValueChange={
              (valor) => handleInputChange('idbk', valor)
           }
            value={account.idbk}
            */
          />



          {
            listAccount == "not found"
            
            ?

             <View><Text>Não Existem contas nesse Banco</Text></View>
          
            :

         <FlatList
            data={listAccount}
            renderItem={({ item }) =>

              <View style={styles.dataList}>

                  {/* 
                  <Text style={styles.textList}>
                     {`id :  ${item.id_bka}`}
                  </Text>
                 */}

                 {/* 
                <View>          
                  <Image source={{ uri: `data:image/png;base64,${item.img_bnk}` }}
                  style={styles.imgLogo}
                 />            
                </View>
                */}
                
                <View>

                  <Text style={styles.textList}>
                     {`Bank Name :  ${item.name_bnk}`}
                  </Text>

                  <Text style={styles.textList}>
                     {`Tipo :  ${item.type_bka}`}
                  </Text>

                  <Text style={styles.textList}>
                     {`Nº :  ${item.number_bka}`}
                  </Text>

                  <Text style={styles.textList}>
                     {`Amount:  ${item.amount_bka}`}
                  </Text>
                
                </View>

               <View style={styles.boxBtn}>
                    
                  <View style={styles.btn}>
                     <Pressable
                       onPress={() => sendDataAccount(item.id_bka, item.img_bnk, item.fk_bank)}
                      >
                      <Text style={styles.textAlert}>Select</Text>
                    </Pressable>
                  </View>


                  <View style={styles.btn}>
                     <Pressable
                       onPress={() => respsta()}
                      >
                      <Text style={styles.textAlert}>rersp</Text>
                    </Pressable>
                  </View>
                  
                 {/* 
                  <View style={styles.btn}>
                     <Pressable
                        onPress={() => deleteAccount(item.id_bka)}
                     >
                        <Text style={styles.textBtn}>Deletar</Text>
                     </Pressable>
                  </View>

                  <View style={styles.btn}>
                     <Pressable
                        onPress={() => getListAccountById(item.id_bka)}
                     >
                        <Text style={styles.textBtn}>Editar</Text>
                     </Pressable>
                  </View>
                 */}

               </View>

              </View>
            }
         >
         </FlatList>

          }





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


            /*
            onChange={item => {
                 {
                 handleInputChange('idbk', item.value)            
                 }
             }}
             */

            /*
             onChangeText={
              (valor) => handleInputChange('idbk', valor)
            }
            value={account.idbk}
            */

            /*
            onValueChange={
              (valor) => handleInputChange('idbk', valor)
           }
            value={account.idbk}
            */

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







       {/* 
         <Modal style={styles.main}
            animationType='fade'
            visible={modalUpdateAccount}
         >

            <FlatList

               data={listAccount}

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
               
                     <View style={styles.boxBtn}>
                        <Pressable
                           onPress={() => updateAccount(item.id_bka)}
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
       */}




      </View>
   )

}
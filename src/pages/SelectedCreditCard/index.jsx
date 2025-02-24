import React, { useEffect, useState, useContext } from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    Pressable,
    FlatList,
    Text,
    TextInput,
    View,
    Modal,
    Image,
    ImageBackground,
    ScrollView,
}from 'react-native';


import { SelectList } from 'react-native-dropdown-select-list'

import * as Print from 'expo-print';

import { AuthContext } from '../../context/auth';

import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

import Header from '../../components/Header';





export default function SelectedCreditCard({ navigation }) {



    
    var dta = new Date();
    var hours = dta.getHours();
    var dd = dta.getDate().toString().padStart(2, '0');
    var mm = (dta.getMonth() + 1).toString().padStart(2, '0');
    var yyyy = dta.getFullYear();
    var today = dd + "/" + mm + "/" + yyyy; 
    
      

    
    
       const listMonth = [
          { key: '1', value: 'January', },
          { key: '2', value: 'February', },
          { key: '3', value: 'March' },
          { key: '4', value: 'April' },     
          { key: '5', value: 'May' },  
          { key: '6', value: 'June' },  
          { key: '7', value: 'July' },  
          { key: '8', value: 'August' },  
          { key: '9', value: 'September' },  
          { key: '10', value:'Octumber' },  
          { key: '11', value:'November' },  
          { key: '12', value: 'December' },  
       ]
    
    
       /*
       const checkDate =()=>{
          console.log(' mês default '+mm+' type ' +surch.date);
       }
       */




    const {
        //endpointPhp,
        accountData,
        endpoint,
        creditCardData,
    } = useContext(AuthContext);





    useEffect(() => {

        listPostByCreditCard();

        listUserCC(creditCardData.id);

        console.log(" dados do cartao  id "+accountData.id+" data vencimento "+creditCardData.due_day)

    }, []);



    const [modalPost, setModalPost] = useState(false);

    const [modalUpdatePost, setModalUpdatePost] = useState(false);




    const [postCreditCard, setPostCreditCard] = useState({
        placeshop: "",
        date: "",
        user: "",
        parcel: "",
        value: 0,
        desc: "",
        expery:"",
        fkcc: creditCardData.id
    });



    /*
     fkac: 4,
 	 due: 15,
	 date: 12,
	 user: "Neyde",
    */

    const [surch, setSurch] = useState({  
        fkac: accountData.id,
        due: creditCardData.due_day,
        date: mm,

        /*     
         fkcc: creditCardData.id
        */
    });

    /*
    const [surchUser, setSurchUser] = useState({
        fkac: accountData.id,
        due: creditCardData.due_day,
        date: mm,
        user: "",         
        //fkcc: creditCardData.id
    });
    */



    const [isList, setIsList] = useState(false);


    const [reportList, setReportList] = useState([]);    
   
    const [selectedPrinter, setSelectedPrinter] = useState();

    const [amount, setAmount] = useState(0);







    const handleInputChange = (atribute, value) => {

        setPostCreditCard(
            {
                ...postCreditCard, [atribute]: value
            }
        )
    }





    



    const closeModal = (atribute) => {
        if (atribute == "post") {
            setModalPost(false);
        } else {
            setModalUpdatePost(false);
        }
    }







    const listPostByCreditCard = async () => { 

        console.log(" fkcc "+surch.fkcc+" mes "+surch.date)
      
        await fetch(endpoint + "?action=listPostByCreditCard", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                surch
            })
        })
            .then((res) => res.json())
            .then(
                (result) => {


                    if(result != "not found"){
                        
                        console.log(result);
                        setIsList(true)
                        setReportList(result);
                        getAmount();

                    }else{

                        console.log(result);
                        setIsList(false)

                    }

                    



                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });    
    }






    const listPostByCreditCardByUser = async () => {      

      //  console.log(" tela selectdeCreditCard getListPostByCreditCard idCC ");

        console.log(" fkcc "+surch.fkcc+" mes "+surch.date+" user "+surch.user)
                             
        await fetch(endpoint + "?action=listPostByCreditCardUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                surch
            })
        })
            .then((res) => res.json())
            .then(
                (result) => {

                    console.log(result);
                    setIsList(true)
                    setReportList(result);
                    getAmountByUser();

                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });    
    }






    const [usersCC, setUsersCC] = useState([]);

    
    const users = [];

    const listUserCC = async (id) => { 
                           
      await fetch(endpoint + "?action=listUsers", {
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
                      console.log(" count "+count);

                      for (var i = 0; i < count; i++) {

                        users.push({
                            value:result[i].user_pcc,
                         })

                      }
 
                      setUsersCC(users);
                     // console.log(" listUserCC "+result);            
  
                  })
              .catch(function (error) {
                  console.log('erro => ' + error.message);
              });
          
      }








    const safePost = async () => {

        await fetch(endpoint + "?action=postCreditCard", {
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

                    console.log(' postCreditCard => ' + result);
                    cleanFields();
                    closeModal("post");
                    listPostByCreditCard();

                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });

    }









    const getAmount = async () => {     

      await fetch(endpoint + "?action=amountCreditCard", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            surch
        })
    })
        .then((res) => res.json())
        .then(
            (result) => {

                console.log(result);
                setAmount(result)
               
            })
        .catch(function (error) {
            console.log('erro => ' + error.message);
        });   
     }
  





    const getAmountByUser = async () => {  
       
        await fetch(endpoint + "?action=amountCreditCardByUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({                
                surch
            })
        })
            .then((res) => res.json())
            .then(
                (result) => {
    
                    console.log(result);
                    setAmount(result);
                   
                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });     
     }
  





     





    const cleanFields = () => {

        setPostCreditCard(
            {
                ...postCreditCard, 'placeshop': "",
                postCreditCard, 'date': "",
                postCreditCard, 'user': "",
                postCreditCard, 'parcel':"",
                postCreditCard, 'value': 0,
                postCreditCard, 'desc': "",
                postCreditCard, 'expery': "",
            }
        )
    }









    const printReport = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        await Print.printAsync({
            html: createDynamicData(),
            printerUrl: selectedPrinter?.url, // iOS only     
        });
        // checkImgStatus();
    };








    const createDynamicData = () => {

        var reportData = '';

        for (let i in reportList) {
            const item = reportList[i];

            reportData = reportData +
                `
            <div 
              style="
               display:block;
                height:1052px;
                width:814px;           
             ">  
             
 
             
               <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                ">             
    
                       
               
                    <div
                      style="            
                        height:15%;
                        width:90%;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;                      
                          ">                               
                           ${item.date_pcc}
                        </p>
                     </div>
               
                </div>





                 <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                ">             
    
                       
               
                    <div
                      style="            
                        height:15%;
                        width:90%;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;                      
                          ">                               
                           ${item.shop_pcc}
                        </p>
                     </div>
               
                </div>


        
    
                <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                "> 
                 

                    <div
                       style="            
                        height:15%;
                        width:80%;
                        text-align:center;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;
                          ">                               
                          ${item.user_pcc}
                        </p>
                     </div>                        
                     
                </div>



                
                 <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                "> 
                 

                    <div
                       style="            
                        height:15%;
                        width:80%;
                        text-align:center;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;
                          ">                               
                          ${item.parcel_pcc}
                        </p>
                     </div>                        
                     
                </div>



                 <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                "> 
                 

                    <div
                       style="            
                        height:15%;
                        width:80%;
                        text-align:center;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;
                          ">                               
                          ${item.value_pcc}
                        </p>
                     </div>                        
                     
                </div>



                 <div            
                  style="
                  display:flex;
                  justify-content: space-between;
                  height:15%;
                  width:100%;              
                "> 
                 

                    <div
                       style="            
                        height:15%;
                        width:80%;
                        text-align:center;              
                      ">
                        <p 
                          style=
                          "
                          font-size:30px;
                          color:black;
                          ">                               
                          ${item.desc_pcc}
                        </p>
                     </div>                        
                     
                </div>


                 
              </div>                 
             `
        }







  const html =
            `
  <!DOCTYPE html> 
   <html>
    
   <head>
      <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
      
    <style>  
    
    body{
          padding: 0;
          margin: 0;
          text-align: center;    
    }
            
    
    #desc-container{    
           display: block;   
           height:1057px;
           width:814px;                 
    }      
    
    #container-standards{
        display: flex;
        justify-content: space-between;  
        height:auto; 
        padding: 12px;
    }
           
   </style>  
       
 </head>
          
  <body>
    
      <section id="">
             
          <div id="">Relatório</div>
    
             <div id="">

                 <div>                  
                   ${creditCardData.type}              
                 </div>


                 <div id="">                  
                   ${reportData}              
                </div>
                  
             </div>  
           
          </div>   
            
      </section>
    
   </body>
    
  </html>        
 `;
  return html;
}










return (

    /*     
     <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
    */


<View style={styles.main}>

      
    <Header user="user name"/>                       
                 

    <View style={styles.containerInfo}>

        <Text style={styles.textInfo}>{` ID  ${creditCardData.id}`}</Text>
        <Text style={styles.textInfo}>{` NUMBER  ${creditCardData.number}`}</Text>
        <Text style={styles.textInfo}>{` TYPE  ${creditCardData.type}`}</Text>
        <Text style={styles.textInfo}>{` EXPIRY  ${creditCardData.expiry}`}</Text>

    </View>



    <View style={styles.containerBtn}>

        <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}>
           <Pressable style={styles.btn}
              onPress={() => setModalPost(true)}>
              <FontAwesome name='drivers-license' size={26} color={"#44E8C3"} />
              <Text style={styles.textBtn}>Post</Text>
           </Pressable>
        </LinearGradient>
        

        <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}>
           <Pressable style={styles.btn}
              onPress={() => printReport()}>
              <FontAwesome name='wpforms' size={26} color={"#44E8C3"} />
              <Text style={styles.textBtn}>Report</Text>
          </Pressable>                    
        </LinearGradient>


        <LinearGradient colors={['#08042F', '#B1B2AB']} style={styles.boxBtn}> 
           <Pressable style={styles.btn}
              onPress={() => navigation.navigate("Home")}>             
              <FontAwesome name='home' size={26} color={"#44E8C3"} />
           </Pressable>
        </LinearGradient>

    </View>


   <ScrollView>

    <View style={styles.boxInfo}>


        <View style={styles.boxSurch}>

             <SelectList        

                setSelected={(key) => 

                setSurch(
                  {
                    ...surch,'date':key
                  }
                )
              }       

                data={listMonth} 
                save="key"      

                placeholder='Select month'

                 //placeholderTextColor='#44E8C3'
               // boxStyles={{color:'#44E8C3'}}        
              // dropdownItemStyles={{color:'#44E8C3'}}
                boxStyles={{backgroundColor:'#314452' }}

                inputStyles={{color:'#44E8C3'}}
                dropdownTextStyles={{color:'#44E8C3'}}
            />



            <Pressable style={styles.btn}
             //</View>onPress={() => listPostByCreditCardByUser()} >
              onPress={() =>  listPostByCreditCard()} >
              <Text style={styles.textBtn}>List By Date</Text>
            </Pressable>

        </View>




        <View style={styles.boxSurch}>

           <SelectList        

               setSelected={(val) => 

                setSurch(
                  {
                    ...surch,'user':val
                  }
                )
               }       

              data={usersCC} 
              save="value"

              placeholder='Select User'

              //placeholderTextColor='#44E8C3'
             // boxStyles={{color:'#44E8C3'}}        
             // dropdownItemStyles={{color:'#44E8C3'}}
              boxStyles={{backgroundColor:'#314452' }}

              inputStyles={{color:'#44E8C3'}}
              dropdownTextStyles={{color:'#44E8C3'}}
            />


           <Pressable style={styles.btn}
              //</View>onPress={() => listPostByCreditCardByUser()} >
              onPress={() =>  listPostByCreditCardByUser()} >
              <Text style={styles.textBtn}>List By User</Text>
           </Pressable>


           <Pressable style={styles.btn}
              //</View>onPress={() => listPostByCreditCardByUser()} >
              onPress={() =>  listPostByCreditCard()} >
              <Text style={styles.textBtn}>All</Text>
          </Pressable>
       

    </View>  


  </View>

   

        

   

    {
     isList 
     ?


    <View style={styles.containerReport}>


       <View style={styles.boxInfo}>

          <Text style={styles.textInfo}>{` Total R$ ${amount}`}</Text>

       </View>


        <View style={styles.headerReport}>


                <View style={styles.contentTitle}>
                     <Text style={styles.textTitle}>
                        {`Date`}
                     </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.textTitle}>
                        {`Shop`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.textTitle}>
                        {`User`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.textTitle}>
                        {`Parcel`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.textTitle}>
                        {`Value`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.textTitle}>
                        {`Desc`}
                    </Text>
                </View> 

        </View>  




        <FlatList

                // horizontal
            data={reportList}                   
            renderItem={({ item }) =>
                    

            <View style={styles.containerList} >

            
                <View style={styles.contentList} >   
                    <Text style={styles.textList}>
                       {item.date_pcc}
                    </Text>
                </View>


                <View style={styles.contentList} >
                    <Text style={styles.textList}>
                        {item.shop_pcc}
                    </Text>                                   
                </View>


                               
                <View style={styles.contentList} >   
                    <Text style={styles.textList}>
                       {item.user_pcc}
                    </Text>
                </View>


                <View style={styles.contentList} >
                    <Text style={styles.textList}>
                       {item.parcel_pcc}
                    </Text>
                </View> 



                <View style={styles.contentList} >
                     <Text style={styles.textList}>
                      {item.value_pcc}
                    </Text>
                </View>
                               

                <View style={styles.contentList} >
                    <Text style={styles.textList}>
                        {item.desc_pcc}
                    </Text>                                  
                </View> 


            </View>

            }

                //  showsHorizontalScrollIndicator={false}
       
            >

       </FlatList>

    </View>

     :

     <View style={styles.boxInfo}>

          <Text style={styles.textInfo}>{` Não Existe Compras no mês de ${surch.date} `}</Text>

    </View>

    }

    </ScrollView>


    
            {/* 
            <FlatList

                data={reportList}
                renderItem={({ item }) =>


                    <View style={styles.dataList}>


                        <View style={styles.cardList}>


                            <View >

                                <Text style={styles.textList}>
                                    {`ID  :  ${item.id_pcc}`}
                                </Text>


                                <Text style={styles.textList}>
                                    {`Shop :  ${item.shop_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`Date :  ${item.date_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`User :  ${item.user_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`Parcel :  ${item.parcel_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`Value :  ${item.value_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`Desc :  ${item.desc_pcc}`}
                                </Text>

                                <Text style={styles.textList}>
                                    {`Fk CC :  ${item.fk_cc}`}
                                </Text>

                            </View>


                        </View>

                    </View>

                }

            >
    </FlatList>

 */}




    <Modal
       animationType='fade'
       visible={modalPost}
    >

      
        <View style={styles.containerModal}>
        
        
            <View style={styles.contentModal} >
                 <Text style={styles.textInfo}>{` Register PostCreditCard`}</Text>
            </View>
        


            <View style={styles.formModal}>


                <TextInput style={styles.input}
                            placeholder="Placeshop"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('placeshop', valor)
                            }
                            value={postCreditCard.placeshop}
                />

                <TextInput style={styles.input}
                            placeholder="Date"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('date', valor)
                            }
                            value={postCreditCard.date}
                />

                <TextInput style={styles.input}
                            placeholder="User"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('user', valor)
                            }
                            value={postCreditCard.user}
                />

                <TextInput style={styles.input}
                            placeholder="Parcel"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('parcel', valor)
                            }
                         value={postCreditCard.parcel}
                />

                <TextInput style={styles.input}
                            placeholder="Value"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('value', valor)
                            }
                         value={postCreditCard.value}
                />


                <TextInput style={styles.input}
                            placeholder="Description"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('desc', valor)
                            }
                            value={postCreditCard.desc}
                />

                <TextInput style={styles.input}
                            placeholder="Velidade"
                            placeholderTextColor="#44E8C3"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('expery', valor)
                            }
                            value={postCreditCard.expery}
                />

            </View>



            <View style={styles.containerBtn}>

                    
                    <Pressable style={styles.btn}
                         onPress={() => closeModal('post')}>
                        <Text style={styles.textBtn}>Cancel</Text>
                    </Pressable>
                       
                    <Pressable style={styles.btn}
                        onPress={() => safePost()}>
                        <Text style={styles.textBtn}>Safe</Text>
                     </Pressable>

            </View>



        </View>


    </Modal>






            {/* 

            <Modal
                animationType='fade'
                visible={modalUpdatePost}
            >

                <View style={styles.containerModal}>

                    <View style={styles.titleModal} ><Text style={styles.textInfo}>{` UPDATE MODAL`}</Text></View>

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
                                                <Text style={styles.textAlert}>Confirm</Text>
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
          */}



    </View>



  )

}





       {/* 
        </KeyboardAvoidingView>
      */}

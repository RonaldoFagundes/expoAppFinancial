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
}
    from 'react-native';

import * as Print from 'expo-print';

import { AuthContext } from '../../context/auth';


import styles from './styles';


export default function SelectedCreditCard({ navigation }) {



    const {
        endpointPhp,
        creditCardData,
    } = useContext(AuthContext);



    useEffect(() => {
        getListPostByCreditCard(creditCardData.id);
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
        fkcc: creditCardData.id
    });

    const [reportList, setReportList] = useState([]);

    const [selectedPrinter, setSelectedPrinter] = useState();

    const [amount, setAmount] = useState("");





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





    const getListPostByCreditCard = async (id) => {

        console.log(" tela selectdeCreditCard getListPostByCreditCard idCC " + id);

        await fetch(endpointPhp + "?action=listPostByCreditCard", {
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
                    setReportList(result);

                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });
    }






    const safePost = async () => {

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

                    console.log(' postCreditCard => ' + result);
                    cleanFields();
                    closeModal("post");
                    getListPostByCreditCard(creditCardData.id);

                })
            .catch(function (error) {
                console.log('erro => ' + error.message);
            });

    }






    const getAmount = async () => {
  
        await fetch(endpointPhp + "?action=amountCreditCard")
           .then((res) => res.json())
           .then(
              (result) => {
  
                 if (result != "error"){  
                    setAmount(result);
                 }else{
                    alert(result);
                 }
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

        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >

            <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center', }}>
                <Text>{` ID  ${creditCardData.id}`}</Text>
                <Text>{` NUMBER  ${creditCardData.number}`}</Text>
                <Text>{` TYPE  ${creditCardData.type}`}</Text>
                <Text>{` EXPIRY  ${creditCardData.expiry}`}</Text>
            </View>

            <View style={styles.boxBtn}>

                <View style={styles.btn}>
                    <Pressable
                        onPress={() => setModalPost(true)}
                    >
                        <Text style={styles.textBtn}>Post Credit Card</Text>
                    </Pressable>
                </View>

                <View style={styles.btn}>
                    <Pressable
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.textBtn}>Home</Text>
                    </Pressable>
                </View>

                <View style={styles.btn}>
                    <Pressable
                        onPress={() => printReport()}
                    >
                        <Text style={styles.textBtn}>Report</Text>
                    </Pressable>
                </View>



                <View style={styles.btn}>
                    <Pressable
                        onPress={() => getAmount()}
                    >
                        <Text style={styles.textBtn}>Amount</Text>
                    </Pressable>
                </View>

            </View>






         <View style={styles.containerReport}>


         <View style={styles.boxInfo}><Text style={styles.textInfo}>{` Total R$ ${amount}`}</Text></View>


            <View style={styles.contentReport}>


                <View style={styles.contentTitle}>
                     <Text style={styles.texTitle}>
                        {`Date`}
                     </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.texTitle}>
                        {`Shop`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.texTitle}>
                        {`User`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.texTitle}>
                        {`Parcel`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.texTitle}>
                        {`Value`}
                    </Text>
                </View>


                <View style={styles.contentTitle}>
                    <Text style={styles.texTitle}>
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

                    <View style={styles.titleModalUpdate} ><Text style={styles.textInfo}>{` Register MODAL`}</Text></View>

                    <View style={styles.formModal}>

                        <TextInput style={styles.input}
                            placeholder="Placeshop"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('placeshop', valor)
                            }
                            value={postCreditCard.placeshop}
                        />



                        <TextInput style={styles.input}
                            placeholder="Date"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('date', valor)
                            }
                            value={postCreditCard.date}
                        />



                        <TextInput style={styles.input}
                            placeholder="User"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('user', valor)
                            }
                            value={postCreditCard.user}
                        />


                        <TextInput style={styles.input}
                            placeholder="Parcel"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('parcel', valor)
                            }
                         value={postCreditCard.parcel}
                        />


                        <TextInput style={styles.input}
                            placeholder="Value"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('value', valor)
                            }
                         value={postCreditCard.value}
                        />

                        <TextInput style={styles.input}
                            placeholder="Description"
                            placeholderTextColor="#cc0000"
                            type="text"
                            onChangeText={
                                (valor) => handleInputChange('desc', valor)
                            }
                            value={postCreditCard.desc}
                        />

                    </View>


                    <View style={styles.boxBtn}>
                        <View >
                            <Pressable style={styles.btn}
                                onPress={() => closeModal('post')}>
                                <Text style={styles.textBtn}>Cancel</Text>
                            </Pressable>
                        </View>

                        <View >
                            <Pressable style={styles.btn}
                                onPress={() => safePost()}
                            >
                                <Text style={styles.textBtn}>Safe</Text>
                            </Pressable>
                        </View>
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




        </KeyboardAvoidingView>


    )

}
import { StyleSheet } from "react-native";



export default StyleSheet.create({



   main:{
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100%',
    width: 'auto',   
    
   },




   containerHeader: {
    height: "auto",
    width: '100%',
    alignItems: 'center',  
    
    marginTop:100,
    marginBottom:15,
 },




 boxBtn: {
  
  flexDirection:'row',
  justifyContent:'space-between', 
  /*
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  borderRadius: 10,    
  backgroundColor: 'black',
  flexWrap:'wrap',
  */
  width: '100%',
  height: 'auto',

  
  marginBottom:20,
  alignItems:'center',
  padding:10,
  backgroundColor:'blue'
},




btn: {
  width: 'auto',
  height: 'auto',
  padding: 14,

  /*
  
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  */

  borderRadius: 10,
  color: "black",
  backgroundColor: 'white',
  
},








 
containerReport:{
   
  flexDirection:'column',
  //  alignItems:'center',

   // width: "auto",
  //  height: "auto",  

   // backgroundColor: 'rgba(215, 202, 165, 0.2)',      

   // backgroundColor:"red",


    padding: 6,     
  //  margin: 2,
},



contentReport:{
   
  flexDirection:'row',
  justifyContent:'space-evenly' ,
  //  alignItems:'center',

  //  width: "auto",
  //  height: "auto",  

   // backgroundColor: 'rgba(215, 202, 165, 0.2)',      

   // backgroundColor:"orange",

    marginBottom:10
  //  padding: 4,     
  //  margin: 2,
},




contentTitle:{
   
 // flexDirection:'row',
  //justifyContent:'space-between' ,
  //  alignItems:'center',

    width: 60,
    height: "auto",  

   // backgroundColor: 'rgba(215, 202, 165, 0.2)',      

   // backgroundColor:"green",


   // padding: 6,     
  //  margin: 2,
},


texTitle: {
  fontSize: 12,
  color: 'black',
  fontWeight: 'bold',
 // marginBottom:10
},







containerList:{
   
  flexDirection:'row',
  justifyContent:'space-between' ,
  //  alignItems:'center',

  //  width: "auto",
  //  height: "auto",  

   // backgroundColor: 'rgba(215, 202, 165, 0.2)',      

   // backgroundColor:"orange",
    marginBottom:4

  //  padding: 4,     
  //  margin: 2,
},





contentList:{
   
  // flexDirection:'row',
   //justifyContent:'space-between' ,
   //  alignItems:'center',
 
     width: 60,
     height: "auto",  
     flexWrap:'wrap'
    // backgroundColor: 'rgba(215, 202, 165, 0.2)',      
 
    // backgroundColor:"green",
 
 
    // padding: 6,     
   //  margin: 2,
 },

 

textList: {
  fontSize: 8,
  color: 'black',
  fontWeight: 'bold',
 // marginBottom:10
},









 /*
  dataList: {
    borderRadius: 6,
    shadowColor: 'black',    
    elevation: 4,
    margin:4,

    backgroundColor:"green"
   },




   cardList:{

    flexDirection:'column',
  //  alignItems:'center',

    width: "auto",
    height: "auto",  

   // backgroundColor: 'rgba(215, 202, 165, 0.2)',      

    backgroundColor:"red",


    padding: 22,     
    margin: 2,
 },





 contentCardList:{

    flexDirection:'row',
    alignItems:'flex-start',
    
    width: "100%",
    height: "auto", 

    backgroundColor: 'gray',

    padding:10,
    marginTop:10,
    marginBottom:10

 },




 resizeModel: {
  height: 100,
  width: 100,
  borderRadius: 10,
  },
 */











   /*
   boxCard: {
    width: '80%',
    height: 50,
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'blue',
    fontSize: 16
  },
  */


      boxInfo:{
       alignItems:'center',
       width: 'auto',
       height: 'auto',   
       backgroundColor: 'black',
       padding:10,
       marginBottom:20  
      },

      textInfo: {
        color: 'red',
        fontSize: 22
      },


      /*
      boxBtn: {
        width: '80%',
        height: 50,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#cc0000",
        borderRadius: 10,
        color: "black",
        backgroundColor: 'blue',
        fontSize: 16
      },
     */



      textBtn: {
        color: 'black',
        fontSize: 14
      },


     

      containerModal:{
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        width: '100%',   
       },
    


       /*
       containerModalUpdate:{        
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        width: '100%'
      },
   */

      
      boxAddImg: {
       backgroundColor:'black',
       padding:10,        
       width: "100%",
       height: "auto",
       flexDirection:'column',

       /*
        alignItems:'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 20,  
        padding: 10,
        borderRadius:10
        */
      },


    
     boxImg: {
      backgroundColor: 'transparent',  
      flexDirection: 'column',
      width: 140,
      height: 140,
      borderRadius: 10,
      marginBottom: 60
    },
    
      

      boxModalBtn:{
        backgroundColor:'black',    
        width: "100%",
        height: "auto",
        flexDirection:'row',
        justifyContent:'space-around', 
        padding: 10,
      },



      formModal:{
      backgroundColor: 'blue',  
      flexDirection: 'column',
      alignItems:'center',
      width: '90%',
      height: 'auto',
      borderRadius: 10,
      marginBottom: 10,
      padding:20,
      marginTop:20
      },




      input: {
        width: '100%',
        height: 50,
        marginBottom: 16,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#cc0000",
        borderRadius: 10,
        color: "black",
        backgroundColor: 'white',
        fontSize: 16
      },




     

      titleModal:{
        height: '6%',
        width: '100%',
        alignItems:'center',
        backgroundColor:'green',
        marginTop:100
      }

    });


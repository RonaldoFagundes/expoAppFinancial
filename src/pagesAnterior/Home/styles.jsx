import { StyleSheet } from "react-native";



export default StyleSheet.create({




   main:{
    flex:1,
    /*
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100%',
    width: 'auto', 
    backgroundColor:'blue'
    */ 
   },





   /*
   containerHeader: {
  //  height:150,
    width: '100%',
    padding: 10,  
    backgroundColor: '#121212',
    alignItems:'center',
    justifyContent:'center'
 },
 


 contentHeader: {  
  width: '100%',
  flexDirection:'row',
  alignItems: 'center',
  justifyContent:'center'
},
 */



textHeader: {  
  fontSize:18,
  fontWeight:'bold',
  textAlign:'center',
  color:'#fff'
},



/*
itemFlatList:{
   height:360,
   padding:20,
   borderBottomWidth:1,
   borderBottomColor:'#ccc',
   backgroundColor:'blue',
   marginBottom:10
},
*/




boxBtnOut: { 
  width: '100%',
  height: 'auto', 

  flexDirection:'row',
  justifyContent:'space-between', 

   backgroundColor:'yellow'
  /*
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  borderRadius: 10,    
  backgroundColor: 'black',
  flexWrap:'wrap',

  
  
  marginTop:50,
  //marginBottom:10,
 // alignItems:'center',
  padding:10,
  backgroundColor:'brown'
  */
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
 // marginTop:50,
 // marginBottom:20,
 // alignItems:'center',
  padding:10,
  backgroundColor:'brown'
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




  
containerList: {
    //flexDirection:'column',
    //alignItems:'center',
    backgroundColor:'black',
    padding:10,
    marginTop:6,
    /*
    height:'auto',
    borderRadius: 6,
    shadowColor: 'black',    
    elevation: 4,
    margin:4,    
    shadowOpacity:'black' 
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    */
   },
 



   contentList:{
    flexDirection:'column',
    alignItems:'center',   
    borderRadius: 10,
    width: "auto",
    height: 'auto', 
    padding: 6, 
    /*    
    margin: 2,
   borderWidth:2,
   borderBottomColor:'blue',   
   shadowColor: 'black',    
   elevation: 4,
   borderBottomWidth:1,
   borderBottomColor:'black', 
   shadowColor: 'orange',
   shadowOffset: {width: -4, height: 6},
   shadowOpacity: 0.4,
   shadowRadius: 6,
  */
 },


 contentCardList:{
    flexDirection:'column',
    alignItems:'flex-start',    
    width: "100%",
    height: "auto",    
    padding:10,
    marginTop:10,
    marginBottom:10
 },


 resizeModel: {
  height: 80,
  width: 80,
  borderRadius: 10, 
 
  },


 textList: {
  fontSize: 16,
  color: 'yellow',
  fontWeight: 'bold',
  marginBottom:10
},








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




      textInfo: {
        color: 'white',
        fontSize: 18
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

        flex:1,
        padding:10
        /*
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        width: '100%', 
        */
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
       marginBottom:10, 
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
     // marginBottom: 10
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
      width: 'auto',
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


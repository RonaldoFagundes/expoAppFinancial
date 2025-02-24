import { StyleSheet } from "react-native";



export default StyleSheet.create({




   main:{
    flex:1,
    //backgroundColor:'#121212'

    backgroundColor:'#1C1B20'
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



/*
boxBtn: { 
  width:'auto',
  height:'auto',
  alignItems:'center', 
  marginTop:20,
  marginStart:10,
  marginEnd:10,
  borderRadius:10,
  backgroundColor:'#0A0352', 
},
*/



 containerBtn: {  
  flexDirection:'row',
  justifyContent:'space-between', 
  padding: 10,
 // borderBottomWidth: 1,
 // borderBottomColor: "#cc0000",
  borderRadius: 10,    
  //backgroundColor:'#0A0352',
 // backgroundColor: '#11132f', 
  flexWrap:'wrap',  
  width: '100%',
  height: 'auto',
  borderWidth: 1,
  borderBottomColor: "#44E8C3", 
  borderRadius: 10,
 // marginTop:50,
 // marginBottom:20,
 // alignItems:'center',  
},


boxBtn: {
  borderRadius: 10,
},



btn: {
  width: 'auto',
  height: 'auto',
  padding: 14,
  /*  
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  */
  //borderRadius: 10,
 // color: "black",
 // backgroundColor: '#08042F',  
 // marginTop:10,
 // marginBottom:10
},



textBtn: {
  color: '#44E8C3',
  fontSize: 14,
  fontWeight: 'bold',
},


  
containerList: {
    //flexDirection:'column',
    //alignItems:'center', 
    //backgroundColor: '#11132f', 

    padding:10,
   // marginTop:6,
    flexDirection:'column',
    alignItems:'center',   
    borderRadius: 10,
    width: "auto",
    height: 'auto', 
   
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
    width: "96%",
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
  resizeMode:'contain',
  borderRadius:18
  },


 textList: {
  fontSize: 16,
  color: '#a2eaf1',
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
        color: '#44E8C3',
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

      
    

    

      containerModal:{
        flex:1,
        padding:10,
        height:'100%',
        paddingBottom:'50%' ,
        //backgroundColor:'#1C1B20',       
        //backgroundColor:'red', 
       
        /*
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        width: '100%', 
        */
       },     




      contentModal:{
        height: 'auto',
        width: '100%',
        alignItems:'center',
        backgroundColor:'#1A1144',
        marginTop:20,       
        padding:10,
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10,
      },


       /*
      boxAddImg: {
        backgroundColor:'#1A1144',
        padding:10,        
        width: "100%",
        height: "auto",
        flexDirection:'column',
        marginBottom:10,
        borderRadius:6 
        //
         alignItems:'center',
         borderRadius: 10,
         marginTop: 5,
         marginBottom: 20,  
         padding: 10,
         borderRadius:10
         //
       },
       */

       boxImg: {
        backgroundColor: 'transparent',
        flexDirection: 'column',
        width: '100%',
        height: 'auto',
        alignItems:'center',
        padding:10,
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10, 
        marginTop:20,        
      },


      formModal:{
        //backgroundColor: '#24405F',  
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems:'center',
        width: '100%',
        height: 'auto',
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10,
        marginBottom: 20,
        padding:20,
        marginTop:20
        },
  

      input: {
        width: '100%',
        height: 50,
        marginBottom: 16,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#44E8C3",
        borderRadius: 10,
        color: "#44E8C3",
        backgroundColor: '#062531',
        fontSize: 16
      },


      boxModalBtn:{
        backgroundColor:'black',    
        width: "100%",
        height: "auto",
        flexDirection:'row',
        justifyContent:'space-around', 
        padding: 10,
      },



    });


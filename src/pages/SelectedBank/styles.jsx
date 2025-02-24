import { StyleSheet } from "react-native";



export default StyleSheet.create({



   main:{
    flex:1,
    backgroundColor:'#121212'
    /*
    flexDirection: 'column',
    justifyContent:'center',
    alignItems:'center',
    height: '100%',
    width: 'auto',   
    */
   },



   /*
   containerHeader: {
    height: "auto",
    width: '100%',
    alignItems: 'center',  
    
    marginTop:100,
    marginBottom:15,
 },
 */


/*
 boxBtn: {
  
  flexDirection:'row',
  justifyContent:'space-between', 
  //
  padding: 10,
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  borderRadius: 10,    
  backgroundColor: 'black',
  flexWrap:'wrap',
  //
  width: '100%',
  height: 'auto',

  
  marginBottom:20,
  alignItems:'center',
  padding:10,
  backgroundColor:'blue'
},
*/






btn: {
  width: 'auto',
  height: 'auto',
  padding: 14,
  /*
  width: 'auto',
  height: 'auto',
  padding: 14, 
  borderRadius: 10,
  color: "black",
  backgroundColor: '#08042F',  
  marginTop:10,
  marginBottom:10
  */
},



textBtn: {
  color: '#44E8C3',
  fontSize: 14,
  fontWeight: 'bold',
},




 



 
containerList: {
  //flexDirection:'column',
  //alignItems:'center',
    height:'100%',
   // backgroundColor:'#121212',
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







  dataList: {
    borderRadius: 6,
    shadowColor: 'black',    
    elevation: 4,
    margin:4,    
   },






   cardList:{
    flexDirection:'column',
    alignItems:'center',
    width: "auto",
    height: "auto",    
    backgroundColor: 'rgba(215, 202, 165, 0.2)',      
    padding: 22,     
    margin: 2,
 },




/*
 contentCardList:{
    flexDirection:'column',
    alignItems:'flex-start',    
    width: "100%",
    height: "auto", 
    backgroundColor: 'gray',
    padding:10,
    marginTop:10,
    marginBottom:10
 },
*/



 resizeModel: {
  height: 80,
  width: 80,
  borderRadius: 10,
  },




 textList: {
  fontSize: 16,
  color: '#a2eaf1',
  fontWeight: 'bold',
  marginBottom:10
},


textAlert: {
  fontSize: 22,
  color: 'red',
  textAlign:'center',
  fontWeight: 'bold',
  marginBottom:10
},


textInfo: {
  color: '#44E8C3',
  fontSize: 18
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
      contentBtn: {  
        flexDirection:'row',
        justifyContent:'space-between',
        width: '90%',
        height: 'auto',       
        backgroundColor: '#0A0352',
        paddingStart:5,
        paddingEnd:5,
        //
        marginStart: 10,
        marginEnd: 10,
        marginTop:10,
        //
        borderRadius: 10,
      },
   



      containerBtn: {  
        flexDirection:'row',
        justifyContent:'space-around',
        width: 'auto',
        height: 'auto',       
        //backgroundColor: '#0A0352',
        backgroundColor: '#11132f',     
        marginStart: 10,
        marginEnd: 10,
        marginTop:10,     
        borderRadius: 10,
      },
       */


      containerBtn: {  
        flexDirection:'row',
        justifyContent:'space-between', 
        padding: 10,
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10,     
        // backgroundColor: '#11132f', 
        flexWrap:'wrap',  
        width: '100%',
        height: 'auto',      
      },

     
      boxBtn: {
        borderRadius: 10,
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

      /*
      boxAddImg: {
       backgroundColor:'black',
       padding:10,        
       width: "100%",
       height: "auto",
       flexDirection:'column',

       /
        alignItems:'center',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 20,  
        padding: 10,
        borderRadius:10
        /
      },
     */

    /*
     boxImg: {
      backgroundColor: 'transparent',  
      flexDirection: 'column',
      width: "100%",
      height: "auto",
     // width: 140,
     // height: 140,    
      marginBottom: 60,
      borderWidth: 1,
      borderBottomColor: "#44E8C3", 
      borderRadius: 10,
    },
    */
      

   
    



      containerModal:{
        flex:1,
        padding:10,
        height:'100%',
        paddingBottom:'50%' ,
       
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
        marginTop:30,        
        padding:10,
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10,
      },

      formModal:{
       // backgroundColor: '#24405F',  
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignItems:'center',
        width: 'auto',
        height: 'auto',      
        padding:20,
        marginTop:40,
        marginBottom:40,
        borderWidth: 1,
        borderBottomColor: "#44E8C3", 
        borderRadius: 10,
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


/*
      boxModalBtn:{
        backgroundColor:'black',    
        width: "100%",
        height: "auto",
        flexDirection:'row',
        justifyContent:'space-around', 
        padding: 10,
      },
*/


     



    });


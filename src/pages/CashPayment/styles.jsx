import { StyleSheet } from "react-native";



export default StyleSheet.create({



main:{
    flex:1,
    backgroundColor:'#000000'   
},




containerInfo:{
    flexDirection:'column',
    alignItems:'flex-start', 
    backgroundColor:'#0A0352',    
    width: "auto",
    height: "auto",    
    padding:10,
    marginStart: 10,
    marginEnd: 10,
    marginTop:10,
    marginBottom:10,
    borderRadius: 10,
},
   
  
textInfo: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
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
    flexWrap:'wrap'
},
  

 


btn: {
    width: 'auto',
    height: 'auto',
    padding: 14, 
    borderRadius: 10,
    color: "black",
    backgroundColor: '#08042F',  
    marginTop:10,
    marginBottom:10
},
  


textBtn: {
  color: '#44E8C3',
  fontSize: 14,
  fontWeight: 'bold',
},




boxInfo:{
    width: 'auto',
    height: 'auto', 
    backgroundColor: '#11132f',
    alignItems:"center",
    marginStart: 10,
    marginEnd: 10,
    marginTop:10,   
    marginBottom:10,   
    borderRadius: 10,
    padding:10

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





headerReport:{
   
  flexDirection:'row',
  justifyContent:'space-evenly' ,

  //  alignItems:'center',
  //  width: "auto",
  //  height: "auto", 
  //  backgroundColor: 'rgba(215, 202, 165, 0.2)',  
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


textTitle: {
  fontSize: 12,
  color: '#44E8C3',
  fontWeight: 'bold',
 // marginBottom:10
},








containerList:{
  /*
  flexDirection:'column',
  alignItems:'flex-start', 
  backgroundColor:'#0A0352',    
  width: "auto",
  height: "auto",    
  padding:10,
  marginStart: 10,
  marginEnd: 10,
  marginTop:10,
  marginBottom:10,
  borderRadius: 10,
   */
  
  flexDirection:'row',
  alignItems:'flex-start',
    
    width: "100%",
    height: "auto", 

    backgroundColor: 'gray',

    padding:10,
    marginTop:10,
    marginBottom:10
},



/*
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
*/




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







containerModal:{
  flex:1,
  padding:10,
  height:'100%',
  paddingBottom:'50%' ,
  backgroundColor:'#1C1B20',         
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
  width: 'auto',
  alignItems:'center',
  backgroundColor:'#1A1144',
  marginTop:10,
  padding:10
},

formModal:{
  backgroundColor: '#24405F',  
  flexDirection: 'column',
  alignItems:'center',
  width: 'auto',
  height: 'auto',
  borderRadius: 6,
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
  borderBottomColor: "#44E8C3",
  borderRadius: 10,
  color: "#44E8C3",
  backgroundColor: '#062531',
  fontSize: 16
},









  /*
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
  /
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




btn: {
  width: 'auto',
  height: 'auto',
  padding: 14,

  //
  
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  //

  borderRadius: 10,
  color: "black",
  backgroundColor: 'white',
  
},




 /
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
 




   /
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
  /


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


      /
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
     /



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
    


       /
       containerModalUpdate:{        
        backgroundColor:'red',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        height: '100%',
        width: '100%'
      },
   /

      
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

      */



    });


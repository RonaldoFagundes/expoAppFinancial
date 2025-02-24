import { StyleSheet } from "react-native";



export default StyleSheet.create({


  
  main:{
    flex:1,
    backgroundColor:'#1C1B20',

    /*
    flexDirection: 'column',
    alignItems:'center',
    height:'100%' ,
    width:'100%',
    */
    //paddingBottom:'100%'
   },
  


   /*
   containerHeader:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100%',
      height:'auto',
      marginTop:10,
      backgroundColor:'blue'
   },
   */


   containerInfo:{
    flexDirection:'column',
    alignItems:'flex-start', 
    backgroundColor:'#0A0352',    
    width: "auto",
    height: "auto",    
    padding:20,
    marginStart: 10,
    marginEnd: 10,
    marginTop:10,
    marginBottom:10,
    borderRadius: 10,
  },


  textInfo: {
    fontSize: 16,
    color: '#a2eaf1',
    fontWeight: 'bold',
 },



 emptyBox:{
  height:"60%"
 },

 containerBtn: {  
  flexDirection:'row',
  alignItems:'center',
  justifyContent:'space-between', 
  padding: 10,  
  flexWrap:'wrap',  
  width: '100%',
  height: 'auto',
  borderWidth: 1,
  borderBottomColor: "#44E8C3",  
  borderRadius: 10,
  //marginTop:"40%"

/*
  flexDirection:'row',
  justifyContent:'space-between',
  width: '100%',
  height: 'auto',
 // backgroundColor: '#0A0352',
//  backgroundColor:'#0c1037', 
  backgroundColor:'#0a1327',  
  marginStart: 10,
  marginEnd: 10,
  marginTop:10,      
  borderRadius: 10,
  flexWrap:'wrap',
  padding:10
*/

},

boxBtn: {
  borderRadius: 10,
},

btn: {
  width: 'auto',
  height: 'auto',
  padding: 12,
  /*
  width: 'auto',
  height: 'auto',
  padding: 14,
  /  
  borderBottomWidth: 1,
  borderBottomColor: "#cc0000",
  /
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




scrollView:{
   width:'94%'
},





/*
containerList: {
  height:'auto',  
  padding:10,
  marginTop:10,

  backgroundColor:'red',
  marginBottom:50
 // marginBottom:"30%"
},
*/

containerList: {
   height:"100%",
   marginBottom:10
},


contentList:{
flexDirection:'column',
alignItems:'center',   
borderRadius: 10,
width: "auto",
height: '100%', 
padding: 6,
marginTop:12,
},


containerCard:{   
  alignItems:'center',
 // marginStart:3,
 // marginEnd:3,   
 // backgroundColor:'#061435'  
 flexDirection:'column',   
 backgroundColor:'#0A0352',   

 width: "100%",
 height: "auto",    
 padding:10,
 marginStart: 8,
 marginEnd: 8,
 marginTop:5,
 marginBottom:5,
 borderRadius: 10,
},





contentCard:{
 width:'auto',
 height:'auto',
 borderRadius: 10,
 elevation: 4,
// margin:4,
 padding:10,
 marginBottom:10,
 backgroundColor:'#0b1936', 
},






dataCard:{
  flexDirection:'row',
  justifyContent:'space-between',
  marginTop:8,
  marginBottom:8,
},





textCard: {
  fontSize: 16,
  color: '#a2eaf1',
  fontWeight: 'bold',
},








containerModal:{
  flex:1,
  padding:10,
  height:'100%',
  paddingBottom:'50%' 
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



boxCard: {
  width: '100%',
  height: 'auto',    
  padding: 10,
  flexDirection:'column',
  alignItems:'center',
  borderWidth: 1,
  borderBottomColor: "#44E8C3",  
  borderRadius: 10,
  //color: "black",
  //backgroundColor:'#0c1037', 
  backgroundColor: 'transparent',
 // fontSize: 16,
  marginTop:20,
  marginBottom:20
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
  boxBtn: {  
   // flexDirection:'row',
  //  justifyContent:'space-between',
    width: 'auto',
    height: 'auto',

   // backgroundColor: '#0A0352',
  //  backgroundColor:'#0c1037',
   
    backgroundColor:'#0a1327',

    
   // marginStart: 10,
   // marginEnd: 10,
  //  marginTop:10,      
    borderRadius: 10,
   // flexWrap:'wrap',
    padding:10
  },

 */  




     /*
      dataContainer:{
       height:'auto' ,
       flexDirection:'column',
       alignItems:'center',
       backgroundColor:'gray',
       marginTop:10,
       marginBottom:40,
       borderRadius: 10,
       elevation: 4,
       // margin:4,
       padding:10,  
      },
     */


      /*
      dataList: {
        width:'70%',
        height:'auto',
        borderRadius: 6,
        elevation: 4,
       // margin:4,
        padding:10,
        marginBottom:10,
        backgroundColor:'black'
       },
       */


      
      

     
       /*
       input: {
        width: '94%',
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
     */

      
      
    });


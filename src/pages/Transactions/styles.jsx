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
    marginBottom:'90%',
    borderRadius: 10,
  },


  textInfo:{
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',    
  },




 containerBtn: {  
  flexDirection:'row',
  justifyContent:'space-around',
  width: '94%',
  height: 'auto',       
  //backgroundColor: '#0A0352',
 // backgroundColor: '#113450',
  backgroundColor: '#11132f',
  marginStart: 10,
  marginEnd: 10,        
  borderRadius: 10,
  flexWrap:'wrap',

//  marginVertical:'100%'
 
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

  
   


modal:{
  height:'100%',
  flexDirection:'column',
  alignItems:'center',
  backgroundColor:'#000000',
  paddingBottom:20   
 },


boxCard: {
  width: '94%',
  height: 'auto',    
  padding: 10,
  flexDirection:'column',
  alignItems:'center',
 // borderBottomWidth: 1,
 // borderBottomColor: "#cc0000",
  borderRadius: 10,
  color: "black",
  backgroundColor:'#0c1037', 
  fontSize: 16,
  marginTop:20,
  marginBottom:10
},


input: {
  width: '100%',
  height: 50,
  marginBottom: 16,
  padding: 6,
  borderBottomWidth: 1,
  borderBottomColor: "#44E8C3",
  borderRadius: 10,
  color: "#187a78",
  //color: "#44E8C3",
  // backgroundColor: '#062531',
  backgroundColor: '#06081c',
  fontSize: 16
},





checkBox: { 
  flexDirection:'row',
  justifyContent:'space-around', 
  borderRadius: 10,
  marginBottom:10,
  padding:10,
  backgroundColor:'red', 
  backgroundColor:'#123a61',
},





      
});


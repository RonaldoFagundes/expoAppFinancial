import { StyleSheet } from "react-native";



export default StyleSheet.create({


  main:{
    flex:1,
    height:'100%',
    backgroundColor:'#2c4254' 
   },
  


  
  containerHeaderOne:{
    height:"20%",
    alignItems:'flex-start',
    paddingTop:15,
    paddingStart:15,    
  },

  

  resizeModel: {
    height: 50,
    width: 50,   
    resizeMode:'contain',
    borderRadius:6
    },





 
  containerHeaderTwo:{
    flexDirection:'column',
    padding:10, 
   
    marginStart:10,
    marginEnd:10,
    marginTop:-70,
    borderWidth: 1,
    borderBottomColor: "#44E8C3", 
    borderRadius: 10,

    backgroundColor:'green'
  },


  contentHeaderBox:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    padding:5,   
   },

  
  contentHeaderTwo:{
    height:100,
    width:"auto", 
    padding:10, 
    borderRadius:6, 
    alignItems:"flex-end"    
 },

 contentList:{
   height: 40,
   width:'auto',
   flexDirection:'row',
   justifyContent:'space-around',
   padding:5,
   borderWidth: 1,
   borderColor: "#44E8C3",
   borderRadius:10,
   marginBottom:5
 },
 
 textList:{
  fontSize: 12,
  color: '#a2eaf1',
  fontWeight: 'bold',
   marginBottom:10
 },






 containerInfo:{
  height:'auto',
  padding:10,
  alignItems:'center',  
  marginTop:10
},






 containerCarrousel:{
  height:'auto',
  width:"100%",
  padding:20,
  marginTop:'auto', 
 },


 contentCarrousel:{
  flexDirection:'row', 
  justifyContent:'space-between',  
  padding:10,  
 },



 boxBtnCarrousel: {
  borderRadius: 10,
  marginTop:10,
  marginLeft:20
},
 
  







    containerBtn: {  
      flexDirection:'row',
      justifyContent:'space-between', 
      padding: 10,  
      flexWrap:'wrap',  
      width: '100%',
      height: 'auto',
      borderWidth: 1,
      borderBottomColor: "#44E8C3", 
      borderRadius: 10,
      marginTop:'auto',      
    },


  boxBtn: {
    borderRadius: 10,
    marginTop:10
  },








  textInfo:{
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold', 
    marginTop:10   
  },


btn: {
  width: 'auto',
  height: 'auto',
  padding: 14,  
},


textBtn: {
  color: '#44E8C3',
  fontSize: 14,
  fontWeight: 'bold',
},




    





 
});


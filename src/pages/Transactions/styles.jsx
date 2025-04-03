import { StyleSheet } from "react-native";



export default StyleSheet.create({


  main: {
    flex: 1,
    height: '100%',
    backgroundColor:'#0f2334' 
    //backgroundColor: '#2c4254'
  },



  containerHeader: {
    height: "auto",
    width: 'auto',
    padding: 10,
    paddingBottom:36,
    flexDirection: 'column',
    backgroundColor:'#0d172c'
  },



  resizeModel: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    borderRadius: 6,
    marginLeft: 10
  },



  contentHeaderTitle: {
    alignItems: 'flex-start'
  },


  contentHeaderItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10
  },



  textDesc: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },





  containerInfo:{ 
    height:70,    
    alignItems:'center',    
    marginStart:10,
    marginEnd:10,
    marginTop:-28,
    /*
    borderWidth: 1,
    borderBottomColor: "#44E8C3",       
    */ 
    borderRadius: 10,
    backgroundColor:'#0f2334' 
  },





  containerProof: {
    marginTop: 50,
    padding:10,
    width: 'auto',
    height: 'auto',
    backgroundColor:'white',
    marginStart:5,
    marginEnd:5,
    borderRadius: 10,
    marginBottom:'auto'
   // alignItems: 'center',
  },


  titleProof: {
    color: '#000000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10
  },



 
  textProof: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },



  containeEmpty: {
    alignItems:'center',
    justifyContent:'center',
    
    marginTop: 50,
    padding:10,
    width: 'auto',
    height: 200,
    borderWidth: 1,
    borderBottomColor: "#44E8C3", 
    borderRadius: 10,   
    backgroundColor:'#0f2334',
    marginBottom:'auto'
   // alignItems: 'center',
  },











  textInfo: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10
  },









  containerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
  },

  boxBtn: {
    borderRadius: 10,
  },

  btn: {
    width: 'auto',
    height: 'auto',
    padding: 12,

  },

  textBtn: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },



  







  
containerModal: {
    flex: 1,
    padding: 10,
    height: '100%',   
},
  



infoModal: {
  height: 'auto',
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#1A1144',
  marginTop: 10,
  marginBottom:10,
  padding: 10,
  borderWidth: 1,
  borderBottomColor: "#44E8C3",
  borderRadius: 10,
},



contentModal: {
  height: 'auto',
  width: '100%',
  padding:10,  
},



infoCheckBox: {
  height: 'auto',
  width: '100%',
  alignItems: 'center',
  backgroundColor: '#1A1144',
  marginTop: 10,
  marginBottom:10,
  padding: 10,
  borderWidth: 1,
  borderBottomColor: "#44E8C3",
  borderRadius: 10,
},


containerCheckBox:{
  width:'100%',
  padding:10,
  alignItems:'center',
  borderRadius: 10,
  backgroundColor:'#0c1037',
},


contentCheckBox:{
  width:'auto',
  padding:10, 
  borderRadius: 10,  
},


checkBox: {
  width:50,
  height:'auto',
  borderRadius: 6,  
  padding:10,
  alignItems:'center', 
  backgroundColor:'#123a61',
},


boxCard: {
  width: '100%',
  height: 'auto',    
  padding: 10,
  flexDirection:'column',
  alignItems:'center',  
  color: "black",
  backgroundColor:'#0c1037',
  fontSize: 16,
  marginTop:20,
  marginBottom:10, 
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



      
});


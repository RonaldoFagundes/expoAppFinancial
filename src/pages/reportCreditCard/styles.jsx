import { StyleSheet } from "react-native";



export default StyleSheet.create({



  main: {
    flex: 1,
    height: '100%',
    backgroundColor: '#2c4254'
    //backgroundColor:'#000000',     
  },


  containerHeader: {
    height: "auto",
    width: 'auto',
    padding: 10,
    flexDirection: 'column'
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
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10
  },



  textDesc: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },




  boxInfo: {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#11132f',
    alignItems: "center",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "#44E8C3", 
    borderRadius: 10,
  },





  boxSurch: {
    flexDirection: 'column',
    width: 'auto',
    height: 'auto',
    backgroundColor: '#11132f',
    alignItems: "center",
    marginStart: 10,
    marginEnd: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    padding: 10

  },





  textInfo: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },




  containerBtn: {  
    flexDirection:'row',
    justifyContent:'space-between', 
    padding: 10,  
    flexWrap:'wrap',  
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderBottomColor: "#44E8C3", 
    borderRadius: 10,
    marginTop:'auto',      
  },


  boxBtn: {
    borderRadius: 6,
    marginTop: 6
  },



  btn: {
    width: 'auto',
    height: 'auto',
    padding: 10,
  },



  textBtn: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },












  containerReport: {
    flexDirection: 'column',
    backgroundColor: '#11132f',
    padding: 5,
    borderWidth: 1,
    borderBottomColor: "#44E8C3", 
    borderRadius: 10,    
  },



  headerReport: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10   
  },


  contentTitle: {
    width: 55,
    height: "auto",
    marginRight: 6
    // backgroundColor: 'rgba(215, 202, 165, 0.2)',     
  },


  textTitle: {
    fontSize: 12,
    color: '#44E8C3',
    fontWeight: 'bold',
  },




  containerList: {
    flexDirection: 'row',
    justifyContent: 'space-between',  
    width: "auto",
    height: "auto",
    backgroundColor: 'white',
    padding: 2,
    marginTop: 2,    
  },




  contentList: {
    width: 54,
    height: "auto",
    flexWrap: 'wrap',  
    marginRight: 5,
    // backgroundColor: 'rgba(215, 202, 165, 0.2)',     
    padding: 2,
  },



  textList: {
    fontSize: 7,
    color: 'black',
    fontWeight: 'bold',
    flexWrap: 'wrap'    
  },








  containerModal: {
    flex: 1,
    padding: 10,
    height: '100%',   
  },




  contentModal: {
    height: 'auto',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#1A1144',
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
  },



  formModal: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    padding: 20,
    marginTop: 30,   
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






});


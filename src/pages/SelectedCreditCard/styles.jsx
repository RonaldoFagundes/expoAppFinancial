import { StyleSheet } from "react-native";



export default StyleSheet.create({

  main: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fffdf5ff'
  },  

  containerHeader: {
    height: "20%",
    width: 'auto',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomStartRadius: 40,
    borderBottomEndRadius: 40
  },
  
   containerInfo: {
    height: 'auto',
    width: '80%',
    alignItems: 'center',
    marginStart: 10,
    marginEnd: 10,
    marginTop: -24,
    marginStart: 30,
    marginEnd: 30,
    padding:10,    
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,    
    backgroundColor: '#ecf4f5ff',
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
    color: '#060324ff',
    fontSize: 14,
    fontWeight: 'bold',
  },

  containerProof: {
    marginTop: 50,
    padding: 10,
    width: 'auto',
    height: 'auto',
    backgroundColor: 'white',
    marginStart: 5,
    marginEnd: 5,
    borderRadius: 10,
    marginBottom: 'auto'    
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
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 'auto',
    width: 'auto',
    height: 200,
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
    backgroundColor: '#c8e7f3ff',
  },


  /*
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
  */


  /*
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
  */

  textInfo: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },

  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,   
    width: 'auto',
    height: 'auto',
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
    marginTop: 'auto',
  },
  
   containerBtnFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    //flexWrap: 'wrap',
    width: 'auto',
    height: 'auto',
   // borderWidth: 1,
   // borderBottomColor: "#44E8C3",
   // borderRadius: 10,
    marginTop: 20,
    marginBottom: 50
  },

  boxBtn: {
    height: 40,
    borderRadius: 10,
  }, 

  

  btnMenu: {
    flexDirection: 'row',
    width: 'auto',
    height: 'auto',
    padding: 10,
  },

  textBtn: {
    color: '#44E8C3',
    fontSize: 14,
    fontWeight: 'bold',
  },











  /*
    containerReport: {
      flexDirection: 'column',
      backgroundColor: '#11132f',
      padding: 5,
      borderWidth: 1,
      borderBottomColor: "#44E8C3", 
      borderRadius: 10,    
    },
  */


  /*
   headerReport: {
     flexDirection: 'row',
     justifyContent: 'space-evenly',
     marginBottom: 10   
   },
  */

  /*
  contentTitle: {
    width: 55,
    height: "auto",
    marginRight: 6
    // backgroundColor: 'rgba(215, 202, 165, 0.2)',     
  },
  */


  /*
  textTitle: {
    fontSize: 12,
    color: '#44E8C3',
    fontWeight: 'bold',
  },
 */


  /*
   containerList: {
     flexDirection: 'row',
     justifyContent: 'space-between',  
     width: "auto",
     height: "auto",
     backgroundColor: 'white',
     padding: 2,
     marginTop: 2,    
   },
   */


  /*
  contentList: {
    width: 54,
    height: "auto",
    flexWrap: 'wrap',  
    marginRight: 5,
    // backgroundColor: 'rgba(215, 202, 165, 0.2)',     
    padding: 2,
  },
 */

  /*
  textList: {
    fontSize: 7,
    color: 'black',
    fontWeight: 'bold',
    flexWrap: 'wrap'    
  },
 */







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


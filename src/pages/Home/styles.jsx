import { StyleSheet } from "react-native";



export default StyleSheet.create({


  containerLoading: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingBottom: 200,
    justifyContent: 'center',
    alignItems: 'center'
 },

 
  main: {
    flex: 1,
    backgroundColor: '#06121c'
    //backgroundColor: '#1C1B20'
  },


  textHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },


  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderRadius: 10,
    flexWrap: 'wrap',
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
  },


  boxBtn: {
    borderRadius: 6,
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



  containerList: {
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    width: "auto",
    height: 'auto',
  },


  contentList: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    width: "96%",
    height: 'auto',
    padding: 6,
  },




  contentCardList: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: "100%",
    height: "auto",
    padding: 10,
    marginTop: 10,
    marginBottom: 10
  },


  resizeModel: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
    borderRadius: 8
  },


  textList: {
    fontSize: 16,
    color: '#a2eaf1',
    fontWeight: 'bold',
    marginBottom: 10
  },



  textInfo: {
    color: '#44E8C3',
    fontSize: 18
  },




  containerModal: {
    flex: 1,
    padding: 10,
    height: '100%',
    paddingBottom: '50%',
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




  boxImg: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    width: '100%',
    height: 'auto',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
    marginTop: 20,
  },


  formModal: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
    marginTop: 20
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


  boxModalBtn: {
    backgroundColor: 'black',
    width: "100%",
    height: "auto",
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },



});


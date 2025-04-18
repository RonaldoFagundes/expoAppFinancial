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
    height: '100%',  
    backgroundColor:'#0d172c'  
    //backgroundColor:'#20394d'
   // backgroundColor: '#2c4254'
  },




  containerHeader: {
    height: "auto",
    width: 'auto',
    padding: 10,
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



  containerNoList: {
    marginTop: 100,
    width: '100%',
    height: '40%',
    alignItems: 'center',
  },




  scrollView: {
    width: '100%',
    padding: 10
  },





  containerCard: {
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#0A0352',
    width: "auto",
    height: "auto",
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },





  contentCard: {
    width: 'auto',
    height: 'auto',
    borderRadius: 10,
    elevation: 4,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#0b1936',
  },



  dataCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 8,
  },



  textCard: {
    fontSize: 16,
    color: '#a2eaf1',
    fontWeight: 'bold',
    marginTop: 7
  },







  containerFooter: {
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
    marginTop: 'auto'
  },





  containerList: {
    height: "100%",
    marginBottom: 10
  },




  contentList: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 10,
    width: "auto",
    height: '100%',
    padding: 6,
    marginTop: 12,
  },




  containerModal: {
    flex: 1,
    padding: 10,
    height: '100%',
    paddingBottom: '50%'
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



  boxCard: {
    width: '100%',
    height: 'auto',
    padding: 10,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    borderBottomColor: "#44E8C3",
    borderRadius: 10,
    backgroundColor: 'transparent',
    marginTop: 20,
    marginBottom: 20
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


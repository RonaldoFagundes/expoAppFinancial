import { StyleSheet } from "react-native";



export default StyleSheet.create({


  main:{

    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',  
    width:'100%',
    backgroundColor:'white'
   },


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



    input: {
        width: '80%',
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



      textInfo: {
        color: '#F5F6F1',
        fontSize: 18
      },



      boxBtn: {
        flexDirection:'row',
        justifyContent:'space-between', 
        width: 'auto',
        height: 50,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#cc0000",
        borderRadius: 10,
        
        backgroundColor: 'black',
       
      },


      btn: {
        width: '45%',
        height: 40,
        padding: 6,
        borderBottomWidth: 1,
        borderBottomColor: "#cc0000",
        borderRadius: 10,
        color: "black",
        backgroundColor: 'white',
        
      },


      textBtn: {
        color: 'black',
        fontSize: 18
      },


      dataList: {
        borderRadius: 6,
        elevation: 4,
        margin:4,
       },

       textList: {
        fontSize: 16,
        color: 'red',
        fontWeight: 'bold',
     },


    });


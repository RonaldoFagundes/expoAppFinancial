import { StyleSheet } from "react-native";



export default StyleSheet.create({


  main:{
    
    flexDirection: 'column',
    alignItems:'center',
    
    
    height:'100%' ,
    width:'100%',
    backgroundColor:'white'
   },




   containerHeader:{
      flexDirection:'row',
      justifyContent:'space-around',
      alignItems:'center',
      width:'100%',
      height:'auto',

      marginTop:50,
      backgroundColor:'blue'
   },


   
   boxCard: {
    width: '90%',
    height: 'auto',    
    padding: 10,
    flexDirection:'column',
    alignItems:'center',
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'orange',
    fontSize: 16,
    marginTop:50,
    marginBottom:10
  },
  




   boxBtn: {
    width: '70%',
    height: 'auto',
    backgroundColor: 'orange',
   
    flexDirection:'row',
    justifyContent:'space-between', 
   
    padding: 10,
    
    borderRadius: 10,
    
  },



  btn: {
    width: 'auto',
    height: 'auto',
    padding: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#cc0000",
    borderRadius: 10,
    color: "black",
    backgroundColor: 'white',
        
      },



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


       dataContent:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:8,
        marginBottom:8,
     },

    



  
   textList: {
    fontSize: 16,
    color: 'yellow',
    fontWeight: 'bold',
 },




      textInfo: {
        color: '#F5F6F1',
        fontSize: 18
      },



   



      textBtn: {
        color: 'black',
        fontSize: 18
      },


      

     

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


      
      
    });


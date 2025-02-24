
import React ,{
    createContext,
    useState
} from 'react';


export const AuthContext = createContext({});

function AuthProvider({children}){ 


//const endpointPhp = 'http://localhost:3322/phpApiFinancial';
//const endpointPhp = 'http://127.0.0.1:3322/php-api-financial';

//const endpointPhp = 'http://192.168.56.1:8080/phpApiFinancial';
//const endpointPhp = 'http://192.168.170.155:3322/php-api-financial';
//const endpointPhp = 'http://192.168.100.6:3322/php-api-financial';



  const [endpoint, setEndpoint] = useState("");

  const [bankData, setBankData] = useState([]);

  const [accountData, setAccountData] = useState([]);

  const [creditCardData, setCreditCardData] = useState([]);

 // const [idAccont , setIdAccount] = useState(0);

 

    return(
        <AuthContext.Provider value={
             {
              //endpointPhp,

              setEndpoint,
              endpoint, 
              
              setBankData,
              bankData, 

              setAccountData,
              accountData,

              setCreditCardData,
              creditCardData, 
                                   
             }}>
          {children}
        </AuthContext.Provider>
  )
}
export default AuthProvider;


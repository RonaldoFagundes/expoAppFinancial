
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

//const endpoint = "https://f0c7c439-762d-4af1-bb71-5d2b7d0c2347-00-1m7y8kps8u495.spock.replit.dev/";


//const endpoint = "http://localhost:3322";

  const endpoint = "https://php-api-financial.vercel.app/api";

  //const [endpoint, setEndpoint] = useState("");

  const [load, setLoad] = useState(true);


  const [user, setUser] = useState("");

  

  const [bankData, setBankData] = useState([]);

  const [accounts, setAccounts] = useState([]);

  const [accountData, setAccountData] = useState([]);

  const [amountAccount, setAmountAccount] = useState();

  const [creditCardData, setCreditCardData] = useState([]);

  //const [transactionsType, setTransactionsType] = useState("");


  const [infoDate, setInfoDate] = useState({    
    hours:"",
    day:"",
    month:"",
    nextMonth:"",
    year:""
  });



 // const [idAccont , setIdAccount] = useState(0);

 

    return(
        <AuthContext.Provider value={
             {
              //endpointPhp,

              setLoad,
              load,

              setUser,
              user, 

             // setEndpoint,
              endpoint, 

              setInfoDate,
              infoDate,
              
              setBankData,
              bankData, 

              setAccounts,
              accounts,

              setAccountData,
              accountData,

              setAmountAccount,
              amountAccount,

              setCreditCardData,
              creditCardData, 

             // setTransactionsType,
             // transactionsType,              
                                   
             }}>
          {children}
        </AuthContext.Provider>
  )
}
export default AuthProvider;


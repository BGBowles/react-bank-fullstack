/*
CANNOT GET CONTEXT TO FUNCTION FROM THIS COMPONENT. IT IS STORED IN APP INSTEAD.

IN PROVIDER COMPONENT...
1. import { createContext} from 'react';
2. export const ContextTitle = createContext();
3. WRAP CHILD COMPONENTS IN  <Context.Provider> TAGS AS FOLLOWS:
  <ContextTitle.Provider value = { value(s) of Context Object }>
    <Child Components/>
  </ContextTitle.Provider >

IN CHILDREN (CONSUMER) COMPONENTS...
1. import React, { useContext } from 'react';
  import { ContextTitle } from 'Component Where Context was Created';
2. DECLARE WITHIN THE FUNCTION, BUT NOT NECESSARILY THE RETURN STATEMENT: const value = useContext(ContextTitle);
*/

import React, { createContext, useState } from 'react';

export const AccountInformation = createContext();

const AccountContext = () => {
  
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  let balanceMessage = `Account Balance $ ${balance} `;
 
  // return (
  //   <AccountContext.Provider value = {
  //     {
  //       loggedIn, setLoggedIn,
  //       amount, setAmount,
  //       isDeposit, setIsDeposit,
  //       balance, setBalance
  //     }
  //   }>
  //   </AccountContext.Provider>
  // );
};

export default AccountContext;
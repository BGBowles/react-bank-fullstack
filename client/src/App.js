// IMPORT FUNCTIONS AND DEPENDENCIES
import './index.css';
import React, { useState, useContext, useEffect, createContext } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

// TRYING TO INCLUDE EXPRESS AND CORS WILL CRASH THE APP...
// import Express from 'express';
// import CORS from 'cors';

// IMPORT COMPONENTS
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Banner from './components/Banner';
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';
import SignIn from './components/SignIn';
import Deposit from './components/Deposit';
import Withdrawal from './components/Withdrawal';
import AllData from './components/AllData';
import Footer from './components/Footer';

export const AccountInformation = createContext();

function App() {

  // 8 VARIABLES AND A MESSAGE
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signedIn, setSignedIn] = useState(false);

  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isDeposit, setIsDeposit] = useState(true);
  const [error, setError] = useState(null);
  let balanceMessage = `Account Balance $ ${balance} `;

  console.log(`App: ${balanceMessage}`);

  // (!) DO NOT USE A STATE-CHANGING FUNCTION INSIDE OF useEffect #INFINITE LOOP (!)
  // THE EMPTY ARRAY WILL PREVENT useEffect FROM RUNNING WITH EVERY CHANGE - useEffect WILL RUN ON THE FIRST RENDER ONLY.
  useEffect(
    () => {
        fetch('http://localhost:3000/accounts')
          .then(response => {
            console.log("useEffect: resolve: ", response)
            if(!response.ok) {
              throw Error('Error thrown in useEffect: response.');
            }
            return;
          })
          .then( (data) => {
            console.log(data);
            //setAccounts(data); * IF THERE WAS AN Accounts OBJECT TO UPDATE WITH NEW DATA *
          })
          .catch( (error) => { setError("Error:", error.message);
          })
        console.log('App.js: useEffect has run.')
    },
    []
  );

  return (
    <div className="App-container">
      <div className="App-header">{<Navbar />}</div>
      <div className="App-banner">{<Banner />}</div>
        <AccountInformation.Provider value = {
          {
            username, setUsername,
            email, setEmail,
            password, setPassword,
            signedIn, setSignedIn,
            amount, setAmount,
            balance, setBalance,
            isDeposit, setIsDeposit,
            balanceMessage
          }
        }>
          <div className="App-sidebar">{<Sidebar />}</div>
          <BrowserRouter>
          <div className="App-content">
            <Routes>
              <Route exact path="/"           element={ <Home /> }/>
              <Route path="/createaccount"    element={ <CreateAccount /> }/>
              <Route path="/signin"           element={ <SignIn /> }/>
              <Route path="/deposit"          element={ <Deposit /> }/>
              <Route path="/withdrawal"       element={ <Withdrawal /> }/>
              <Route path="/alldata"          element={ <AllData /> } /> 
            </Routes>
          </div>
          </BrowserRouter>
        </AccountInformation.Provider>
        <div className="App-footer">{<Footer />}</div>
    </div>
  );
}

export default App;
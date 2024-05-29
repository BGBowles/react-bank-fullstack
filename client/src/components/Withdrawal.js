import React, { useState, useContext } from 'react';
import { AccountInformation } from "../App.js";
import Card from "../contexts/CardContext.js";

const { logo1 } = '../images/image_banner_640.jpg'
const { logo2 } = '../images/image_banner2_640.jpg';

const Withdrawal = () => {
        
    const accountInformation = useContext(AccountInformation);
    console.log(`Deposit: Account Balance: ${ accountInformation.balance }`);
    
    const [status, setStatus] = useState('Initial Value.');
    const [show, setShow] = useState(true);

    function clearForm(){
        accountInformation.setAmount(0);
        setShow(true);
    }
    
    function validate(amount){
        if (!amount){
        setStatus(`Error: You must enter a Deposit Amount.`);
        setTimeout(() => setStatus(''), 2000);
        return false;
        }
        if(amount <= 0){
        setStatus(`Error: Deposit Amount must be greater than zero.`);
        setTimeout(() => setStatus(''), 2000);
        return false;
        }
        if (isNaN(amount)){
        setStatus(`Error: Deposit Amount must be a number.`);
        setTimeout(() => setStatus(''), 2000);
        return false;
        }
        return true;
    }
  
    const handleChange = (event) => {
        event.preventDefault();
        accountInformation.setAmount(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let newBalance = Number(accountInformation.balance) - Number(accountInformation.amount);
        accountInformation.setBalance(newBalance);        
        setShow(false);
    }
    
    return (
      <>
        { show ? (
            <Card
                header={ <h2>Withdrawal Component</h2>}
                text={ <h3>Enter your Withdrawal amount below.</h3> }
                status= { <p>Status Variable: { status } </p>}
                // image={ <img className="img-fluid" src={ logo1 } alt="Responsive Image" /> }
                input={
                    <input
                        type="number"
                        width="400px"
                        value={ accountInformation.amount }
                        onChange={ handleChange }
                        placeholder="Enter Withdrawal Amount Here"
                        required/>
                }
                button={<button
                    type="submit"
                    className="btn btn-warning"
                    width="250px"
                    onClick={ handleSubmit }>Submit Withdrawal</button>}
                balance={ <h2>Account Balance: $ { accountInformation.balance }</h2> }
            />
        ):(
            <Card
                header={ <h2>Deposit Component - Deposit Confirmed</h2>}
                title="Deposit completed."
                text={ <h3>Your Withdrawal has been completed.</h3> }
                // image={ <img className="img-fluid" src={ logo2 } alt="Responsive Image" /> }
                balance={ <h2>Account Balance: $ { accountInformation.balance }</h2> }
                button={
                    <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={ clearForm }>Click to submit another Withdrawal.</button>
                }
            >
            </Card>
        )}
      </>
    );
}

export default Withdrawal;
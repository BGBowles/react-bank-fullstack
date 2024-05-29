import '../index.css';
import React, { useContext, useState } from 'react';
import { AccountInformation } from '../App.js';
import Card from '../contexts/CardContext.js';

function SignIn(){

    const accountInformation = useContext(AccountInformation);
    
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function validate(value, field){
        if(!value){
            setStatus(`There is an error with the { field } field.`);
            setTimeout(() => setStatus(''), 250);
            return false;
        }
        return true;
    }
    
    function handleSubmit(){
        console.log("New Account Information: " + username + ", " + email + ", " + password);
        if(!validate(username, "Username")) return;
        if(!validate(email, "Email")) return;
        if(!validate(password, "Password")) return;
        accountInformation.users.push({username, email, password});
        setShow(false);
    }

    function clearForm(){
        setUsername('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            title="Create Account Card"
            status={ status }

            body={ show ? (
                <>
                    Username: { username }<br/>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        placeholder="Enter Account Username."
                        value={ username }
                        onChange ={ e => setUsername(e.target.value)}
                    />
                    <br/>

                    Email: { email }<br/>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Account Email Address."
                        value={ email }
                        onChange ={ e => setEmail(e.target.value)}
                    />
                    <br/>

                    Password: { password }<br/>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter a Password."
                        value={ password }
                        onChange ={ e => setPassword(e.target.value)}
                    />
                    <br/>
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={ handleSubmit }
                    >
                        Create Account
                    </button>
                </>
            ):(
                <>
                    <h2>A new account has been created.</h2>
                    <h3>Your User ID is: { Number(accountInformation.users.length) }</h3>
                    <button
                        type="submit"
                        className="btn btn-light"
                        onClick={ clearForm }
                    >
                        Click to create another account.
                    </button>
                </>
            )}
        />
    );
}

export default SignIn;
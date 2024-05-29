import '../index.css';
import React, { useContext, useState } from 'react';
import { AccountInformation } from '../App.js';
import Card from '../contexts/CardContext.js';

function CreateAccount(){

    // * URL CONNECTS TO mongoDB. *
    const url = 'mongodb+srv://Cluster72767:Database2024@cluster72767.ixnmbn4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster72767';
    const accountInformation = useContext(AccountInformation);
    
    const [show, setShow] = useState(true);
    const [status, setStatus] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    function validate(value, field){
        if(!value){
            setStatus(`There is an error with the ${ field } field.`);
            setTimeout( () => setStatus(''), 2000); // Error Displays for 2 Seconds
            return false;
        }
        return true;
    }
    
    function handleSubmit(){
        console.log("New Account Information: " + username + ", " + email + ", " + password);
        if(!validate(username, "Username")) return;
        if(!validate(email, "Email")) return;
        if(!validate(password, "Password")) return;
        // accountInformation.users.push({username, email, password});
        addData();
        setShow(false);
    }

    function clearForm(){
        setUsername('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    function addData(){
        const account = { username, email, password };
        console.log( "New Account Information: " + account );
        /*
        fetch( url,
            {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify(account)
            }
            )
            .then(() => {console.log("New Account written to db.json file.")
        })
        */
        //accountInformation.users.push(account);
    }

    return (
        <Card
            header="Create Account Component"
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
                        onChange ={ event => setUsername(event.target.value)}
                    />
                    <br/>

                    Email: { email }<br/>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        placeholder="Enter Account Email Address."
                        value={ email }
                        onChange ={ event => setEmail(event.target.value)}
                    />
                    <br/>

                    Password: { password }<br/>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        placeholder="Enter a Password."
                        value={ password }
                        onChange ={ event => setPassword(event.target.value)}
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
                    <h3>Your User ID is: { Math.random() }</h3>
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

export default CreateAccount;
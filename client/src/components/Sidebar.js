import React, { useContext } from "react";
import { AccountInformation } from "../App.js";

//CONVERT signedIn VARIABLE TO CONTEXT

const Sidebar = () => {

    const accountInformation = useContext(AccountInformation);

    return (
        <div className="Sidebar">
            <h4>Sidebar</h4>
            <p>Current Username: { accountInformation.username ? (`{accountInformation.username}`):("None") }</p>
            <button type="submit" className="button" onClick={ () => accountInformation.setSignedIn (!accountInformation.signedIn)}>
                { accountInformation.signedIn ? "Sign Out" : "Sign In" }
            </button>
            <div className="message">
                { accountInformation.signedIn ? (<>You are Signed In.</>):(<>You have been Signed Out.</>) }
            </div>
            <div>Account Balance: $ { accountInformation.balance }</div>
        </div>
        );
    }
 
export default Sidebar;
import React, { useState, useContext } from 'react';
import { AccountInformation } from "../App.js";
import Card from "../contexts/CardContext.js";

const AllData = () => {

    const accountInformation = useContext(AccountInformation);
    const timestamp = new Date();

    return (
        <>
        <Card
                header={ <h2>All Data Component</h2>}
                text={ <h3>All Account Information is displayed below.</h3> }
                status= { <p>Status Variable: { accountInformation.status } </p>}
                // image={ <img className="img-fluid" src={ logo1 } alt="Responsive Image" /> }
                body=
                {   <>
                        <p>Username:</p>
                        <p>Email:</p>
                        <p>Password:</p>
                        <p>Account Opened On: { timestamp.toLocaleString() }</p>
                    </>
                }
                balance={ <h2>Account Balance: $ { accountInformation.balance }</h2> }
            />
        </>
    );
}
 
export default AllData;
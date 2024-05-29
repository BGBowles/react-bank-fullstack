import '../index.css';
import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../contexts/CardContext.js';

const Home = () => {
    return (
        <div className="Home-component">
            <h1>React Bank - Home Component</h1>
            <Card
                className="home-card"
                header="Create New Account"
                button={
                    <Link to="/createaccount">
                        <button>Click to Create New Account</button>
                    </Link>
                }
            />
            <Card
                className="home-card"
                header="Sign In to Existing Account"
                button={
                    <Link to="/signin">
                        <button>Click to Sign-In Component</button>
                    </Link>
                }
            />
        </div>
    );
}

export default Home;
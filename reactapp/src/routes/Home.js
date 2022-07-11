import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return ( 
        <div>
            <h2>
                Please proceed with one of the following options
            </h2>
            <Link to="/user/sign-in"><button className="mainButton">Log in</button></Link>
            <Link to="/user/sign-up"><button className="mainButton">Sign up</button></Link>
        </div>
     );
}

export default Home;
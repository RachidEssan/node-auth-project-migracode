import React from 'react';
import { Link } from 'react-router-dom';

function SignUpFail() {
    return ( 
        <div>
            <h2>
                Invalid credentials or user already exists...
            </h2>
            <Link exact to="/user/sign-up"><button className="submitButton">Try again</button></Link>
        </div>
     );
}

export default SignUpFail;
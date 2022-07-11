import React from 'react';
import { Link } from 'react-router-dom';

function SignInFail() {
    return ( 
        <div>
            <h2>
                Invalid credentials...
            </h2>
            <Link exact to="/user/sign-in"><button className="submitButton">Try again</button></Link>
        </div>
     );
}

export default SignInFail;
import React from 'react';
import { Link } from 'react-router-dom';

function SignInSuccess() {
    return ( 
        <div>
            <h2>
                You've logged in successfully...
            </h2>
            <Link exact to="/"><button className="submitButton">Home</button></Link>
        </div>
     );
}

export default SignInSuccess;
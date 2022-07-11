import React from 'react';
import { Link } from 'react-router-dom';

function SignUpSuccess() {
    return ( 
        <div>
            <h2>
                Your account has been created successfully...
            </h2>
            <Link exact to="/"><button className="submitButton">Home</button></Link>
        </div>
     );
}

export default SignUpSuccess;
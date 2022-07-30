import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

function SignInSuccess() {
    let location = useLocation();
    if (!location.state?.notAllow) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
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
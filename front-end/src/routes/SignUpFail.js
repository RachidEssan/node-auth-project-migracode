import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

function SignUpFail() {
    let location = useLocation();
    if (!location.state?.notAllow) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
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
import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

function SignInFail() {
    let location = useLocation();
    if (!location.state?.notAllow) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
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
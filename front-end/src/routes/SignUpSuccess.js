import React from 'react';
import { Link, useLocation, Navigate } from 'react-router-dom';

function SignUpSuccess() {
    let location = useLocation();
    if (!location.state?.notAllow) {
      return <Navigate to="/" state={{ from: location }} replace />;
    }
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
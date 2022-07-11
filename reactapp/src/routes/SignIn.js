import React from 'react';

function SignUp() {
    return ( 
        <div>
            <h2>
                Enter your credentials to log in
            </h2>
            <form className="form" action="/user/sign-in" method="post">
            <input type="text" name="email" placeholder="You email" />
            <input type="password" name="password" placeholder="Your password..." />
            <button className="submitButton" type="submit">Log in</button>
        </form>
        </div>
     );
}

export default SignUp;
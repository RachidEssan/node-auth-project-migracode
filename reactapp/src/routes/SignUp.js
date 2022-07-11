import React from 'react';

function SignUp() {
    return ( 
        <div>
            <h2>
                Enter the following details to sign up
            </h2>
            <form className="form" action="/user/sign-up" method="post">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="text" name="email" placeholder="You email" />
            <input type="password" name="password" placeholder="Your password..." />
            <button className="submitButton" type="submit">Sign up</button>
        </form>
        </div>
     );
}

export default SignUp;
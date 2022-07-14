import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function SignUp() {
    
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigateTo = useNavigate()
  
    async function registerUser(credentials) {
        return fetch('http://localhost:5000/user/sign-up', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
        })
        .then(data => data.json())
        }
          
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await registerUser({
            name,
            email,
            password,
        });
        if (response.isAuthenticated) {
            navigateTo('/user/sign-up/success')
        } else {
            navigateTo('/user/sign-up/fail')
        }};

    return ( 
        <div>
            <h2>
                Enter the following details to sign up
            </h2>
            <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" name="email" placeholder="You email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" placeholder="Your password..." onChange={(e) => setPassword(e.target.value)}/>
            <button className="submitButton" type="submit">Sign up</button>
        </form>
        </div>
     );
}

export default SignUp;
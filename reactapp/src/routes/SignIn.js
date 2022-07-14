import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"

function SignIn() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigateTo = useNavigate()
  
  async function loginUser(credentials) {
    return fetch('http://localhost:5000/user/sign-in', {
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
      const response = await loginUser({
        email,
        password,
      });
      if (response.isAuthenticated) {
        navigateTo('/user/sign-in/success')
      } else {
        navigateTo('/user/sign-in/fail')
    }};

    return ( 
        <div>
            <h2>
                Enter your credentials to log in
            </h2>
            <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="email" placeholder="You email" onChange={(e) => setEmail(e.target.value)} />
            <input type="password" name="password" placeholder="Your password..." onChange={(e) => setPassword(e.target.value)} />
            <button className="submitButton" type="submit">Log in</button>
        </form>
        </div>
     );
}

export default SignIn;
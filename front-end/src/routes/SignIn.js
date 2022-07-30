import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const fetchedData = async (credentials) => {
    return fetch('http://localhost:5000/user/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await fetchedData({
      email,
      password,
    });
    if (response.isAuthenticated) {
      <Navigate to="/user/sign-in/success" state={{ allowNot: true }} />;
    } else {
      <Navigate to="/user/sign-in/fail" state={{ allowNot: true }} />;
    }
  };

  return (
    <div>
      <h2>Enter your credentials to log in</h2>
      <form className="form" onSubmit={handleSignIn}>
        <input
          type="text"
          name="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitButton" type="submit">
          Log in
        </button>
      </form>
    </div>
  );
}

export default SignIn;

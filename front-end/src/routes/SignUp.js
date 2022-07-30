import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const fetchedData = async (credentials) => {
    return fetch('http://localhost:5000/user/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const response = await fetchedData({
      name,
      email,
      password,
    });
    if (response.isAuthenticated) {
      <Navigate to="/user/sign-up/success" state={{ allowNot: true }} />;
    } else {
      <Navigate to="/user/sign-up/fail" state={{ allowNot: true }} />;
    }
  };

  return (
    <div>
      <h2>Enter the following details to sign up</h2>
      <form className="form" onSubmit={handleSignUp}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          name="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submitButton" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
}

export default SignUp;

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Please proceed with one of the following options</h2>
      <Link
        to="/user/sign-in"
        class="btn btn-outline-light btn-lg"
        role="button">
        Log in
      </Link>
      <Link
        to="/user/sign-up"
        class="btn btn-outline-light btn-lg"
        role="button">
        Sign up
      </Link>
    </div>
  );
}

export default Home;

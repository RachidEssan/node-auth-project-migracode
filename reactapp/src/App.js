import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './routes/Home'
import SignIn from './routes/SignIn'
import SignInSuccess from './routes/SignInSuccess'
import SignInFail from './routes/SignInFail'
import SignUp from './routes/SignUp'
import SignUpSuccess from './routes/SignUpSuccess'
import SignUpFail from './routes/SignUpFail'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />      
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/user/sign-in" element={<SignIn />} />
            <Route exact path="/user/sign-in/success" element={<SignInSuccess />} />
            <Route exact path="/user/sign-in/fail" element={<SignInFail />} />
            <Route exact path="/user/sign-up" element={<SignUp />} />
            <Route exact path="/user/sign-up/success" element={<SignUpSuccess />} />
            <Route exact path="/user/sign-up/fail" element={<SignUpFail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

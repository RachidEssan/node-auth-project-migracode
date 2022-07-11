import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/user/sign-in" component={SignIn} />
            <Route exact path="/user/sign-in/200" component={SignInSuccess} />
            <Route exact path="/user/sign-in/401" component={SignInFail} />
            <Route exact path="/user/sign-up" component={SignUp} />
            <Route exact path="/user/sign-up/201" component={SignUpSuccess} />
            <Route exact path="/user/sign-up/400" component={SignUpFail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

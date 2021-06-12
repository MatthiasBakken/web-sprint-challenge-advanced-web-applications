import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from 'axios';

const Login = () => {
  
  const { push } = useHistory();

  let token = localStorage.getItem( "token" );

  const [ loginCred, setLoginCred ] = useState( {
    username: "",
    password: ""
  } );

  const [ error, setError ] = useState( "" );
  
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const changeHandler = e => {
    setLoginCred( {
      ...loginCred,
      [ e.target.name ]: e.target.value
    } );
  };

  const submitHandler = e => {
    e.preventDefault();
    axios.post( 'http://localhost:5000/api/login', loginCred )
      .then( res => {
        console.log( 'res', res.data.payload );
        localStorage.setItem( "token", res.data.payload );
        push("/bubbles")
      } )
      .catch( err => {
        setError("Username or Password incorrect. Please see Readme")
      })
  }

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form
          onSubmit={submitHandler}
        >
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={loginCred.username}
              onChange={changeHandler}
              data-testid="username"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={loginCred.password}
              onChange={changeHandler}
              data-testid="password"
            />
          </div>
          <button type="submit" >Login</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error" >{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.
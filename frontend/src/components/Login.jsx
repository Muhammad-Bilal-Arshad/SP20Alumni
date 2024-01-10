import React, { useState} from 'react';
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const Navigate = useNavigate()

  const handleLogin = () => {
    
    console.log('Username:', username);
    console.log('Password:', password);
    if(username === 'Admin' && password ==='12345678'){
        Navigate("/adduser")
        
    }
    else{
        alert("Wrong credentials")
        setPassword('')
        setUsername('')
    }
    
  };

  return (
    <div className="login-container">
      <h2>Welcome Back!</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Let's Go!
        </button>
      </form>
    </div>
  );
};

export default Login;

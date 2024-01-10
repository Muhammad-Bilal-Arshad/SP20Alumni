import React from "react";
import Welcome from './components/Welcome'
import Home from './components/Home'
import Form from "./components/Form";
import Login from "./components/Login";
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Routes>
      <Route path = "/" element={<Welcome />}/>
      <Route path = "/home" element={<Home />}/>
      <Route path = "/login" element={<Login />}/>
      <Route path = "/adduser" element={<Form />}/>
    </Routes>
   </Router>
  );
}

export default App;

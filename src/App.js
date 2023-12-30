import React from "react";
import Welcome from './components/Welcome'
import Home from './components/Home'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
function App() {
  return (
   <Router>
    <Routes>
      <Route path = "/" element={<Welcome />}/>
      <Route path = "/home" element={<Home />}/>
    </Routes>
   </Router>
  );
}

export default App;

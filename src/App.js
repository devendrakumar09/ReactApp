// import logo from './logo.svg';
// import './App.css';

import Home from "./components/Home";
import CreateNew from "./components/CreateNew";
import React from "react";


import {
  BrowserRouter as Router,
  Route,
  
  Routes,
} from "react-router-dom";
import WelcomeMessage from "./components/WelcomeMessage";
import InputText from "./components/InputText";


function App() {   
  return (
    <>
      <Router>                
          <Routes>
            <Route path="/:name" exact element={<Home />}></Route>
            <Route path="/create" exact element={<InputText />}></Route>            
          </Routes>      
          <WelcomeMessage />  
          <CreateNew  />  
      </Router>
    </>
  );
}

export default App;

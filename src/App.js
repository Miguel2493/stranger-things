import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Login from './Components/Login';
import Nav from './Components/Nav';

function App() {
  console.log("App")
  return (
  <>
  <Nav/>
    <Router>
      <Switch>
        <Route path="/login">
          <Login/> 
          
        </Route>
      </Switch>
    </Router> 
  </>
  );
}


export default App;

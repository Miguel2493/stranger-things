import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";

import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Messages from "./Components/Messages";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";

function App() {
  console.log("App");
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

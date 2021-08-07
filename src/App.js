import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import {
//   Login,
//   Nav,
//   Messages,
//   // ...
// } from "Components";

import Login from "./Components/Login";
import Nav from "./Components/Nav";
import Messages from "./Components/Messages";
import Posts from "./Components/Posts";
import Profile from "./Components/Profile";
import Register from "./Components/Register";

function App() {
  console.log("App");
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/messages" component={Messages} />
          {/* For future features, look into react-router exact paths, dynamic pathing (:postId), and <Redirects /> */}
          <Route path="/posts" component={Posts} />
          {/* <Route exact path="/posts" component={Posts} />
          <Route path="/posts/:postId" component={Posts} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          {/* Toss another route here as a fallback */}
          {/* <Route path="/" component={....} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;

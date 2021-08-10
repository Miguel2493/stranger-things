import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Nav, Home, Login, Posts, Register, Profile } from "./Components";

// import {
//   Login,
//   Nav,
//   // Messages,
//   // CreatePosts,
//   // Profile,
//   Register,
//   Posts,
//   Home,
// } from "./components";

// import Login from "./Components/Login";
// import Nav from "./Components/Nav";
// // import Messages from "./Components/Messages";
// // import CreatePosts from "./Components/CreatePosts";
// // import Profile from "./Components/Profile";
// import Register from "./Components/Register";
// import Posts from "./Components/Posts";
// import Home from "./Components/Home";

function App() {
  console.log("App");
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />;
          <Route path="/home" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

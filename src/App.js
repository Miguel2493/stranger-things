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
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          {/* <Login /> */}
          <Route path="/home" component={Home} />
          <Route path="/posts" component={Posts} />
          {/* <Route path="/messages" component={Messages} /> */}
          {/* <Route path="/createposts" component={CreatePosts} /> */}
          <Route path="/profile" component={Profile} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Login} />;
        </Switch>
      </Router>
    </div>
  );
}

export default App;

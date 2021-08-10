import "./App.css";
import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Nav,
  Home,
  Login,
  Posts,
  Register,
  Profile,
  CreatePosts,
} from "./Components";

function App() {
  console.log("App");
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/login" component={Login} />;
          <Route path="/createposts" component={CreatePosts} />
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

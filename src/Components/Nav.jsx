import React from "react"
import { Link }  from "react-router-dom";

const Nav = () => {
    return (
        <div id="nav">
          <Link class="login1" to="/login">Login</Link>
          <Link class="messages1" to="/messages">Messages</Link>
          <Link class="posts1" to="/posts">Posts</Link>
          <Link class="profile1"to="/profile">Profile</Link>
        </div>
    )
}

export default Nav;


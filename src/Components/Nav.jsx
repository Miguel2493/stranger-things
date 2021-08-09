import React from "react"
import { Link }  from "react-router-dom";

const Nav = () => {
    return (
        <div>
          <Link to="/login">Login</Link>
          <Link to="/messages">Messages</Link>
          <Link to="/createposts">CreatePosts</Link>
          <Link to="/profile">Profile</Link>
        </div>
    )
}

export default Nav;


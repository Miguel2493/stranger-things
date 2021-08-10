import React from "react"
import { Link }  from "react-router-dom";

const Nav = () => {
    return (
        <div id="nav">
        <Link className="login1" to="/login">LOGIN</Link>
          <Link className="posts1" to="/posts">POSTS</Link>
          <Link className="home1"to="/home">HOME</Link>
          {/* <Link to="/messages">Messages</Link> */}
          {/* <Link to="/createposts">CreatePosts</Link> */}
          {/* <Link to="/profile">Profile</Link> */}
        </div>
    )
}

export default Nav;


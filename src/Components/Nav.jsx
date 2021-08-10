import React from "react"
import { Link }  from "react-router-dom";

const Nav = () => {
    return (
        <div>
          <Link to="/login">LOGIN</Link>
          <Link to="/posts">POSTS</Link>
          <Link to="/home">HOME</Link>
          {/* <Link to="/messages">Messages</Link> */}
          {/* <Link to="/createposts">CreatePosts</Link> */}
          {/* <Link to="/profile">Profile</Link> */}
        </div>
    )
}

export default Nav;


import React from "react";

const SinglePost = ({post}) =>{
return(
    <div>
        <h2>{post.title}</h2>
        <h3>{post.author}</h3>
        <p>{post.body}</p>
    </div>

);

};

export default SinglePost;
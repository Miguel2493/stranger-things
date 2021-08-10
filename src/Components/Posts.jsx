import React,{ useEffect, useState }  from "react";
import SinglePost  from "./SinglePost"

const dummyPosts = [
    {title: "First Post", author: "Lion", body:"Like a rug!!"},
    {title: "Second Post", author: "Sharky", body:"Looking for Lava Girl"}
]

const Post = ({author}) =>{
    const [posts, setPosts]= useState([]);

    useEffect(() =>{

    },[]);

    const postToRender = !author 
    ? dummyPosts : dummyPosts.filter((item) => item.author === author);

    return(
        <div>
            {postToRender.map((singlePost) =>(
                <SinglePost key={singlePost.body } post={singlePost}/>
            ))}
        </div>
    )        
    
};

export default Post;
import React,{ useEffect, useState }  from "react";
import { Link } from "react-router-dom";

const loginUrl = "https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-PT";

const Post = ({author}) =>{
    const [posts, setPosts]= useState([]);

    useEffect(() =>{
        const postURL = loginUrl + "/posts"

        fetch(postURL)
        .then((response)=> response.json())
        .then((json)=>{
            console.log(json);
            const responseURL = json.message;

            setPosts((oldState)=> [...oldState,responseURL]);
        }).catch(console.error);
    },[]);

    return (
        <div>
            <Link to="/createposts">ADD POSTS</Link>
        </div>
    )        
    
};

export default Post;
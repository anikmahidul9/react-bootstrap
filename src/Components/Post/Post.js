import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Post = () => {
    const [posts,getPost]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>getPost(data))
    },[])
    return (
        <div>
            <h1>This is user Post:{posts.length}</h1>
            {
                posts.map(post=><Link
                key={post.id}
                to={`/post/${post.id}`}
                >{post.id}</Link>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default Post;
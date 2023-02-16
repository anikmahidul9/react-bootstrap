import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetail = () => {
    const {postId}=useParams();
    const [ post, setPost]=useState([]);
    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [postId]);
    return (
        <div>
            <h1>This is post detail of: {postId}</h1>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
        
    );
};

export default PostDetail;
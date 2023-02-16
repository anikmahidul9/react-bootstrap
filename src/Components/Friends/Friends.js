import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setfriend]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setfriend(data));
    },[])
    return (
        <div>
            <h1>This is Friend</h1>
            <p>I have {friends.length} friend</p>
           {
            friends.map(friend=>
                <Friend
                key={friend.id}
                friend={friend}
                ></Friend>)
           }
        </div>
    );
};

export default Friends;
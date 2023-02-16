import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name,username,id}=friend;
    const navigate = useNavigate();
    const showFriend = ()=>{
        const path=`/friend/`+id;
        navigate(path);
    }
    return (
        <div>
            <h1>Name:{name}</h1>
            <Link to={'/friend/'+id }element={friend}>Show Detail</Link>
            <button onClick={showFriend}>{username} {id}</button>
        </div>
    );
};

export default Friend;
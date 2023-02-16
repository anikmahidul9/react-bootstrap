import React from 'react';
import { useParams } from 'react-router';

const ShowFriend = () => {
    const {detail} = useParams();
    return (
        <div>
            <h1>This is friend details: {detail}</h1>
        </div>
    );
};

export default ShowFriend;
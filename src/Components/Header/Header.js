import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to Route</h1>
            <CustomLink to='/' label='Home'>Home</CustomLink>
            <CustomLink to='/friends' label='Friends'>Friends</CustomLink>
            <CustomLink to='post' label='Post'>Post</CustomLink>
            <CustomLink to='/about' label='About'>About</CustomLink>
        </div>
    );
};

export default Header;
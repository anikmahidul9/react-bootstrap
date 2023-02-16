import React from 'react';
import { Link, NavLink, useMatch, useRouteMatch } from 'react-router-dom';

const CustomLink=({ label, to, activeOnlyWhenExact })=> {
    let match =  useMatch({
      path: to,
      exact: activeOnlyWhenExact
    });
  
    return (
      <div className={match ? "active" : ""}>
        {match && "> "}
        <Link style={{color:match?'red':'black'}} to={to}>{label}</Link>
      </div>
    );
  }

export default CustomLink;
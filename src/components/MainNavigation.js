import React from 'react';
import { Link } from 'react-router-dom';
const MainNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Part-One</Link>
        </li>
        <li>
          <Link to="/part-two">Part-Two</Link>
        </li>
        <li>
          <Link to="/part-three">Part-Three</Link>
        </li>
      </ul>
    </nav>
  );
};
export default MainNavigation;

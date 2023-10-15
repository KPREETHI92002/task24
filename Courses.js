
import React from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
  return (
    <div>
      <h1>Courses</h1>
      <ul>
        <li>
          <Link to="/courses/full-stack-development">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/courses/data-science">Data Science</Link>
        </li>
        <li>
          <Link to="/courses/cyber-security">Cyber Security</Link>
        </li>
        <li>
          <Link to="/courses/career">Career</Link>
        </li>
      </ul>
    </div>
  );
};

export default Courses;

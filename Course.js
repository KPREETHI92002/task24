import React from 'react';
import { useParams } from 'react-router-dom';

const Course = () => {
  let { courseName } = useParams();

  return (
    <div>
      <h1>{courseName}</h1>
      <p>Here is the content for the {courseName} course.</p>
    </div>
  );
};

export default Course;
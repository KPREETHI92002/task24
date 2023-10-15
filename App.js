import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Home';
import Courses from './components/Courses';
import Course from './components/Course';

const Navigation = styled.div`
  background-color: #333;
  display: flex;
  justify-content: center;
  padding: 10px 0;
  color: white;
  font-weight: bold;
`;

const NavItem = styled(Link)`
  margin: 0 20px;
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => {
  return (
    <Router>
      <div>
        <Navigation>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/courses">All</NavItem>
          <NavItem to="/courses/full-stack">Full Stack Development</NavItem>
          <NavItem to="/courses/data-science">Data Science</NavItem>
          <NavItem to="/courses/cyber-security">Cyber Security</NavItem>
          <NavItem to="/courses/career">Career</NavItem>
        </Navigation>

        <Switch>
          <Route path="/courses/full-stack" component={Course} />
          <Route path="/courses/data-science" component={Course} />
          <Route path="/courses/cyber-security" component={Course} />
          <Route path="/courses/career" component={Course} />
          <Route path="/courses" component={Courses} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

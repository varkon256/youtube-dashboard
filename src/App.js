import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CommentFetcher from './components/CommentFetcher';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/dashboard"><Dashboard/></Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;

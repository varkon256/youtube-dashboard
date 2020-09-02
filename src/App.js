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
      <Switch>
        <Route exact path="/"><Login/></Route>
        <Route exact path="/dashboard"><Dashboard/></Route>
      </Switch>
    </Router>
  );
}

export default App;

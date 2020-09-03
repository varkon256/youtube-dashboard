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
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"><Home/></Route>
        <Route exact path="/dashboard/:id"><Dashboard/></Route>
      </Switch>
    </Router>
  );
}

export default App;

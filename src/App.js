import React from 'react';
import './App.css';
import Questions from './enterquestion';
import Search from './search';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (      
    <Router>
    <div className="App">
     <ul className="smallnav">
          <li >
            <Link to="/"> Add Questions</Link>
          </li>
          <li>
            <Link to="/search">Search </Link>
          </li>
        </ul>
        <Switch>
        <Route  exact path ="/" component={Questions}/>
        <Route  path ="/search" component={Search}/>
        </Switch>

    </div>
    </Router>
  );
}
export default App;

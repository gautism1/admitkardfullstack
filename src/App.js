import React from 'react';
import './App.css';
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import  { lazy ,Suspense } from 'react';

const  Questions = lazy(() => import('./enterquestion'));
const   Search = lazy(() => import('./search'));
 
const renderLoader = () => <p>Loading ......Please Wait</p>;

function App() {
  
  return (      
    <Router>
    <Suspense fallback={renderLoader()}>
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
    </Suspense>
    </Router>
  );
}
export default App;

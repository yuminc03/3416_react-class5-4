import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

function Home(){
  return(
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
}

function Topies(){
  return(
    <div>
      <h2>Topics</h2>
      Topies...
    </div>
  )
}

function Contact(){
  return(
    <div>
      <h2>contact</h2>
      Contact...
    </div>
  )
}

function App(){
  return(
    <div>
      <h1>React Router DOM</h1>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/topics">Topies</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <ul>
        <Switch>
          <Route exact path="/"><Home></Home></Route> 
          <Route path="/topics"><Topies></Topies></Route>
          <Route path="/contact"><Contact></Contact></Route>
        </Switch>
      </ul>
      {/* <ul>
        <Home></Home>
        <Topies></Topies>
        <Contact></Contact>
      </ul> */}
    </div>
  )
}

ReactDOM.render(<HashRouter><App/></HashRouter>, document.getElementById('root'));


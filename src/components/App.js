import React, { Component } from 'react';
import { Route } from 'react-router-dom';
//import reactRouter from './R_reactRouter';
//import reactRouter2 from './R_reactRouter2';

// css
import '../css/new.css';

// header
import HeaderAdmin from './Header/Header admin';

// footer
import Footer from './Footer/Footer';

//login
import LoginForm from './LoginForm';


class App extends Component {
  render () {
    return (
      <div className="App">
        <HeaderAdmin/> 
            <Route exact path='/' component={LoginForm}/>
            {/* <Route exact path='/' component={reactRouter}/>
            <Route exact path='/reactRouter2' component={reactRouter2}/> */}
        <Footer/>
      </div>
    );
  }
}

export default App;
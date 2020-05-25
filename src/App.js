import React from 'react';
import Navbar from './Components/Layouts/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/pages/Homepage';
import User from './Components/Users/User'
import About from './Components/pages/About';
import NotFound from './Components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App" >
            <Navbar />
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/about' component={About} />
                <Route exact path={'/user/:login'} component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;

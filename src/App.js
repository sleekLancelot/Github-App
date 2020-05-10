import React, { Component, Fragment } from 'react';
import Navbar from './Components/Layouts/Navbar';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Users from './Components/Users/Users';
import User from './Components/Users/User'
import Search from './Components/Users/Search';
import Alert from './Components/Layouts/Alert';
import About from './Components/pages/About';

class App extends Component {
  state = {
    users: [],
    user: {},
    loading: false,
    alert: null
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const res = await axios.get('https://api.github.com/users');
    this.setState({ users: res.data, loading: false });
  }

  searchUser = async text => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_ID}&client_secret=${process.env.REACT_APP_SECRETS}`);

    this.setState({ users: res.data.items, loading: false });
  }

  getUser = async username => {
    this.setState({ loading: true })
    console.log(username)
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_ID}&client_secret=${process.env.REACT_APP_SECRETS}`
    )
    console.log(res.data);
    this.setState({ user: res.data, loading: false })
  }

  clearUsers = () => this.setState({ users: [], loading: false });

  alert = (msg, className) => {
    this.setState({ alert: { msg, className } });

    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  }

  render() {
    const { users, loading, alert, user } = this.state;
    return (
      <Router>
        <div className="App" >
          <Navbar />
          <div className='container'>
            <Switch>
              <Route exact path='/' render={props => (
                <Fragment>
                  <Alert alert={alert} />
                  <Search loading={loading} searchUser={this.searchUser} clearUsers={this.clearUsers} alert={this.alert} showClear={users.length > 0} />
                  <Users users={users} loading={loading} />
                </Fragment>
              )} />
              <Route path='/about' component={About} />
              <Route path={'/user/:login'} render={props => (
                <User {...props} getUser={this.getUser} user={user} loading={loading} />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

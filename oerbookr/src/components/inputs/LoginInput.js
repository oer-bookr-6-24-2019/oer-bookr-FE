import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
class LoginInput extends Component {
  state = {
    username: '',
    password: '',
    loggedIn: true,
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginHandler = e => {
    e.preventDefault();

    axios
      .post(
        'https://sgs-lambda-bookr.herokuapp.com/oauth/token',
        new URLSearchParams({
          username: this.state.username,
          password: this.state.password,
          grant_type: 'password',
        }),
        {
          headers: {
            Authorization: 'Basic bGFtYmRhLWNsaWVudDpsYW1iZGEtc2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        },
      )
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form
          onSubmit={
            this.state.loggedIn ? this.loginHandler : this.registerHandler
          }
        >
          <input
            value={this.state.username}
            type='text'
            name='username'
            onChange={this.changeHandler}
          />
          <input
            value={this.state.password}
            type='password'
            name='password'
            onChange={this.changeHandler}
          />
          <button>{this.state.loggedIn ? 'Login' : 'register'}</button>
        </form>
        <p>
          Not a user? click{' '}
          <span
            onClick={() => this.setState({ loggedIn: !this.state.loggedIn })}
          >
            here
          </span>{' '}
          to register
        </p>
      </div>
    );
  }
}
export default withRouter(LoginInput);

import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../../styles/_loginInputStyles.scss';
class LoginInput extends Component {
  state = {
    username: '',
    password: '',
    loggingIn: true,
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  loginHandler = e => {
    e.preventDefault();

    axios
      .post('https://sgs-lambda-bookr.herokuapp.com/loginuser', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  registerHandler = e => {
    e.preventDefault();

    axios
      .post('https://sgs-lambda-bookr.herokuapp.com/createnewuser', {
        username: this.state.username,
        password: this.state.password,
      })
      .then(res => {
        localStorage.setItem('token', res.data.access_token);
        this.props.history.push('/');
      })
      .catch(err => console.log(`error: ${err}`));
  };

  render() {
    return (
      <div className='container'>
        <form
          onSubmit={
            this.state.loggingIn ? this.loginHandler : this.registerHandler
          }
        >
          <input
            className='input'
            value={this.state.username}
            type='text'
            name='username'
            placeholder='username'
            onChange={this.changeHandler}
          />
          <input
            className='input'
            value={this.state.password}
            type='password'
            name='password'
            placeholder='password'
            onChange={this.changeHandler}
          />
          <button className='btn'>
            {this.state.loggingIn ? 'Login' : 'Register'}
          </button>
        </form>
        <p>
          Not a user? Click{' '}
          <span
            onClick={() => this.setState({ loggingIn: !this.state.loggingIn })}
          >
            here
          </span>
          &nbsp;to register
        </p>
      </div>
    );
  }
}
export default withRouter(LoginInput);

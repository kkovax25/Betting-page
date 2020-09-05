import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/authActions';


const Login = ({ login }) => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const { email, password } = user;
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault();
    login({ email, password })
  }
  return (
    <div className="row white-text">
      <h3>Account
        <span className="grey-text"> Login</span>
      </h3>
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' value={email} onChange={onChange} />
          </div>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="password">Password</label>
            <input type="password" name='password' value={password} onChange={onChange} />
          </div>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>

  )
}


export default connect(null, { login })(Login)

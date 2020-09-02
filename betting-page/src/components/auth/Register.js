import React, { useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions'

const Register = ({ register }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })
  const { name, email, password, password2 } = user;
  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const onSubmit = e => {
    e.preventDefault();
    register({
      name,
      email,
      password
    })
  }
  return (

    <div className="row">
      <h3>Account
        <span className="grey-text"> Register</span>
      </h3>
      <form className="col s12" onSubmit={onSubmit}>
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="last_name">Name</label>
            <input type="text" name='name' value={name} onChange={onChange} />
          </div>
        </div>
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
        <div className="row">
          <div className="input-field col s6">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name='password2' value={password2} onChange={onChange} />
          </div>
        </div>
        <input type="submit" value="Register" />
      </form>
    </div>

  )
}

export default connect(null, { register })(Register)

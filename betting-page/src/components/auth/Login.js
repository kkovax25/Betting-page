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
    <div id="login" className="modal" style={modalStyle}>
      <div className="modal-content center">
        <div className="row white-text">
          <h3 style={{ marginBottom: '70px' }}>Account Login</h3>
          <form className="col s12" onSubmit={onSubmit}>
            <div className="row">
              <div className="input-field" style={{ width: '60%', margin: '0 auto' }}>
                <label htmlFor="email">Email</label>
                <input type="email" name='email' className='white-text' value={email} onChange={onChange} />
              </div>
            </div>
            <div className="row">
              <div className="input-field" style={{ width: '60%', margin: '0 auto' }}>
                <label htmlFor="password">Password</label>
                <input type="password" name='password' className='white-text' value={password} onChange={onChange} />
              </div>
            </div>
            <button className="btn-flat grey darken-2 waves-effect waves-green white-text" type="submit" name="action">Login</button>
            <a href="#!" className="modal-close grey darken-2 waves-effect waves-red btn-flat white-text" style={{ marginLeft: '10px' }}>Cancel</a>
          </form>
        </div>
      </div>
    </div>

  )
}
const modalStyle = {
  width: '50%',
  height: '60%',
  background: '#2D333A'

}

export default connect(null, { login })(Login)

import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { register } from '../../actions/authActions';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = ({ register, error }) => {
  useEffect(() => {
    if (error) {
      M.toast({ html: `${error}` })
    }
  },
    [error]);
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
    if (name === '' || email === '' || password === '') {
      M.toast({ html: 'Please fill all fields' })
    } else if (password !== password2) {
      M.toast({ html: 'Please enter the same password' })
    } else {
      register({
        name,
        email,
        password
      });
    }
  }

  return (
    <div id='register' className='modal' style={modalStyle}>
      <div className='modal-content center'>
        <div className='row'>
          <h3 className='white-text'>Account Register
          </h3>
          <form className='col s12' onSubmit={onSubmit}>
            <div className='row'>
              <div className='input-field' style={{ width: '50%', margin: '0 auto' }}>
                <label htmlFor='last_name'>Name</label>
                <input className='white-text' type='text' name='name' value={name} onChange={onChange} />
              </div>
            </div>
            <div className='row'>
              <div className='input-field' style={{ width: '50%', margin: '0 auto' }}>
                <label htmlFor='email'>Email</label>
                <input className='white-text' type='email' name='email' value={email} onChange={onChange} />
              </div>
            </div>
            <div className='row'>
              <div className='input-field' style={{ width: '50%', margin: '0 auto' }}>
                <label htmlFor='password'>Password</label>
                <input className='white-text' type='password' name='password' value={password} onChange={onChange} />
              </div>
            </div>
            <div className='row'>
              <div className='input-field' style={{ width: '50%', margin: '0 auto' }}>
                <label htmlFor='password2'>Confirm Password</label>
                <input className='white-text' type='password' name='password2' value={password2} onChange={onChange} />
              </div>
            </div>
            <button className='btn-flat grey darken-2 waves-effect waves-green white-text' type='submit' name='action'>Register</button>
            <a href='#!' className='modal-close grey darken-2 waves-effect waves-red btn-flat white-text' style={{ marginLeft: '10px' }}>Close</a>
          </form>
        </div>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '65%',
  height: '70%',
  background: '#2D333A'
}
const mapStateToProps = state => ({
  error: state.auth.error,
})

export default connect(mapStateToProps, { register })(Register)

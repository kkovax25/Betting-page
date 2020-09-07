import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';
// import Login from '../auth/Login';

const NavBar = ({ user, isAuthenticated, logout }) => {
  return (
    <Fragment>
      <ul id="dropdown1" className="dropdown-content" style={{ background: '#1D2328', boxShadow: 'none' }}>
        <li><a href="#!" className='white-text'>one</a></li>
        <li><a href="#!" className='white-text'>one</a></li>

      </ul>
      <nav style={{ marginBottom: '30px', background: 'none', boxShadow: 'none', width: '90%', margin: '0 auto' }}>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo left hide-on-med-and-down" style={{ fontFamily: 'Russo One' }}>BETONE</a>
          <div className='hide-on-large-only'>
            <a href='#!' data-target='slide-out' className='sidenav-trigger left' style={{ color: '#525A66' }}>
              <i className='small material-icons '>menu</i>
            </a>
            <div style={{ display: "flex", flexFlow: 'row', alignItems: "center", justifyContent: 'space-between', width: '80%' }}>
              <h6 className='white-text' style={{ margin: '0' }}>{user === null ? '' : user.name}</h6>
              {user !== null ? <p className='white-text' style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                <i className='small material-icons'>attach_money</i>
                {user === null ? '' : user.balance} Ft</p> : null}
              {isAuthenticated !== null ? <a href="#!" onClick={logout}>Logout</a> : <a className='modal-trigger' href="#login">Login</a>}
              <a className={`${isAuthenticated === true ? 'hide' : ''}`} href="badges.html">Register</a>
            </div>
          </div>
          <ul className="right hide-on-med-and-down">
            <li>{isAuthenticated !== null ? <a href="#!" onClick={logout}>Logout</a> : <a className='modal-trigger' href="#login">Login</a>}</li>
            <li><a className={`${isAuthenticated === true ? 'hide' : ''}`} href="badges.html">Register</a></li>
          </ul>
        </div>
      </nav>
    </Fragment>
  )
}

const mapStateToProps = state => ({
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { logout })(NavBar);

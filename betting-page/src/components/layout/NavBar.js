import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions';

const NavBar = ({ user, isAuthenticated, logout }) => {
  return (
    <Fragment>
      <nav style={{ marginBottom: '30px', background: 'none', boxShadow: 'none', width: '90%', margin: '0 auto' }}>
        <div className='nav-wrapper'>
          <a href='#!' className={`${user === null ? 'show-on-med' : 'hide-on-med-and-down'} brand-logo left`} style={{ fontFamily: 'Russo One' }}>BETONE</a>
          <div className='hide-on-large-only'>
            <a href='#!' data-target='slide-out' className={` ${user === null ? 'hide' : ''} sidenav-trigger left`} style={{ color: '#525A66' }}>
              <i className='small material-icons '>menu</i>
            </a>
            <div style={{ display: 'flex', flexFlow: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
              <h6 className='white-text' style={{ margin: '0' }}>{user === null ? '' : user.name}</h6>
              {user !== null ? <p className='white-text' style={{ margin: '0', display: 'flex', alignItems: 'center' }}>
                <i className='small material-icons'>attach_money</i>
                {user === null ? '' : user.balance} Ft</p> : null}
              {isAuthenticated !== null ? <a href='#!' onClick={logout}>Logout</a> : <a className='modal-trigger' href='#login'>Login</a>}
              <a className={`modal-trigger ${isAuthenticated === true ? 'hide' : ''}`} href='#register'>Register</a>
            </div>
          </div>
          <ul className='right hide-on-med-and-down'>
            <li>{isAuthenticated !== null ? <a href='#!' onClick={logout}>Logout</a> : <a className='modal-trigger' href='#login'>Login</a>}</li>
            <li><a className={`modal-trigger ${isAuthenticated === true ? 'hide' : ''}`} href='#register'>Register</a></li>
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

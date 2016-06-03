import { connect } from 'react-redux';

import { googleLogin, logoutAndGoAnonymous } from '../actions/firebase';

import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    user: state.firebase.user,
    windowWidth: state.window.width,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    googleLogin: () => dispatch(googleLogin()),
    logout: () => dispatch(logoutAndGoAnonymous()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

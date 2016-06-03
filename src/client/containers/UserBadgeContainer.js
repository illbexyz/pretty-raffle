import { connect } from 'react-redux';

import { googleLogin, logoutAndGoAnonymous } from '../actions/firebase';

import UserBadge from '../components/UserBadge';

function mapStateToProps(state) {
  return {
    user: state.firebase.user,
    isAuthenticating: state.firebase.isAuthenticating,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    googleLogin: () => dispatch(googleLogin()),
    logout: () => dispatch(logoutAndGoAnonymous()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserBadge);

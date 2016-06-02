import { connect } from 'react-redux';

import { googleLogin } from '../actions/firebase';

import DrawerContent from '../components/DrawerContent';

function mapStateToProps(state) {
  return {
    user: state.firebase.user,
    isAuthenticating: state.firebase.isAuthenticating,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    googleLogin: () => dispatch(googleLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);

import { connect } from 'react-redux';

import { runExtraction, toggle } from '../actions/raffle';
import { googleLogin } from '../actions/firebase';

import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    entriesType: state.raffle.entriesType,
    windowWidth: state.window.width,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
    toggle: () => dispatch(toggle()),
    googleLogin: () => dispatch(googleLogin()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

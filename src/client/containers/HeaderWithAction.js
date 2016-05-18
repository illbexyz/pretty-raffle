import { connect } from 'react-redux';

import { runExtraction, toggle } from '../actions/raffle';
import Header from '../components/Header';

function mapStateToProps(state) {
  return {
    entriesType: state.raffle.entriesType,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
    toggle: () => dispatch(toggle()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

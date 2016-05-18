import { connect } from 'react-redux';

import { runExtraction } from '../actions/raffle';
import Header from '../components/Header';

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
  };
}

export default connect(null, mapDispatchToProps)(Header);

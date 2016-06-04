import { connect } from 'react-redux';

import { runExtraction } from '../actions/raffle';
import { beginCreate } from '../actions/lists';

import TapHint from '../components/TapHint';

function mapStateToProps(state) {
  return {
    canExtract: state.lists.lists !== null && state.lists.lists.length > 0,
    isFetching: state.lists.isFetching,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
    beginCreate: () => dispatch(beginCreate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TapHint);

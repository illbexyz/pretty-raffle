import { connect } from 'react-redux';

import { runExtraction } from '../actions/raffle';

import Extraction from '../components/Extraction';

function mapStateToProps(state) {
  return {
    winner: state.raffle.winner,
    canExtract: state.raffle.entries !== null && state.raffle.entries.length > 0,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Extraction);

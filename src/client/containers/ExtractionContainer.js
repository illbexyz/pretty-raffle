import { connect } from 'react-redux';

import Extraction from '../components/Extraction';

function mapStateToProps(state) {
  return {
    winner: state.raffle.winner,
  };
}

export default connect(mapStateToProps)(Extraction);

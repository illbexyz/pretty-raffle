import { connect } from 'react-redux';

import EntriesList from '../components/EntriesList';

function mapStateToProps(state) {
  return {
    entries: state.raffle.entries,
  };
}

export default connect(mapStateToProps)(EntriesList);

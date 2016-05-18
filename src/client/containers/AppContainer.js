import { connect } from 'react-redux';

import { addEntriesList } from '../actions/raffle';
import App from '../components/App';

function mapDispatchToProps(dispatch) {
  return {
    addEntriesList: entries => dispatch(addEntriesList(entries)),
  };
}

export default connect(null, mapDispatchToProps)(App);

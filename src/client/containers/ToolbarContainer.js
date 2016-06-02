import { connect } from 'react-redux';

import { runExtraction, changeList } from '../actions/raffle';

import Toolbar from '../components/Toolbar';

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    isFetching: state.lists.isFetching,
    currentIndex: state.raffle.currentIndex,
    entries: state.raffle.entries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    extract: () => dispatch(runExtraction()),
    handleListChange: index => dispatch(changeList(index)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);

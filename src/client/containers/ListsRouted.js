import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import { beginCreate } from '../actions/lists';

import Lists from '../components/Lists';

function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    isFetching: state.lists.isFetching,
    windowWidth: state.window.width,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    beginCreate: () => dispatch(beginCreate()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lists));

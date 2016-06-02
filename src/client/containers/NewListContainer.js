import { connect } from 'react-redux';

import { stopCreate, createList } from '../actions/lists';

import NewList from '../components/NewList';

function mapStateToProps(state) {
  return {
    isOpen: state.lists.isCreateOpen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClose: () => dispatch(stopCreate()),
    createList: (title, partecipants) => {
      dispatch(stopCreate());
      dispatch(createList(title, partecipants));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewList);

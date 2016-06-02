import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { addEntriesList } from '../actions/raffle';
import { resize } from '../actions/window';
import { closeDrawer } from '../actions/drawer';
import { initializeFirebase, restoreSessionOrGoAnonymous } from '../actions/firebase';
import { fetchLists } from '../actions/lists';
import App from '../components/App';

function mapStateToProps(state) {
  return {
    isDrawerOpen: state.drawer.isOpen,
    windowWidth: state.window.width,
    user: state.firebase.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addEntriesList: entries => dispatch(addEntriesList(entries)),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

function mapDispatchToPropsContainer(dispatch) {
  return {
    onResize: size => dispatch(resize(size)),
    closeDrawer: () => dispatch(closeDrawer()),
    initializeFirebase: () => dispatch(initializeFirebase()),
    fetchLists: () => dispatch(fetchLists()),
    restoreSessionOrGoAnonymous: () => dispatch(restoreSessionOrGoAnonymous()),
  };
}

class AppContainer extends React.Component {

  static propTypes = {
    onResize: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    initializeFirebase: PropTypes.func.isRequired,
    fetchLists: PropTypes.func.isRequired,
    restoreSessionOrGoAnonymous: PropTypes.func.isRequired,
    children: PropTypes.object,
    user: PropTypes.object,
  }

  constructor() {
    super();
    this.handleResize = this.handleResize.bind(this);
  }

  handleResize() {
    this.props.onResize({ width: window.innerWidth, height: window.innerHeight });
  }

  componentWillMount() {
    this.props.initializeFirebase();
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    if (!this.props.user) {
      this.props.restoreSessionOrGoAnonymous();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.fetchLists();
    }
  }

  render() {
    const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
    return (
      <ConnectedApp>
        {this.props.children}
      </ConnectedApp>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToPropsContainer)(AppContainer);

import { connect } from 'react-redux';

import Home from '../components/Home';

function mapStateToProps(state) {
  return {
    windowWidth: state.window.width,
  };
}

export default connect(mapStateToProps)(Home);

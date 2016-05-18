import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import HeaderWithAction from '../containers/HeaderWithAction';
import EntriesListContainer from '../containers/EntriesListContainer';
import ExtractionContainer from '../containers/ExtractionContainer';

const style = {
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  body: {
    display: 'flex',
    flex: 1,
  },
};

class App extends React.Component {

  static propTypes = {
    addEntriesList: PropTypes.func.isRequired,
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={style.container}>
          <HeaderWithAction
            onToggle={this.toggleEntries}/>
          <div style={style.body}>
            <ExtractionContainer />
            <EntriesListContainer />
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;

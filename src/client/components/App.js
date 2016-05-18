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

const entries = [
  'Gabriele Gimelli',
  'Umberto Sgueglia',
  'Alessio Netti',
  'Andrea Melis',
  'Gianluca Giacchetta',
  'marco antezza',
  'Marco Giampieri',
  'Deborah Bernazzali',
  'Cesare Gamberi',
  'Vittorio Capitani',
  'Domenico Pontoriero',
  'Diego Ruotolo',
  'Mattia Mattia',
  'Cristiano Souza Paz Fiorio',
  'Giulia Cantini',
  'Barbaro Pappalardo',
  'Mauro Medad',
  'francesca De pasquale',
  'Riccardo Maffei',
  'Emanuele Bencivenni',
  'Silvia Severini',
];

const sortedEntries = entries.map(entry => entry.toLowerCase()).sort();

class App extends React.Component {

  static propTypes = {
    addEntriesList: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.addEntriesList(sortedEntries);
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div style={style.container}>
          <div style={{ height: 64 }}>
            <HeaderWithAction />
          </div>
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

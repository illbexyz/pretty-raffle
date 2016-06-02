import React, { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from '../config/theme';

import HeaderWithAction from '../containers/HeaderWithAction';
import DrawerContentContainer from '../containers/DrawerContentContainer';

import Drawer from './Drawer';

import css from './style.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      drawerOpen: false,
    };
    this.openDrawer = this.openDrawer.bind(this);
    this.handleDrawerChange = this.handleDrawerChange.bind(this);
  }

  static propTypes = {
    addEntriesList: PropTypes.func.isRequired,
    isDrawerOpen: PropTypes.bool.isRequired,
    closeDrawer: PropTypes.func.isRequired,
    windowWidth: PropTypes.number.isRequired,
    children: PropTypes.object,
    router: React.PropTypes.shape({
      push: React.PropTypes.func.isRequired,
    }).isRequired,
  }

  openDrawer() {
    this.setState({ drawerOpen: true });
  }

  handleDrawerChange(open) {
    this.setState({ drawerOpen: open });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
        <div className={`${css.column} ${css.flex}`}>
          <Drawer
            isOpen={this.state.drawerOpen}
            setOpen={this.handleDrawerChange}
            pushRoute={this.props.router.push}
          />
          <HeaderWithAction openDrawer={this.openDrawer} />
          <div className={`${css.row} ${css.flex}`}>
            {this.props.windowWidth > 1000 ?
              <div className={css.leftnav}>
                <DrawerContentContainer
                  pushRoute={this.props.router.push}
                />
              </div>
              :
              null
            }
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }

}

export default App;

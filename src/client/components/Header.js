import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  title: {
    cursor: 'pointer',
  },
  toggle: {
    alignSelf: 'center',
    marginLeft: 16,
    textTransform: 'capitalize',
  },
};

function Header(props) {
  return (
    <div>
      <AppBar
        title={<span style={style.title}>Raffle I/O 2016</span>}
        showMenuIconButton={false}
      />
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <Toggle
            label={props.entriesType}
            style={style.toggle}
            onToggle={props.toggle}
          />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarTitle text="Options" />
          <ToolbarSeparator />
          <RaisedButton label="Extract" primary={true} onTouchTap={props.extract} />
        </ToolbarGroup>
      </Toolbar>
    </div>
  );
}

Header.propTypes = {
  extract: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  entriesType: PropTypes.string.isRequired,
};

export default Header;

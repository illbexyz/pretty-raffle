import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const style = {
  title: {
    cursor: 'pointer',
  },
};

function Header(props) {
  return (
    <AppBar
      title={<span style={style.title}>Raffle I/O 2016</span>}
      showMenuIconButton={false}
      iconElementRight={<FlatButton label="Extract" onTouchTap={props.extract} />}
    />
  );
}

Header.propTypes = {
  extract: PropTypes.func.isRequired,
};

export default Header;

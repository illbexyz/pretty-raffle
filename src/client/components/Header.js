import React, { PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

import style from './style.css';

function Header(props) {
  return (
    <div>
      <AppBar
        title={<span className={style.title}>Pretty Raffle</span>}
        onLeftIconButtonTouchTap={props.openDrawer}
        iconElementRight={
          <IconMenu
            iconButtonElement={
              <IconButton><MoreVertIcon /></IconButton>
            }
            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
          >
            <MenuItem primaryText="About" />
            <MenuItem primaryText="Sign out" />
          </IconMenu>
        }
        showMenuIconButton={props.windowWidth <= 1000}
      />
    </div>
  );
}

Header.propTypes = {
  openDrawer: PropTypes.func.isRequired,
  windowWidth: PropTypes.number.isRequired,
  googleLogin: PropTypes.func.isRequired,
};

export default Header;

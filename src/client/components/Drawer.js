import React, { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';

import DrawerContentContainer from '../containers/DrawerContentContainer';

import css from './style.css';

function MyDrawer(props) {
  return (
    <Drawer
      docked={false}
      open={props.isOpen}
      zDepth={1}
      onRequestChange={open => props.setOpen(open)}
      containerClassName={`${css.column} ${css.flex}`}
    >
      <DrawerContentContainer
        pushRoute={props.pushRoute}
      />
    </Drawer>
  );
}

MyDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
};

export default MyDrawer;

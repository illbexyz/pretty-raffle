import React, { PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';

import UserBadgeContainer from '../containers/UserBadgeContainer';

const DrawerContent = props => (
  <Paper style={{ flex: 1, paddingTop: 0 }}>
    <List style={{ paddingTop: 0 }}>
      <UserBadgeContainer />
    <ListItem onTouchTap={() => props.pushRoute('/')} primaryText={'Home'} />
      <ListItem onTouchTap={() => props.pushRoute('/lists')} primaryText={'Partecipants'} />
    </List>
  </Paper>
);

DrawerContent.propTypes = {
  pushRoute: PropTypes.func.isRequired,
};

export default DrawerContent;

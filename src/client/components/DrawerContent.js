import React, { PropTypes } from 'react';

import { List, ListItem } from 'material-ui/List';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';

const DrawerContent = props => {
  let avatar;
  if (props.user) {
    avatar = (
      <Avatar
        src={props.user ? props.user.photoURL : null}
      />
    );
  } else if (props.isAuthenticating) {
    avatar = (
      <CircularProgress size={0.5} />
    );
  }

  return (
    <Paper style={{ flex: 1, paddingTop: 0 }}>
      <List style={{ paddingTop: 0 }}>
        <ListItem
          primaryText={props.user ? props.user.displayName || 'Anonymous' : null}
          leftAvatar={avatar}
          onTouchTap={props.googleLogin}
        />
      <ListItem onTouchTap={() => props.pushRoute('/')} primaryText={'Home'} />
        <ListItem onTouchTap={() => props.pushRoute('/lists')} primaryText={'Partecipants'} />
      </List>
    </Paper>
  );
};

DrawerContent.propTypes = {
  user: PropTypes.object,
  googleLogin: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
};

export default DrawerContent;

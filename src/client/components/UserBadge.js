import React, { PropTypes } from 'react';

import { ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CircularProgress from 'material-ui/CircularProgress';

const UserBadge = props => {
  let avatar;
  let callback;
  let text;
  if (props.isAuthenticating) {
    text = 'Logging in...';
    avatar = (
      <CircularProgress size={0.5} />
    );
  } else if (props.user) {
    avatar = (
      <Avatar
        src={props.user.photoURL ? props.user.photoURL : null}
      />
    );
    if (props.user.isAnonymous) {
      callback = props.googleLogin;
      text = 'Login';
    } else {
      callback = props.logout;
      text = props.user.displayName;
    }
  }

  return (
    <ListItem
      primaryText={text}
      leftAvatar={avatar}
      onTouchTap={callback}
    />
  );
};

UserBadge.propTypes = {
  user: PropTypes.object,
  googleLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isAuthenticating: PropTypes.bool.isRequired,
};

export default UserBadge;

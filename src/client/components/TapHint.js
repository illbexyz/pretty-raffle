import React, { PropTypes } from 'react';

import CircularProgress from 'material-ui/CircularProgress';

import TouchIcon from 'material-ui/svg-icons/action/touch-app';
import CreateIcon from 'material-ui/svg-icons/content/add-circle-outline';

import NewListContainer from '../containers/NewListContainer';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    cursor: 'pointer',
    alignItems: 'center',
  },
  hint: {
    textTransform: 'capitalize',
    fontSize: 30,
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },
};

function TapHint(props) {
  let content;
  if (props.canExtract) {
    content = (
      <div style={style.container}>
        <TouchIcon style={style.icon} />
        <div style={style.hint}>Extract</div>
      </div>
    );
  } else {
    if (props.isFetching) {
      content = (
        <div style={style.container}>
          <CircularProgress size={2} />
        </div>
      );
    } else {
      content = (
        <div style={style.container} onTouchTap={props.beginCreate}>
          <CreateIcon style={style.icon} />
          <div style={style.hint}>Create a list</div>
          <NewListContainer />
        </div>
      );
    }
  }
  return (
    content
  );
}

TapHint.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  canExtract: PropTypes.bool.isRequired,
  extract: PropTypes.func.isRequired,
  beginCreate: PropTypes.func.isRequired,
};

export default TapHint;

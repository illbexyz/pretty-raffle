import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import TapHintContainer from '../containers/TapHintContainer';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
  },
  winner: {
    textTransform: 'capitalize',
    fontSize: 30,
  },
};

function Extraction(props) {
  return (
    <div
      style={style.container}
      onTouchTap={props.canExtract ? props.extract : () => {}}
    >
      <ReactCSSTransitionGroup
        style={style.row}
        transitionName={{
          enter: 'animatedHidden',
          leave: 'animatedHidden',
          enterActive: 'fadeInDown',
          leaveActive: 'hide',
        }}
        transitionEnterTimeout={1000}
        transitionLeaveTimeout={1000}
      >
        {props.winner ?
          <div key={props.winner} style={style.winner}>
            {props.winner}
          </div>
          :
          <TapHintContainer />
        }
      </ReactCSSTransitionGroup>
    </div>
  );
}

Extraction.propTypes = {
  winner: PropTypes.string,
  extract: PropTypes.func.isRequired,
  canExtract: PropTypes.bool.isRequired,
};

export default Extraction;

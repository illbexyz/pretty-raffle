import React, { PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import RedeemIcon from 'material-ui/svg-icons/action/redeem';

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
  winnerIcon: {
    width: 250,
    height: 250,
  },
};

function Extraction(props) {
  return (
    <div style={style.container}>
      <ReactCSSTransitionGroup
        style={style.row}
        transitionName={{
          enter: 'animatedHidden',
          leave: 'animated',
          enterActive: 'rotateIn',
          leaveActive: 'hide',
        }}
      >
        <div key={props.winner} style={style.winner}>
          {props.winner ? props.winner : <RedeemIcon style={style.winnerIcon} />}
        </div>
      </ReactCSSTransitionGroup>
    </div>
  );
}

Extraction.propTypes = {
  winner: PropTypes.string,
};

export default Extraction;

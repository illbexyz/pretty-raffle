import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';
import { List, ListItem } from 'material-ui/List';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const style = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'scroll',
  },
  item: {
    textTransform: 'capitalize',
  },
};

class EntriesList extends React.Component {

  static propTypes = {
    entries: PropTypes.array,
  }

  render() {
    return (
      <div style={style.container}>
        <Paper style={{ flex: 1 }}>
          <List>
            <ReactCSSTransitionGroup
              transitionName={{
                enter: 'animated',
                leave: 'animated',
                enterActive: 'fadeIn',
                leaveActive: 'fadeOutRight',
              }}
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}
            >
              {this.props.entries.map(entry => (
                <ListItem style={style.item} key={entry} primaryText={entry} />
              ))}
            </ReactCSSTransitionGroup>
          </List>
        </Paper>
      </div>
    );
  }

}

export default EntriesList;

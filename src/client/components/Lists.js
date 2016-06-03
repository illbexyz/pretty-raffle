import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';

import { GridList, GridTile } from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';

import NewListContainer from '../containers/NewListContainer';

import css from './style.css';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
  },
  gridList: {
    flex: 1,
    height: 500,
    overflowY: 'auto',
  },
  gridTile: {
    width: 246,
  },
  tileContent: {
    height: 200,
    overflow: 'hidden',
    padding: 8,
    backgroundColor: '#82B1FF',
    color: '#f5f5f5',
  },
};

const Lists = props => {
  const placeholder = props.isFetching ?
  <CircularProgress /> : <div>Add a new list!</div>;
  return (
    <div className={`${css.column} ${css.flex} ${css.pageMargin}`}>
      <NewListContainer />
      {/* <Subheader style={{ flex: 0 }}>Lists</Subheader> */}
      <div style={styles.root}>
        {props.lists && props.lists.length ?
          <GridList
            cellHeight={200}
            style={styles.gridList}
            cols={Math.floor(props.windowWidth / styles.gridTile.width)}
            padding={32}
          >
            {props.lists.map(list => (
              <Paper key={list.title}>
                <GridTile
                  title={list.title}
                >
                  <div style={styles.tileContent}>
                    {Object.keys(list.partecipants).map(key =>
                      <div key={list.partecipants[key]}>{list.partecipants[key]}</div>)
                    }
                  </div>
                </GridTile>
              </Paper>
            ))}
          </GridList>
          :
          placeholder
        }
      </div>
      {/* {props.children} */}
      <div className={`${css.row} ${css.fabContainer}`}>
        {/* <FloatingActionButton
          primary onTouchTap={() => browserHistory.push('/lists/create')}>
        */}
        <FloatingActionButton primary onTouchTap={props.beginCreate}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    </div>
  );
};

Lists.propTypes = {
  children: PropTypes.object,
  lists: PropTypes.array,
  router: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isFetching: PropTypes.bool.isRequired,
  windowWidth: PropTypes.number.isRequired,
  beginCreate: PropTypes.func.isRequired,
};

export default Lists;

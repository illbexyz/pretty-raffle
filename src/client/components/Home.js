import React, { PropTypes } from 'react';

import EntriesListContainer from '../containers/EntriesListContainer';
import ExtractionContainer from '../containers/ExtractionContainer';
import ToolbarContainer from '../containers/ToolbarContainer';

import css from './style.css';

const Home = props => (
  <div className={`${css.column} ${css.flex}`}>
    <ToolbarContainer />
    <div className={`${css.row} ${css.flex}`}>
      <ExtractionContainer />
       {props.windowWidth > 480 ? <EntriesListContainer /> : null}
    </div>
  </div>
);

Home.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Home;

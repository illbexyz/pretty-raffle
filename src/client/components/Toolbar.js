import React, { PropTypes } from 'react';

import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

import style from './style.css';

const MyToolbar = props => (
  <div className={style.toolbar}>
    <Toolbar>
      <ToolbarGroup firstChild={true}>
        <ToolbarTitle text={'Lists'} style={{ marginLeft: 16 }} />
        <DropDownMenu
          value={props.currentIndex}
          onChange={(event, index, value) => props.handleListChange(value)}
          disabled={!props.lists || !props.lists.length > 0}
        >
          {
            props.lists ?
              props.lists.map((list, index) =>
                <MenuItem key={list.title} value={index} primaryText={list.title} />
              )
              :
              null
          }
        </DropDownMenu>
      </ToolbarGroup>
    </Toolbar>
  </div>
);

MyToolbar.propTypes = {
  extract: PropTypes.func.isRequired,
  lists: PropTypes.array,
  handleListChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number,
  entries: PropTypes.array,
};

export default MyToolbar;

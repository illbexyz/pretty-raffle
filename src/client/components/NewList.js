import React, { PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';

class NewList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      partecipants: '',
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePartecipantsChange = this.handlePartecipantsChange.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value,
    });
  }

  handlePartecipantsChange(event) {
    this.setState({
      partecipants: event.target.value,
    });
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={
          () => this.props.createList(this.state.title, this.state.partecipants.split('\n'))
        }
      />,
    ];
    return (
      <Dialog
        title="Create a new list"
        actions={actions}
        modal={false}
        open={this.props.isOpen}
        onRequestClose={this.props.handleClose}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <TextField
            name={'title'}
            hintText={'List name'}
            onChange={this.handleTitleChange}
          />
          <TextField
            name={'partecipants'}
            hintText={'Partecipants'}
            multiLine
            onChange={this.handlePartecipantsChange}
          />
        </div>
      </Dialog>
    );
  }

}

NewList.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  createList: PropTypes.func.isRequired,
};

export default NewList;

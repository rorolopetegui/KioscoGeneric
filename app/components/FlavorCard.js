import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Drag n Drop
import { DragSource } from 'react-dnd';
// Material UI
import { ListItem, ListItemText } from '@material-ui/core';

const cardSource = {
  beginDrag(props) {
    return {
      name: props.name,
    };
  },
};

const collect = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  };
}

class FlavorCard extends Component {
  render() {
    const { connectDragSource, name, isDragging } = this.props;
    return connectDragSource(
      <div>
        <ListItem style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
          <ListItemText primary={name} />
        </ListItem>
      </div>,
    );
  }
}

FlavorCard.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  name: PropTypes.string,
};

export default DragSource('FLAVOR_CARD', cardSource, collect)(FlavorCard);

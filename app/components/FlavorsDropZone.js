import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Drag n Drop
import { DropTarget } from 'react-dnd';
// Material UI
import { List, ListItem, ListItemText } from '@material-ui/core';
// Reducer
import { createSelector } from 'reselect';
import { initialState, addFlavorToSelected } from '../reducers/pageState';

const cardTarget = {
  canDrop(props, monitor) {
    return props.selectedFlavors.indexOf(monitor.getItem().name) == -1;
  },

  drop(props, monitor) {
    if (monitor.getItem() && monitor.getItem().name) {
      props.addFlavorToSelected(monitor.getItem().name);
    }
  },
};

const collect = (connect, monitor) => {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem(),
  };
}

class FlavorsDropZone extends Component {
  render() {
    const { connectDropTarget, isOver, selectedFlavors } = this.props;

    return connectDropTarget(
      <div
        style={{
          minHeight: '200px',
          opacity: isOver ? 0.8 : 1,
          backgroundColor: isOver ? 'darkgray' : 'unset',
        }}
      >
        {!selectedFlavors.length && <p> Arrastre sus sabores aqui </p>}
        <List component="nav">
          {selectedFlavors.map((name, i) => (
            <ListItem key={i}>
              <ListItemText primary={name} key={i} />
            </ListItem>
          ))}
        </List>
      </div>,
    );
  }
}

FlavorsDropZone.propTypes = {
  addFlavorToSelected: PropTypes.func.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  canDrop: PropTypes.bool.isRequired,
  isOver: PropTypes.bool.isRequired,
  item: PropTypes.object,
  selectedFlavors: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState);
  return {
    selectedFlavors: p.selectedFlavors
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addFlavorToSelected,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DropTarget('FLAVOR_CARD', cardTarget, collect)(FlavorsDropZone));

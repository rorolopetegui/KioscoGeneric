import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { IconButton, GridList, GridListTile, GridListTileBar, ListSubheader } from '@material-ui/core';
import { AddShoppingCart, AddCircleOutline } from '@material-ui/icons';
import { push } from 'connected-react-router';
import { toggleModal } from '../../reducers/pageState';

class GridImageWIthDesc extends Component {
  render() {
    // Hard coded for demo
    const tileData = [
      { img: 'cucuruchos.jpg', title: 'Cucuruchos', price: 15, type: 'Cucurucho' },
      { img: 'familiar.jpg', title: 'Familiar', price: 30, type: 'Familiar' },
      { img: 'frizzio.png', title: 'Frizzio', price: 100, type: 'Frizzio' },
      { img: 'palitos.jpg', title: 'Palitos', price: 5, type: 'Palitos' },
    ];

    return (
      <div>
        <GridList>
          <GridListTile
            key="Subheader"
            cols={2}
            style={{ height: 'auto', textAlign: 'center' }}
          >
            <ListSubheader component="div">
              SELECCIONAR FAMILIA DE PRODUCTO
              <IconButton
                color="primary"
                aria-label="Add to shopping cart"
                onClick={() => this.props.push('/checkout')}
              >
                <AddShoppingCart />
            </IconButton>
            </ListSubheader>
          </GridListTile>
          {tileData.map(tile => (
            <GridListTile
              key={tile.img}
              style={{
                height: 'auto',
                textAlign: 'center',
                padding: '5%',
              }}
              onClick={this.props.toggleModal.bind(this, true, tile.price, tile.type)}
            >
              <img
                /* eslint-disable global-require */
                src={require(`../../images/${tile.img}`)}
                alt={tile.title}
                key={tile.img}
                style={{ top: 'unset', transform: 'unset', width: '60%' }}
              />
              <GridListTileBar title={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  }
}

GridImageWIthDesc.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleModal,
      push
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(GridImageWIthDesc);

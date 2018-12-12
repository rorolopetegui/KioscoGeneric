import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Custom Libraries
import { createSelector } from 'reselect';
// Material UI
import { AddShoppingCart, AddCircleOutline } from '@material-ui/icons';
import { List, Modal, withStyles, IconButton } from '@material-ui/core';
// Reducers
import { initialState, toggleModal, addOrderToCart, updateCartRow } from '../reducers/pageState';
// Custom Components
import { FlavorCard, FlavorsDropZone } from '../components';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends Component {
  state = {
    quantity: ['q']
  }

  handleClose = () => {
    this.props.toggleModal(false);
    this.setState({
      quantity: ['q']
    })
  };

  getModalStyle = {
    borderRadius: '5px',
    width: '70%',
    marginLeft: '15%',
    background: 'gainsboro',
    border: '1px #025195 solid',
    padding: '25px',
  };

  getContainerStyle = {
    width: '100%',
    display: 'table',
  };

  handleCart = () => {
    const { addOrderToCart, price, type, cart, selectedFlavors, updateCartRow } = this.props
    const { quantity } = this.state
    let cartRowIndex = cart.findIndex(c => c.type === type)
    const aux = quantity.length.toString() + ': ' + selectedFlavors.join(',');
    let description = (cartRowIndex > -1 && cart[cartRowIndex].desc ? (cart[cartRowIndex].desc + ', ' + aux) : aux);

    if (cartRowIndex > -1) {
      const newRowCart = Object.assign({}, cart[cartRowIndex], {
        qty: cart[cartRowIndex].qty + 1,
        desc: description
      });
      cart[cartRowIndex] = newRowCart;
      updateCartRow(cart); 
    } else {
      addOrderToCart(price, type, quantity.length, description);
    }
  }

  handleAddMore = () => {
    const { selectedFlavors, type } = this.props;
    if (selectedFlavors.length) {
      // Add to cart
      this.handleCart();
      // Refreshing quantity
      let aux = this.state.quantity;
      aux.push('q')
      this.setState({
        quantity: aux
      })
    } else if (type === 'Cucurucho' || type === 'Familiar') {
      alert('No ha seleccionado ningun sabor, por favor termine con el prducto actual');
    } else {
      alert('Debe seleccionar al menos 1 tipo de producto para proseguir');
    }
  }

  render() {
    const { modalOpened, addOrderToCart, selectedFlavors, type } = this.props;
    const { quantity } = this.state;
    const image = 'icecream-full.png';

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalOpened}
          onClose={this.handleClose}
        >
          <div style={this.getModalStyle}>
            <div>
              { quantity.map((q, i) => {
                  return (<img key={i} src={require(`../images/${image}`)} />)
                })
              }
              <IconButton
                color="primary"
                aria-label="Add more"
                onClick={this.handleAddMore.bind(this)}
                disabled={!selectedFlavors.length}
              >
                <AddCircleOutline />
              </IconButton>
            </div>

            <div style={this.getContainerStyle}>
              <div style={{ display: 'table-cell', width: '70%' }}>
                <FlavorsDropZone />
              </div>
              <div style={{ display: 'table-cell' }}>
                { (type === 'Cucurucho' || type === 'Familiar') &&
                  <List component="nav">
                    <FlavorCard name="Chocolate" />
                    <FlavorCard name="Frutilla" />
                    <FlavorCard name="Dulce de Leche" />
                    <FlavorCard name="Crema Tramontana" />
                    <FlavorCard name="Dulce de Leche Granizado" />
                    <FlavorCard name="Menta Granizada" />
                  </List> 
                }
                { type === 'Frizzio' &&
                  <List component="nav">
                    <FlavorCard name="Pizza" />
                    <FlavorCard name="Mini Pizza" />
                    <FlavorCard name="Bastoncitos de Mozzarella" />
                    <FlavorCard name="Pechuguitas de Pollo" />
                  </List>
                }
                { type === 'Palitos' &&
                  <List component="nav">
                    <FlavorCard name="Frutilla" />
                    <FlavorCard name="Limon" />
                    <FlavorCard name="Manzana" />
                    <FlavorCard name="Anana" />
                  </List>
                }
              </div>
            </div>
            <IconButton
              color="primary"
              aria-label="Add to shopping cart"
              onClick={this.handleCart.bind(this)}
              disabled={!selectedFlavors.length}
            >
              <AddShoppingCart />
            </IconButton>
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  addOrderToCart: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  modalOpened: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  selectedFlavors: PropTypes.array.isRequired,
  toggleModal: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  updateCartRow: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState);
  return {
    cart: p.cart,
    modalOpened: p.modalOpened,
    price: p.price,
    type: p.type,
    selectedFlavors: p.selectedFlavors
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModal,
      addOrderToCart,
      updateCartRow
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(SimpleModal));

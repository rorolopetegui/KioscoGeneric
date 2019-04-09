import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initialState } from '../../reducers/pageState';
import ItemCheckout from './ItemCheckout';
import SendButton from '../Buttons/SendButton';
import { NoProductsMessage, totalMessage, btnText } from '../../texts/productListCheckout';

/* eslint-disable react/prefer-stateless-function */
class Checkout extends Component {
    submitOrder = () => {
        console.log("Submit order");
    }
    updateTotal = (cart) => {
        return cart.map(({ price, qty }) => price * qty).reduce((sum, i) => sum + i, 0);
    }
    render() {
        const { classes, cart } = this.props;
        const paymentTotal = this.updateTotal(cart);
        return (
            <div style={classes.container}>
                <div style={classes.container}>
                    {cart.length <= 0 &&
                        <span
                            style={classes.notProducts}
                        >
                            {NoProductsMessage}
                        </span>
                    }
                    {cart.map((item, index) =>
                        <div key={index}
                            style={classes.container}
                        >
                            <ItemCheckout classes={classes.item} item={item} />
                        </div>)}
                </div>
                <div style={classes.container}>
                    <hr />
                    <div style={classes.container}>
                        <span
                            style={classes.invoiceTotal}
                        >
                            {totalMessage}
                            <span
                                style={classes.invoiceTotalAmount}
                            >
                                ${paymentTotal}
                            </span>
                        </span>
                    </div>
                    <div style={classes.container}>
                        <SendButton classes={classes.button} action={this.submitOrder.bind(this)}>
                            {btnText}
                        </SendButton>
                    </div>
                </div>

            </div>
        );
    }
}

/* eslint-enable global-require */
Checkout.propTypes = {
    cart: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
    const p = state.get('pageState', initialState);
    return {
        cart: p.cart,
    }
}

export default connect(
    mapStateToProps,
)(Checkout);

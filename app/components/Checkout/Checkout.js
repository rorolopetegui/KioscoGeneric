import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ItemCheckout from './ItemCheckout';
import SendButton from '../Buttons/SendButton';

/* eslint-disable react/prefer-stateless-function */
class Checkout extends Component {
    submitOrder = () => {
        console.log("Submit order");
    }
    render() {
        const { classes, sales } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.container}>
                    {sales.map((item, index) =>
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
                            Total:
                        <span
                                style={classes.invoiceTotalAmount}
                            >
                                $1.99
                        </span>
                        </span>
                    </div>
                    <div style={classes.container}>
                        <SendButton classes={classes.button} action={this.submitOrder.bind(this)}>
                            Finalizar Pedido
                        </SendButton>
                    </div>
                </div>

            </div>
        );
    }
}

/* eslint-enable global-require */
Checkout.propTypes = {
    classes: PropTypes.object.isRequired,
    sales: PropTypes.array.isRequired,
};

export default Checkout;
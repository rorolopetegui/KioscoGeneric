import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
const ItemCheckout = props => {
    const { classes, item } = props;
    return (
        <div>
            <div style={classes.container}>
                <div style={classes.containerName}>
                    <span
                        style={classes.itemName}
                    >
                        {item.type}
                    </span>
                </div>
                <div style={classes.containerPrice}>
                    <div style={classes.containerQty}>
                        <span
                            style={classes.itemQty}
                        >
                            {item.qty}x
                                        </span>
                    </div>
                    <div style={classes.containerTotal}>
                        <span
                            style={classes.itemName}
                        >
                            ${item.price}
                        </span>
                    </div>
                </div>
            </div>
            <div style={classes.containerDesc}>
                <span
                    style={classes.itemDesc}
                >
                    {item.desc}
                </span>
            </div>
        </div>
    );
};
/* eslint-enable global-require */
ItemCheckout.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
};

export default ItemCheckout;

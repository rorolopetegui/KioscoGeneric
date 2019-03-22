import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class SendButton extends Component {
    state = {
        hover: false,
    };

    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { classes, children, action } = this.props;
        const { hover } = this.state;
        return (
            <div
                style={!hover ? classes.container : classes.containerHover}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
                onClick={action}
                className={"buttonAnimation"}
            >
                <span style={classes.innerContent}>{children}</span>
            </div>
        );
    }
}
/* eslint-enable global-require */
SendButton.propTypes = {
    children: PropTypes.node.isRequired,
    classes: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
};

export default SendButton;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* eslint-disable global-require */
class CloseModal extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };

    render() {
        const { classes, action, icon } = this.props;
        const { hover } = this.state;
        return (
            <span>Hello</span>
        );
    }
}
/* eslint-enable global-require */
CloseModal.propTypes = {
    icon: PropTypes.object.isRequired,
    classes: PropTypes.object.isRequired,
    //action: PropTypes.action.isRequired,
};

export default CloseModal;

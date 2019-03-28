import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media-animation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

/* eslint-disable global-require */
class CloseModal extends Component {
    state = {
        hover: false,
    };
    onMouseEnter = () => {
        this.setState(state => ({ hover: !state.hover }));
    };
    render() {
        const { classes, action } = this.props;
        const { hover } = this.state;
        return (
            <div
                style={classes.circleButton}
                onMouseEnter={this.onMouseEnter.bind(this)}
                onMouseLeave={this.onMouseEnter.bind(this)}
                onClick={action}
            >
                <div className="center">
                    <FontAwesomeIcon
                        className={!hover ? "icon" : "scaleIcon"}
                        style={classes.socialMediaIcon}
                        icon={faTimes}
                        size="1x"
                    />
                </div>
            </div>
        );
    }
}
/* eslint-enable global-require */
CloseModal.propTypes = {
    classes: PropTypes.object.isRequired,
    action: PropTypes.func.isRequired,
};

export default CloseModal;

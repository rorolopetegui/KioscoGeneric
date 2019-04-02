import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './slider-animations.css';

/* eslint-disable global-require */
class Promos extends Component {
  state = {
    page: 0,
    transitionRight: true,
  };
  nextPage = () => {
    this.setState(state => ({ page: (state.page === (this.props.maxPage - 1) ? 0 : state.page + 1) }));
  };
  backPage = () => {
    this.setState(state => ({ page: (state.page === 0 ? (this.props.maxPage - 1) : state.page - 1) }));
  };

  componentDidMount() {
    setInterval(() => {
      this.nextPage();
    }, 6500);
  };
  render() {
    const { classes, promos } = this.props;
    const { page, transitionRight } = this.state;
    let pageSrc = promos[page];
    return (
      <TransitionGroup>
        <CSSTransition
          key={pageSrc._id}
          timeout={1000}
          classNames={transitionRight ? "right" : "left"}
        >
          <img
            src={pageSrc.imgLandspace}
            style={classes.backgroundImage}
          />
        </CSSTransition>
      </TransitionGroup>
    );
  }
};
/* eslint-enable global-require */
Promos.propTypes = {
  classes: PropTypes.object.isRequired,
  maxPage: PropTypes.string.isRequired,
  promos: PropTypes.array.isRequired,
};

export default Promos;

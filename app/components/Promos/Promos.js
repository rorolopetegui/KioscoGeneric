import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PromosContent from '../../content/PromosContent';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './slider-animations.css';

const maxPage = PromosContent.length;
/* eslint-disable global-require */
class Promos extends Component {
  state = {
    page: 0,
    transitionRight: true,
  };
  nextPage = () => {
    this.setState(state => ({ page: (state.page === (maxPage - 1) ? 0 : state.page + 1) }));
  };
  backPage = () => {
    this.setState(state => ({ page: (state.page === 0 ? (maxPage - 1) : state.page - 1) }));
  };
  componentDidMount() {
    setInterval(() => {
      this.nextPage();
    }, 6500);
  };
  render() {
    const { classes } = this.props;
    const { page, transitionRight } = this.state;
    let pageSrc = PromosContent[page];
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
};

export default Promos;

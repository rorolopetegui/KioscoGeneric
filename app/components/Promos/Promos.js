import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PromosContent from '../../content/PromosContent';
import './slider-animations.css';

const maxPage = PromosContent.length;

/* eslint-disable global-require */
class Promos extends Component {
  state = {
    page: 0,
  };
  nextPage = () => {
    this.setState(state => ({ page: (state.page === (maxPage - 1) ? 0 : state.page + 1) }));
  };
  backPage = () => {
    this.setState(state => ({ page: (state.page === 0 ? (maxPage - 1) : state.page - 1) }));
  };
  componentDidMount(){
    setInterval(() => { 
      this.nextPage(); 
    }, 5500);
  };
  render() {
    const { classes } = this.props;
    const { page, } = this.state;
    return (
      <div onClick={() => (location.href = '/list')}>
        {PromosContent.map((item, index) =>
          <div key={index} className={"item " + (index === page ? " item-active" : "")}>
            <img
              src={item.imgLandspace}
              style={classes.backgroundImage}
            />
          </div>
        )}
      </div>
    );
  }
};
/* eslint-enable global-require */
Promos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Promos;

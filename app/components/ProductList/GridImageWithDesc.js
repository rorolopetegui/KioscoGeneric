import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { toggleModal } from '../../reducers/pageState';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import './carousel.css';

class GridImageWIthDesc extends Component {
  state = {
    onSwipe: false,
  };
  tryToggleModal = (price, type) => {
    setTimeout(() => {
      if (!this.state.onSwipe) {
        this.props.toggleModal(true, price, type);
      } else {
        this.setState({ onSwipe: false });
      }
    }, 300);

  }
  onSwipe = () => {
    this.setState({ onSwipe: true });
  }
  render() {
    // Hard coded for demo
    const tileData = [
      { img: 'cucuruchos.jpg', name: 'Cucuruchos', price: 15, type: 'Cucurucho' },
      { img: 'familiar.jpg', name: 'Familiar', price: 30, type: 'Familiar' },
      { img: 'frizzio.png', name: 'Frizzio', price: 100, type: 'Frizzio' },
      { img: 'palitos.jpg', name: 'Palitos', price: 5, type: 'Palitos' },
      { img: 'palitos.jpg', name: 'Palitos', price: 5, type: 'Palitos' },
    ];
    var settings = {
      centerMode: true,
      slidesToShow: 1,
      rows: 4,
      slidesPerRow: 1,
      arrows: true,
      swipeToSlide: true,
      centerPadding: '0px',
      focusOnSelect: true,
    };
    const { classes } = this.props;
    return (
      <Slider
        {...settings}
        //onSwipe={this.testSwipe.bind(this)}
        beforeChange={this.onSwipe.bind(this)}
      >
        {tileData.map((tile, index) => (
          <div
            key={index}
            style={classes.container}
            onClick={this.tryToggleModal.bind(this, tile.price, tile.type)}
          >
            <div style={classes.container}>
              <span
                style={classes.itemTitle}
              >
                {tile.name}
              </span>
            </div>
            <div style={classes.container}>
              <div style={classes.containerImage}>
                <img
                  /* eslint-disable global-require */
                  src={require(`../../images/${tile.img}`)}
                  alt={tile.title}
                  key={tile.img}
                  style={classes.itemImg}
                />
              </div>
              <div style={classes.containerDesc}>
                <span
                  style={classes.itemDesc}
                >
                  Una Descripcion
                </span>
              </div>
              <div style={classes.containerPrice}>
                <span
                  style={classes.itemPrice}
                >
                  ${tile.price}
                </span>
              </div>
            </div>
            <span></span>
          </div>
        ))}
      </Slider>
    );
  }
}

GridImageWIthDesc.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleModal: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      toggleModal,
      push
    },
    dispatch,
  );
}

export default connect(
  null,
  mapDispatchToProps,
)(GridImageWIthDesc);

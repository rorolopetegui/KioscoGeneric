import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';

/* eslint-disable global-require */
class Carousel extends Component {
    state = {
        page: 0,
    };

    changePage = (currentSlide, nextSlide) => {
        this.setState(state => ({ page: nextSlide }));
    };

    testfunc = (currentSlide, nextSlide) => {
        console.log("before change", currentSlide, nextSlide);
    }

    render() {
        const { classes, content } = this.props;
        const { page } = this.state;
        var settings = {
            centerMode: true,
            slidesToShow: 3,
            arrows: true,
            swipeToSlide: true,
            vertical: true,
            verticalSwiping: true,
            centerPadding: '0px',
            focusOnSelect: true,
        };
        //const { hoverUp, hoverDown, page, } = this.state;
        return (
            <Slider {...settings} beforeChange={this.changePage.bind(this)}>
                {content.map((item, index) =>
                    <div>
                        <div
                            key={index}
                            style={classes.item}
                        >
                            <img
                                src={item.img}
                                alt={item.alt}
                                style={classes.imgCategory}
                            />
                            <span
                                style={classes.name}
                            >
                                {item.name}
                            </span>
                        </div>
                    </div>)}
            </Slider>
        );
    }
}
/* eslint-enable global-require */
Carousel.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
};

export default Carousel;

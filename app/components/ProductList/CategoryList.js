import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { initialState, updateCategoryId } from '../../reducers/pageState';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';


class CategoryList extends Component {
    state = {
        page: 0,
    };

    changePage = (currentSlide, nextSlide) => {
        this.setState(state => ({ page: nextSlide }));
        this.props.updateCategoryId(nextSlide.toString());
    };

    testfunc = (currentSlide, nextSlide) => {
        console.log("before change", currentSlide, nextSlide);
    }

    render() {
        const { classes, content } = this.props;
        const { page } = this.state;
        //this.changePage(0, categoryId);
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
        return (
            <Slider {...settings} beforeChange={this.changePage.bind(this)}>
                {content.map((item, index) =>
                    <div key={index}
                        style={classes.item}
                        className={"item-slide" + (page === index ? " item-current" : "")}
                    >
                        <div>
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

CategoryList.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
    categoryId: PropTypes.string.isRequired,
    updateCategoryId: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    const p = state.get('pageState', initialState);
    return {
        categoryId: p.categoryId,
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            updateCategoryId,
        },
        dispatch,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CategoryList);
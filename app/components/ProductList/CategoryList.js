import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from '../Carousel/Carousel';


class CategoryList extends Component {
    render() {
        const { classes, content } = this.props;
        return (
            <Carousel classes={classes} content={content} />
        );
    }
}

CategoryList.propTypes = {
    classes: PropTypes.object.isRequired,
    content: PropTypes.array.isRequired,
};

export default CategoryList;

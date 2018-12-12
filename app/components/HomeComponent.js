import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* eslint-disable global-require */
const HomeComponent = props => {
  const { children, text, title, imgName, styles, altImgName } = props;
  return (
    <div style={styles.body} onClick={() => (location.href = '/list')}>
      <img
        style={styles.bgImage}
        src={require(`../images/${imgName}`)}
        alt={altImgName}
      />
    </div>
  );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
  children: PropTypes.node,
  imgName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  styles: PropTypes.object,
  altImgName: PropTypes.string,
};

export default HomeComponent;

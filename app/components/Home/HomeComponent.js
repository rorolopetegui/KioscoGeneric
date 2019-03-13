import React from 'react';
import PropTypes from 'prop-types';
import Promos from '../Promos/Promos';

const styles = {
  backgroundImage: {
    width: '100vw',
    height: '100vh',
  },
};
/* eslint-disable global-require */
const HomeComponent = props => {
  //const { children,  } = props;
  return (
    <div onClick={() => (location.href = '/list')}>
      <Promos classes={styles} />
    </div>
  );
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
  children: PropTypes.node,
};

export default HomeComponent;

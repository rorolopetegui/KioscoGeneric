import React from 'react';
import PropTypes from 'prop-types';
import ProductList from './ProductList';
import PaymentMethod from './PaymentMethod';
import PaymentTotal from './PaymentTotal';

// const products = {};
const styles = {
  body: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#134390',
  },
  productList: {
    // backgroundColor: 'yellow',
    // backgroundColor: 'white',
    // color: '#192837',
    // border: '3px solid #0E769D',
    // position: 'static',
    width: '50%',
    // height: '100%',
    float: 'right',
  },
  paymentMethods: {
    // backgroundColor: 'blue',
    // backgroundColor: 'white',
    // border: '3px solid #0E769D',
    width: '50%',
    // height: '100%',
    float: 'left',
    // marginLeft: '25%',
  },
  paymentTotal: {
    width: '50%',
    height: '50%',
    float: 'right',
    // backgroundColor:'red',
  },
};
const CheckoutComponent = props => {
  const { children } = props;
  return (
    <div style={styles.body}>
      <div style={styles.productList}>
        <ProductList />
      </div>
      <div style={styles.paymentMethods}>
        <PaymentMethod />
      </div>
      <div style={styles.paymentTotal}>
        <PaymentTotal />
      </div>
      {children}
    </div>
  );
};

CheckoutComponent.propTypes = {
  children: PropTypes.node,
};

export default CheckoutComponent;

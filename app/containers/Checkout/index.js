import React, { PureComponent } from 'react';
import { CheckoutComponent } from '../../components';
import { RegisterModal } from '../../modals';

/* eslint-disable react/prefer-stateless-function */
export default class Checkout extends PureComponent {
  render() {
    return (
      <div>
        <CheckoutComponent />
        <RegisterModal />
      </div>
    );
  }
}

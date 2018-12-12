import React, { PureComponent } from 'react';
import { GridImageWithDesc } from '../../components';
import { SimpleModal } from '../../modals';

/* eslint-disable react/prefer-stateless-function */
export default class ProductList extends PureComponent {
  render() {
    return (
      <div>
        <GridImageWithDesc />
        <SimpleModal />
      </div>
    );
  }
}

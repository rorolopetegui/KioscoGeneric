import React, { PureComponent } from 'react';
import { GridImageWithDesc, HeaderList, CategoryList } from '../../components';
import { SimpleModal } from '../../modals';
import Categories from '../../content/Categories';

const styles = {
  headerList: {
    container: {
      position: 'relative',
      width: '100%',
      height: '300px',
    },
    containerPromos: {
      position: 'relative',
      width: '100%',
      height: '67%',
      overflow: 'hidden',
    },
    backgroundImage: {
      width: '100%',
      height: '100%',
      //minHeight: '600px',
      position: 'absolute',
    },
    containerSubHeader: {
      position: 'relative',
      width: '100%',
      height: '33%',
    },
    containerLogo: {
      width: '10%',
      height: '100%',
      position: 'relative',
      float: 'left',
    },
    containerTitleSection: {
      width: '80%',
      height: '100%',
      position: 'relative',
      float: 'left',
    },
    containerButtonBack: {
      width: '10%',
      height: '100%',
      position: 'relative',
      float: 'left',
    },
    imgLogo: {
      width: '100px',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
    menuName: {
      float: 'left',
      top: '50%',
      marginLeft: '50px',
    },
    button: {
      container: {
        position: 'relative',
        marginTop: '10px',
        marginRight: '10px',
        backgroundColor: '#005959',// 0%, rgba(107,0,0,1) 10%)',
        width: '100px',
        float: 'right',
        height: '40px',
        borderRadius: '15px',
      },
      containerHover: {
        position: 'relative',
        marginTop: '10px',
        marginRight: '10px',
        backgroundColor: '#008080',
        width: '100px',
        float: 'right',
        height: '40px',
        borderRadius: '15px',
      },
      innerContent: {
        color: 'white',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
  contentContainer: {
    width: '100%',
  },
  categoryContainer: {
    width: '20%',
    height: '550px',
    position: 'relative',
    float: 'left',
    padding: '20px',
    overflow:'hidden',
  },
  productContainer: {
    width: '80%',
    position: 'relative',
    float: 'left',
  },
  checkoutContainer: {
    width: '10%',
    position: 'relative',
    float: 'left',
  },
  categoryList: {
    item: {
      outline: '0 !important',// !important;
      outline: 'none !important',// !important;
    },
    imgCategory: {
      maxWidth: '60%',
      height: '95px',
      margin: '0 auto',
    },
    name: {
      width: '100%',
      float: 'left',
    },
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class ProductList extends PureComponent {
  render() {
    return (
      <div>
        <HeaderList classes={styles.headerList} />
        <hr />
        <div style={styles.contentContainer}>
          <div style={styles.categoryContainer}>
            <CategoryList classes={styles.categoryList} content={Categories} />
          </div>
          <div style={styles.productContainer}>
            <GridImageWithDesc />
          </div>
          <div style={styles.checkoutContainer}>
            <span>CheckoutContaine</span>
          </div>
        </div>

        <SimpleModal />
      </div>
    );
  }
}

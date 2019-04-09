import React, { PureComponent } from 'react';
import { GridImageWithDesc, HeaderList, CategoryList, Checkout } from '../../components';
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
    containerHeaderHelper: {
      width: '100%',
      position: 'relative',
      float: 'left',
      height: '65px',
      marginTop: '5px',
      color: 'white',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '17px',
      overflow: 'hidden',
    },
    categoryTitleContainer: {
      width: '15%',
      height: '100%',
      position: 'relative',
      float: 'left',
      backgroundColor: '#FF4040',
      paddingLeft: '8px',
      paddingTop: '3px',
    },
    productsTitleContainer: {
      width: '65%',
      height: '100%',
      position: 'relative',
      float: 'left',
      paddingLeft: '8px',
      paddingTop: '3px',
    },
    checkoutTitleContainer: {
      width: '20%',
      height: '100%',
      position: 'relative',
      float: 'left',
      backgroundColor: '#FF4040',
      paddingLeft: '8px',
      paddingTop: '3px',
    },
    textTitle: {
      zIndex: '1',
      position:'relative',
    },
    imgBanner: {
      filter: 'brightness(50%)',
      width: '100%',
      position: 'absolute',
      top: '0',
      left: '0',
      zIndex: '0',
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
        backgroundColor: '#FF4040',// 0%, rgba(107,0,0,1) 10%)',
        width: '100px',
        float: 'right',
        height: '40px',
        borderRadius: '15px',
      },
      containerHover: {
        position: 'relative',
        marginTop: '10px',
        marginRight: '10px',
        backgroundColor: '#B22C2C',
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
    width: '15%',
    height: '550px',
    position: 'relative',
    float: 'left',
    padding: '20px',
    overflow: 'hidden',
  },
  productContainer: {
    width: '65%',
    height: '550px',
    position: 'relative',
    float: 'left',
    overflow: 'hidden',
  },
  checkoutContainer: {
    width: '20%',
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
  checkout: {
    container: {
      width: '100%',
      position: 'relative',
      float: 'left',
      textAlign: 'center',
    },
    item: {
      container: {
        width: '100%',
        position: 'relative',
        float: 'left',
      },
      containerName: {
        width: '65%',
        position: 'relative',
        float: 'left',
      },
      containerDesc: {
        width: '65%',
        position: 'relative',
        float: 'left',
      },
      containerPrice: {
        width: '35%',
        position: 'relative',
        float: 'left',
      },
      containerQty: {
        width: '50%',
        position: 'relative',
        float: 'left',
      },
      containerTotal: {
        width: '50%',
        position: 'relative',
        float: 'left',
      },
      itemName: {
        color: '#333333',
        fontFamily: 'Open Sans',
        fontWeight: '700',
        fontSize: '20px',
      },
      itemQty: {
        color: '#333333',
        fontFamily: 'Nunito',
        fontWeight: '100',
        fontSize: '15px',
        marginLeft: '10px',
      },
      itemDesc: {
        color: '#A6A6A6',
        fontFamily: 'Nunito',
        fontWeight: '100',
        fontSize: '15px',
      },
    },
    invoiceTotal: {
      float: 'right',
      color: '#FF4040',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '20px',
    },
    invoiceTotalAmount: {
      float: 'right',
      color: '#333333',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '20px',
    },
    button: {
      container: {
        position: 'relative',
        marginTop: '15px',
        backgroundColor: '#FF4040',// 0%, rgba(107,0,0,1) 10%)',
        //backgroundColor: 'blue',
        width: '100%',
        float: 'left',
        height: '42.5px',
      },
      containerHover: {
        position: 'relative',
        marginTop: '15px',
        backgroundColor: '#B22C2C',
        width: '100%',
        float: 'left',
        height: '42.5px',
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
    notProducts: {
      color: '#A6A6A6',
      fontFamily: 'Nunito',
      fontWeight: '100',
      fontSize: '15px',
    },
  },
  productList: {
    container: {
      width: '100%',
      position: 'relative',
      float: 'left',
    },
    containerImage: {
      width: '10%',
      position: 'relative',
      float: 'left',
    },
    containerDesc: {
      width: '80%',
      position: 'relative',
      float: 'left',
    },
    containerPrice: {
      width: '10%',
      position: 'relative',
      float: 'right',
    },
    itemTitle: {
      color: '#333333',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '20px',
    },
    itemDesc: {
      color: '#313131',
      fontFamily: 'Nunito',
      fontWeight: '100',
      fontSize: '15px',
    },
    itemImg: {
      width: '100%',
    },
    itemPrice: {
      color: '#333333',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '20px',
    },
  },
};
/* eslint-disable react/prefer-stateless-function */
export default class ProductList extends PureComponent {
  render() {
    return (
      <div>
        <HeaderList classes={styles.headerList} />
        <div style={styles.contentContainer}>
          <div style={styles.categoryContainer}>
            <CategoryList classes={styles.categoryList} content={Categories} />
          </div>
          <div style={styles.productContainer}>
            <GridImageWithDesc classes={styles.productList} />
          </div>
          <div style={styles.checkoutContainer}>
            <Checkout classes={styles.checkout} />
          </div>
        </div>

        <SimpleModal />
      </div>
    );
  }
}
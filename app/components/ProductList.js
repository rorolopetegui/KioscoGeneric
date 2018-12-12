import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import {
  initialState,
  updatePaymentTotal,
  updatePaymentSubTotal,
  updatePaymentTax,
} from '../reducers/pageState';
const TAX_RATE = 0.21;

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: 'rgba(250, 235, 215, 0.7)',
  },
  table: {
    width: '100%',
  },
  headProduct: {
    color: '#134390',
  },
  headPrice: {
    color: '#134390',
    textAlign: 'right',
  },
  avatar: {
    float: 'left',
    width: 100,
    height: 100,
  },
  icoAvatar: {
    width: '100%',
  },
  sumtotal: {
    textAlign: 'right',
    color: '#134390',
  },
});

/* eslint-disable global-require */
class ProductList extends Component {
  ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  }

  priceRow = (qty, unit) => {
    return qty * unit;
  }

  createRow = (type, price, img, qty, desc) => {
    const total = this.priceRow(qty, price);
    return { name, desc, img, qty, price, total };
  }

  subtotal(items) {
    return items.map(({ total }) => total).reduce((sum, i) => sum + i, 0);
  }

  render() {
    const { classes, cart, updatePaymentTotal, updatePaymentSubTotal, updatePaymentTax, } = this.props;
    const rows = cart.map((row) => this.createRow(row.type, row.price, row.img, row.qty, row.desc));
    const invoiceTotal = this.subtotal(rows);
    const invoiceTaxes = TAX_RATE * invoiceTotal;
    const invoiceSubtotal = invoiceTotal - invoiceTaxes;

    updatePaymentTotal(invoiceTotal);
    updatePaymentSubTotal(invoiceSubtotal);
    updatePaymentTax(invoiceTaxes);

    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.headProduct}>Producto</TableCell>
              <TableCell numeric className={classes.headPrice}>
                Total
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow key={row.type}>
                <TableCell>
                  <Avatar>
                    <img
                      src={require(`../images/${row.img}`)}
                      alt="Item 1"
                    />
                  </Avatar>
                  <ListItemText
                    primary={row.type}
                    secondary={row.desc}
                  />
                  <div>
                    Cantidad: {row.qty}
                    <br />
                    Precio Unidad: {row.price}
                  </div>
                </TableCell>
                <TableCell numeric>
                  {this.ccyFormat(row.total)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
};
/* eslint-enable global-require */
ProductList.propTypes = {
  cart: PropTypes.array.isRequired,
  updatePaymentTotal: PropTypes.func.isRequired,
  updatePaymentSubTotal: PropTypes.func.isRequired,
  updatePaymentTax: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const p = state.get('pageState', initialState);
  return {
    cart: p.cart,
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updatePaymentTotal,
      updatePaymentSubTotal,
      updatePaymentTax,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ProductList));

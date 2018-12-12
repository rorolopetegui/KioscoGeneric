import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { initialState } from '../reducers/pageState';

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
class PaymentTotal extends Component {
  ccyFormat = (num) => {
    return `${num.toFixed(2)}`;
  }

  render() {
    const { classes, paymentTotal, paymentSubTotal, paymentTax, } = this.props;
    
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableBody>
            <TableRow>
                <TableCell className={classes.headProduct}>Subtotal</TableCell>
                <TableCell numeric className={classes.headPrice}>
                  {this.ccyFormat(paymentSubTotal)}
                </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.headProduct}>Tax ({`${(TAX_RATE * 100).toFixed(0)} %`})</TableCell>
              <TableCell numeric className={classes.headPrice}>
                {this.ccyFormat(paymentTax)}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.headProduct}>Total</TableCell>
              <TableCell numeric className={classes.headPrice}>
                {this.ccyFormat(paymentTotal)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
/* eslint-enable global-require */
PaymentTotal.propTypes = {
  paymentTotal: PropTypes.number.isRequired,
  paymentSubTotal: PropTypes.number.isRequired,
  paymentTax: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const p = state.get('pageState', initialState);
  return {
    paymentTotal: p.paymentTotal,
    paymentSubTotal: p.paymentSubTotal,
    paymentTax: p.paymentTax,
  };
};

export default connect(
  mapStateToProps,
    null,
)(withStyles(styles)(PaymentTotal));

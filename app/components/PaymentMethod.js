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
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Fade from '@material-ui/core/Fade';

import {
  initialState,
  toggleModalRegister,
  togglePaymentCash,
  togglePaymentCredit,
} from '../reducers/pageState';

const styles = theme => ({
  root: {
    width: '90%',
    marginTop: theme.spacing.unit * 3,
    marginRight: '5%',
    float: 'right',
    backgroundColor: 'rgba(250, 235, 215, 0.7)',
  },
  title: {
    textAlign: 'center',
    color: '#134390',
  },
  button: {
    marginLeft: '10%',
    backgroundColor: '#2B4C94',
    '&:hover': {
      backgroundColor: '#7F93BE',
    },
  },
  wrapper: {
    width: '95%',
    textAlign: 'center',
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    width: '100%',
    margin: theme.spacing.unit,
  },
  disabled: {
    display: 'none',
  },
});

class PaymentMethod extends Component {
  state = {
    paymentWasMade: false,
  };

  handleClickCash = (paymentTotal) => {
    this.props.toggleModalRegister(true);
    this.props.togglePaymentCash(true);
    console.log("Trying to pay this: " + paymentTotal);
    let url = 'http://localhost:4661/Service.svc/PayAmount/' + paymentTotal + '/false';
    console.log(url);
    const xhr = new XMLHttpRequest();
    xhr.open(
      'get',
      url,
      true,
    );
    xhr.onload = function() {
      const itemData = JSON.parse(xhr.responseText);
      console.log(itemData);
      console.log(itemData.PayAmountResult);
      this.checkPayment();
    }.bind(this);
    xhr.send();
  };

  checkPayment = () => {
    const myInterval = setInterval(() => {
      const xhr = new XMLHttpRequest();
      xhr.open('get', 'http://localhost:4661/Service.svc/PaymentWasMade', true);
      xhr.onload = () => {
        const itemData = JSON.parse(xhr.responseText);
        if (itemData.PaymentWasMadeResult === 'True') {
          this.setState(state => ({ paymentWasMade: !state.paymentWasMade }));
          clearInterval(myInterval);
        }
      };
      xhr.send();
    }, 1500);
  };

  handleClickCreditCard = (paymentTotal) => {
    console.log("Trying to pay this: " + paymentTotal);
    this.props.toggleModalRegister(true);
    this.props.togglePaymentCredit(true);
  };

  render() {
    const {
      classes,
      registerModalOpened,
      paymentCash,
      paymentCredit,
      paymentTotal,
    } = this.props;
    const { paymentWasMade } = this.state;
    console.log('WTF');
    console.log(`paymentCash: ${paymentCash}`);
    console.log(`paymentCredit: ${paymentCredit}`);
    console.log(`registerModalOpened: ${registerModalOpened}`);
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell className={classes.title}>
                <h1>Medios de Pago</h1>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell className={classes.body}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={paymentCredit}
                  onClick={this.handleClickCash.bind(this, paymentTotal)}
                >
                  Efectivo
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  disabled={paymentCash}
                  // onClick={this.handleClickCreditCard}
                  onClick={this.handleClickCreditCard.bind(this, paymentTotal)}
                >
                  Tarjeta
                </Button>
              </TableCell>
            </TableRow>
            <TableRow
              className={
                (paymentCash || paymentCredit) &&
                  !paymentWasMade &&
                  !registerModalOpened
                  ? ''
                  : classes.disabled
              }
            >
              <div className={classes.wrapper}>
                <Fade in={paymentCash}>
                  <Paper
                    elevation={0}
                    className={paymentCash ? classes.paper : classes.disabled}
                  >
                    Ingrese su efectivo
                    <CircularProgress disableShrink />
                  </Paper>
                </Fade>
                <Fade in={paymentCredit}>
                  <Paper
                    elevation={0}
                    className={paymentCredit ? classes.paper : classes.disabled}
                  >
                    Realice su pago por el POS
                    <CircularProgress disableShrink />
                  </Paper>
                </Fade>
              </div>
            </TableRow>
            <TableRow className={paymentWasMade ? '' : classes.disabled}>
              <div className={classes.wrapper}>
                <Fade in={paymentWasMade}>
                  <Paper
                    elevation={0}
                    className={
                      paymentWasMade ? classes.paper : classes.disabled
                    }
                  >
                    Pago realizado.
                    <br />
                    Muchas gracias!
                  </Paper>
                </Fade>
              </div>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PaymentMethod.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleModalRegister: PropTypes.func.isRequired,
  registerModalOpened: PropTypes.bool.isRequired,
  paymentCash: PropTypes.bool.isRequired,
  paymentCredit: PropTypes.bool.isRequired,
  togglePaymentCash: PropTypes.func.isRequired,
  togglePaymentCredit: PropTypes.func.isRequired,
  paymentTotal: PropTypes.number.isRequired,
};

const mapStateToProps = state => {
  const p = state.get('pageState', initialState);
  return {
    registerModalOpened: p.registerModalOpened,
    paymentCash: p.paymentCash,
    paymentCredit: p.paymentCredit,
    paymentTotal: p.paymentTotal,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModalRegister,
      togglePaymentCash,
      togglePaymentCredit,
    },
    dispatch,
  );
// export default withStyles(styles)(PaymentMethod);
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(PaymentMethod));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// Custom Libraries
import { createSelector } from 'reselect';
// Material UI
import {
  Modal,
  withStyles,
  IconButton,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Forward from '@material-ui/icons/Forward';
// Reducers
import { initialState, toggleModalRegister } from '../reducers/pageState';

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  modalHeader: {
    width: '100%',
    // backgroundColor: 'red',
    color: 'red',
  },
  title: {
    float: 'center',
  },
});

class RegisterModal extends Component {
  handleClose = () => {
    this.props.toggleModalRegister(false);
  };

  getModalStyle = () => ({
    borderRadius: '5px',
    width: '70%',
    marginLeft: '15%',
    background: 'gainsboro',
    border: '1px #025195 solid',
    padding: '25px',
  });

  getHeaderStyle = () => ({
    width: '100%',
    height: '100%',
    // background: 'green',
    /* display: '-webkit-flex',
    display: 'flex',
    WebkitFlexWrap: 'wrap',
    flexWrap: 'wrap',
    WebkitAlignContent: 'center',
    alignContent: 'center', */
  });

  getTitleStyle = () => ({
    textAlign: 'center',
    marginLeft: '10%',
    marginRight: '10%',
  });

  getBodyStyle = () => ({
    // background: 'blue',
    alignContent: 'center',
    textAling: 'center',
  });

  getInputStyle = () => ({
    width: '200px',
  });

  getButtonStyle = () => ({
    width: '70px',
    height: '70px',
    backgroundColor: '#134390',
    color: 'white',
  });

  render() {
    const { classes, registerModalOpened } = this.props;
    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={registerModalOpened}
          onClose={this.handleClose}
        >
          <div style={this.getModalStyle()}>
            <div style={this.getHeaderStyle()}>
              <div style={this.getTitleStyle()}>
                <h2>ups... Al parecer no estas registrado</h2>
                No te pierdas de nuestras increibles promociones
              </div>
            </div>
            <div style={this.getBodyStyle()}>
              <table>
                <TableBody>
                  <TableRow>
                    <TableCell>Nombre</TableCell>
                    <TableCell>
                      <Input
                        style={this.getInputStyle()}
                        placeholder="Ej: Lucía Rodriguez"
                        inputProps={{
                          'aria-label': 'Nombre',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Telefono</TableCell>
                    <TableCell>
                      <Input
                        style={this.getInputStyle()}
                        placeholder="Ej: 0123456789"
                        inputProps={{
                          'aria-label': 'Telefono',
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        style={this.getButtonStyle()}
                        aria-label="Enviar"
                        onClick={this.handleClose.bind(this)}
                      >
                        <Forward />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Mail</TableCell>
                    <TableCell>
                      <Input
                        placeholder="Ej: mail@grido.com"
                        style={this.getInputStyle()}
                        inputProps={{
                          'aria-label': 'Mail',
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </table>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

RegisterModal.propTypes = {
  classes: PropTypes.object,
  registerModalOpened: PropTypes.bool.isRequired,
  toggleModalRegister: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const p = state.get('pageState', initialState);
  return {
    registerModalOpened: p.registerModalOpened,
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleModalRegister,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(RegisterModal));

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promos from '../Promos/Promos';
import LogIn from '../Login/LogIn';
import CloseModal from './CloseModal';
import './boardStyle.css';

const styles = {
  body: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    minHeight: '600px',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100vw',
    height: '100vh',
    minHeight: '600px',
    position: 'absolute',
  },
  boardLogIn: {
    width: '100%',
    zIndex: '1000',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
  login: {
    container: {
      width: '25%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    containerRegister: {
      width: '50%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    logoContainer: {
      position: 'relative',
      width: '100%',
    },
    logoImg: {
      width: '30%',
      display: 'block',
      margin: 'auto',
    },
    logoImgRegister: {
      width: '15%',
      display: 'block',
      margin: 'auto',
    },
    titleContainer: {
      position: 'relative',
      width: '100%',
      textAlign: 'center',
    },
    title: {
      color: '#808080',
      fontFamily: 'Nunito',
      fontWeight: '700',
      fontSize: '40px',
    },
    remarkedContainer: {
      position: 'relative',
      width: '100%',
      float: 'left',
      padding: '18px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '5px',
      borderColor: '#C0C0C0',
      marginBottom: '15px',
    },
    textContainer: {
      width: '100%',
      marginTop: '8px',
      marginBottom: '4px',
    },
    textContainerRegister: {
      width: '40%',
      float: 'left',
      marginTop: '8px',
      marginBottom: '4px',
      marginLeft: '5%',
    },
    registerData: {
      width: '50%',
      float: 'left',
    },
    inputText: {
      color: '#101010',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '14px',
    },
    inputContainer: {
    },
    input: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginRight: '5%',
      marginBottom: '2%',
      width: '100%',
      height: '42.5px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '16px',
    },
    inputRemarked: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginRight: '5%',
      marginBottom: '2%',
      width: '100%',
      height: '42.5px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '16px',
    },
    inputRegister: {
      color: '#192727',
      border: '1px solid #C0C0C0',
      marginLeft: '5%',
      marginBottom: '2%',
      width: '90%',
      height: '42.5px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '16px',
    },
    inputRemarkedRegister: {
      color: '#192727',
      border: '1px solid #F6546A',
      marginRight: '5%',
      marginBottom: '2%',
      width: '100%',
      height: '42.5px',
      paddingLeft: '8px',
      fontFamily: 'Roboto',
      fontSize: '16px',
    },
    buttonContainer: {
      marginTop: '12px',
      backgroundColor: 'red',
      width: '100%',
      height: '42.5px',
    },
    remarkedContNewAcc: {
      position: 'relative',
      width: '100%',
      float: 'left',
      padding: '18px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '5px',
      borderColor: '#C0C0C0',
      marginBottom: '15px',
      textAlign: 'center',
    },
    newAccount: {
      width: '100%',
      color: '#101010',
      fontFamily: 'Roboto',
      fontWeight: '400',
      fontSize: '16px',
    },
    newAccountLink: {
      width: '100%',
      color: 'blue',
      cursor: 'pointer',
    },
    button: {
      container: {
        position: 'relative',
        marginTop: '15px',
        backgroundColor: '#005959',// 0%, rgba(107,0,0,1) 10%)',
        //backgroundColor: 'blue',
        width: '100%',
        float: 'left',
        height: '42.5px',
      },
      containerHover: {
        position: 'relative',
        marginTop: '15px',
        backgroundColor: '#008080',
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
    buttonRegister: {
      container: {
        position: 'relative',
        marginTop: '15px',
        marginLeft: '2.5%',
        backgroundColor: '#005959',// 0%, rgba(107,0,0,1) 10%)',
        //backgroundColor: 'blue',
        width: '95%',

        float: 'left',
        height: '42.5px',
      },
      containerHover: {
        position: 'relative',
        marginTop: '15px',
        marginLeft: '2.5%',
        backgroundColor: '#008080',
        width: '95%',
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
  },
  closeModal: {
    circleButton: {
      width:'50px',
      height:'50px',
      color: 'black',
      position: 'relative',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '50px',
      borderColor: '#C0C0C0',
      margin: '10px',
      cursor: 'pointer',
    },
  },
};
/* eslint-disable global-require */
class HomeComponent extends Component {
  state = {
    displayBoard: true,
  };
  displayBoard = () => {
    this.setState(state => ({ displayBoard: !state.displayBoard }));
  };
  render() {
    const { displayBoard } = this.state;
    return (
      <div style={styles.body} onClick={!displayBoard ? this.displayBoard.bind(this) : (() => { })}>
        <Promos classes={styles} />
        <div style={styles.boardLogIn} className={displayBoard ? "boardDisplay" : "boardHidden"}>
          <div className={displayBoard ? "" : " loginDisplayNone"}>
            <CloseModal classes={styles.closeModal} action={this.displayBoard.bind(this)} />
            <LogIn showComponents={displayBoard} classes={styles.login} />
          </div>
        </div>
      </div>
    );
  }
};
/* eslint-enable global-require */
HomeComponent.propTypes = {
  children: PropTypes.node,
};

export default HomeComponent;

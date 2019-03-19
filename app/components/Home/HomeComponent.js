import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promos from '../Promos/Promos';
import LogIn from '../Login/LogIn';
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
      top: '20%',
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
    logInContainer: {
      position: 'relative',
      width: '100%',
      padding: '18px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '5px',
    },
    textContainer:{
      width:'100%',
    },
    inputText: {
      color: '#101010',
      fontFamily: 'Open Sans',
      fontWeight: '700',
      fontSize: '14px',
    },
    input: {

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
      <div style={styles.body} onClick={!displayBoard ? this.displayBoard.bind(this) : ""}>
        <Promos classes={styles} />
        <div style={styles.boardLogIn} className={displayBoard ? "boardDisplay" : "boardHidden"}>
          <LogIn classes={styles.login} />
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

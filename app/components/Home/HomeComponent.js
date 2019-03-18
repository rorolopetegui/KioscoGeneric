import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Promos from '../Promos/Promos';
import './boardStyle.css';

const styles = {
  body: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    overflow: 'hidden',
  },
  backgroundImage: {
    width: '100vw',
    height: '100vh',
    position: 'absolute',
  },
  boardLogIn: {
    width: '100vw',
    zIndex: '1000',
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.95)',
  },
};
/* eslint-disable global-require */
class HomeComponent extends Component {
  state = {
    displayBoard: false,
  };
  displayBoard = () => {
    this.setState(state => ({ displayBoard: !state.displayBoard }));
  };
  render() {
    const { displayBoard } = this.state;
    return (
      <div style={styles.body} onClick={this.displayBoard.bind(this)}>
        <Promos classes={styles} />
        <div style={styles.boardLogIn} className={displayBoard ? "boardDisplay" : "boardHidden"}>
            <span>HOLAAA</span>
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

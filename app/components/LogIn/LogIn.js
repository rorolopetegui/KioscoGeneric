import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable global-require */
class LogIn extends Component {
    /*state = {
      displayBoard: true,
    };
    displayBoard = () => {
      this.setState(state => ({ displayBoard: !state.displayBoard }));
    };*/
    render() {
        const { classes } = this.props;
        return (
            <div style={classes.container}>
                <div style={classes.logoContainer}>
                    <img
                        style={classes.logoImg}
                        src={require(`../../images/Cismo.png`)}
                        alt='Cismo'
                    />
                </div>
                <div style={classes.titleContainer}>
                    <span style={classes.title}>Sign In to Pizza</span>
                </div>
                <div style={classes.logInContainer}>
                    <div style={classes.textContainer}>
                        <span style={classes.inputText}>Username or email address</span>
                    </div>
                    <div style={classes.textContainer}>
                        <input
                            //style={!remarkName ? classes.input : classes.inputRemarked}
                            type="text"
                            //value={this.state.fname}
                            placeholder={"Put here your username"}
                        //onChange={this.handleChangeName.bind(this)} 
                        />
                    </div>
                    <div style={classes.textContainer}>
                        <span style={classes.inputText}>Password</span>
                    </div>
                    <div style={classes.textContainer}>
                        <input
                            //style={!remarkName ? classes.input : classes.inputRemarked}
                            type="text"
                            //value={this.state.fname}
                            placeholder={"Put here your password"}
                        //onChange={this.handleChangeName.bind(this)} 
                        />
                    </div>
                </div>


            </div>
        );
    }
};
/* eslint-enable global-require */
LogIn.propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object.isRequired,
};

export default LogIn;

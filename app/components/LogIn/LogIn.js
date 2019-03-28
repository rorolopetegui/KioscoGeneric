import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from './SendButton';
import './media-animation.css';
import Users from '../../content/Users';

/* eslint-disable global-require */
class LogIn extends Component {
    state = {
        fullname: "",
        email: "",
        user: "",
        password: "",
        remarkName: false,
        remarkUser: false,
        remarkEmail: false,
        remarkPassword: false,
        display: false,
        displayRegister: false,
        displayRegisterHidden: false,
        displayLogin: true,
        displayLoginHidden: false,
    };
    submit = () => {
        var found = false;
        for (var i = 0; i < Users.length; i++) {
            if (Users[i].username === this.state.user)
                found = true;
            if (Users[i].email === this.state.user)
                found = true;
            if (found)
                if (Users[i].password === this.state.password) {
                    console.log("Logged in");
                    window.location.assign("/list");
                } else
                    console.log("Wrong Password");
        }
        if (!found)
            console.log("Wrong user");
    }
    register = () => {
        var newUser = {};
        newUser["fullname"] = this.state.fullname;
        newUser["email"] = this.state.email;
        newUser["username"] = this.state.user;
        newUser["password"] = this.state.password;
        console.log("Register", newUser);
        Users.push(newUser);
    }
    displayRegister = (login) => {
        this.setState(state => ({ displayRegister: !state.displayRegister }));
        this.setState(state => ({ displayRegisterHidden: !state.displayRegisterHidden }));
        setTimeout(() => {
            this.cleanFields();
            this.setState(state => ({ displayRegisterHidden: !state.displayRegisterHidden }));
            if (login)
                this.displayLogin(false);
        }, 400);
    }
    displayLogin = (register) => {
        this.setState(state => ({ displayLogin: !state.displayLogin }));
        this.setState(state => ({ displayLoginHidden: !state.displayLoginHidden }));
        setTimeout(() => {
            this.cleanFields();
            this.setState(state => ({ displayLoginHidden: !state.displayLoginHidden }));
            if (register)
                this.displayRegister(false);
        }, 400);
    }
    cleanFields = () => {
        this.setState({ fullname: "" });
        this.setState({ email: "" });
        this.setState({ user: "" });
        this.setState({ password: "" });
    }
    handleChangeName(event) {
        this.setState({ fullname: event.target.value });
    }
    handleChangeMail(event) {
        this.setState({ email: event.target.value });
    }
    handleChangeUser(event) {
        this.setState({ user: event.target.value });
    }
    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }
    render() {
        const { classes } = this.props;
        const { displayLogin, displayLoginHidden, displayRegister, displayRegisterHidden,
            remarkEmail, remarkName, remarkUser, remarkPassword } = this.state;

        return (
            <div>
                <div className={"animation" + (displayLogin ? (displayLoginHidden ? " loginHidden" : " loginDisplay") : (displayLoginHidden ? " loginHidden" : " loginDisplayNone"))}>
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
                        <div style={classes.remarkedContainer}>
                            <div style={classes.textContainer}>
                                <span style={classes.inputText}>Username or email address</span>
                            </div>
                            <div style={classes.inputContainer}>
                                <input
                                    style={!remarkUser ? classes.input : classes.inputRemarked}
                                    type="text"
                                    value={this.state.user}
                                    placeholder={"Put here your username"}
                                    onChange={this.handleChangeUser.bind(this)}
                                />
                            </div>
                            <div style={classes.textContainer}>
                                <span style={classes.inputText}>Password</span>
                            </div>
                            <div style={classes.inputContainer}>
                                <input
                                    style={!remarkPassword ? classes.input : classes.inputRemarked}
                                    type="text"
                                    value={this.state.password}
                                    placeholder={"Put here your password"}
                                    onChange={this.handleChangePassword.bind(this)}
                                />
                            </div>
                            <SendButton classes={classes.button} action={this.submit.bind(this)} enabled={true}>
                                Log In
                        </SendButton>
                        </div>
                        <div style={classes.remarkedContNewAcc}>
                        <span style={classes.newAccount}>New to Pizza? <div style={classes.newAccountLink} onClick={this.displayLogin.bind(this, true)}>Create an account</div></span>
                        <span style={classes.newAccount}><div style={classes.newAccountLink} onClick={this.displayLogin.bind(this, true)}>Continue as a Guest</div></span>
                        </div>
                    </div>
                </div>
                <div className={"animation" + (displayRegister ? (displayRegisterHidden ? " registerHidden" : " registerDisplay") : (displayRegisterHidden ? " registerHidden" : " registerDisplayNone"))}>
                    <div style={classes.containerRegister}>
                        <div style={classes.logoContainer}>
                            <img
                                style={classes.logoImgRegister}
                                src={require(`../../images/Cismo.png`)}
                                alt='Cismo'
                            />
                        </div>
                        <div style={classes.titleContainer}>
                            <span style={classes.title}>Register to Pizza</span>
                        </div>
                        <div style={classes.remarkedContainer}>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>Full Name</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkName ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.fullname}
                                        placeholder={"Jhon Doe"}
                                        onChange={this.handleChangeName.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>Email</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.email}
                                        placeholder={"example@cismosolutions.com"}
                                        onChange={this.handleChangeMail.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>Username</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.user}
                                        placeholder={"user1234"}
                                        onChange={this.handleChangeUser.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>Password</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.password}
                                        placeholder={"123456789"}
                                        onChange={this.handleChangePassword.bind(this)}
                                    />
                                </div>
                            </div>
                            <SendButton classes={classes.buttonRegister} action={this.register.bind(this)} enabled={true}>
                                Register
                            </SendButton>
                        </div>
                        <div style={classes.remarkedContNewAcc}>
                            <span style={classes.newAccount}>Already have an account to Pizza? <div style={classes.newAccountLink} onClick={this.displayRegister.bind(this, true)}>Sign In</div></span>
                        </div>
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

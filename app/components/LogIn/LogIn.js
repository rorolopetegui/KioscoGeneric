import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SendButton from '../Buttons/SendButton';
import './media-animation.css';
import Users from '../../content/Users';
import {
    LoginTitle, LoginUserLabel, LoginUserTxtHelp, LoginPasswordLabel,
    LoginPasswordTxtHelp, LoginButtonIn, LoginSignInNewText,
    LoginSignInCreateAccountText, LoginSignInGuest,
    RegisterTitle, RegisterNameLabel, RegisterNameTxtHelp,
    RegisterMailLabel, RegisterMailTxtHelp, RegisterUserLabel,
    RegisterUserTxtHelp, RegisterPasswordLabel, RegisterPasswordTxtHelp,
    RegisterButtonRegister, RegisterLogInText, RegisterLogInButton
} from '../../texts/login';

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
        isError: false,
        isMessage: false,
        message: "",
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
                    this.setState(state => ({ isMessage: true, isError: false, message: "Logged in!" }));
                    setTimeout(() => {
                        this.setState(state => ({ isMessage: false, message: "" }));
                        window.location.assign("/list");
                    }, 1000);

                } else
                    this.setState(state => ({ isMessage: true, isError: true, message: "Wrong password" }));
        }
        if (!found)
            this.setState(state => ({ isMessage: true, isError: true, message: "Wrong username" }));
    }
    register = () => {
        var newUser = {};
        newUser["fullname"] = this.state.fullname;
        newUser["email"] = this.state.email;
        newUser["username"] = this.state.user;
        newUser["password"] = this.state.password;
        console.log("Register", newUser);
        Users.push(newUser);
        this.setState(state => ({ isMessage: true, isError: false, message: "User register with success!" }));
        setTimeout(() => {
            this.setState(state => ({ isMessage: false, message: "" }));
            this.displayLogin(true);
        }, 1000);
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
    continueAsGuest = () => {
        window.location.assign("/list");
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
            remarkEmail, remarkName, remarkUser, remarkPassword, isError, isMessage, message } = this.state;

        return (
            <div>
                <div className={"animation" + (displayLogin ? (displayLoginHidden ? " loginHidden" : " loginDisplay") : (displayLoginHidden ? " loginHidden" : " loginDisplayNone"))}>
                    <div style={classes.container}>
                        <div style={classes.logoContainer}>
                            <img
                                style={classes.logoImg}
                                src={require(`../../images/Logo.png`)}
                                alt='Cismo'
                            />
                        </div>

                        <div style={classes.titleContainer}>
                            <span style={classes.title}>{LoginTitle}</span>
                        </div>
                        <div style={isError ? classes.errorMessage : classes.successMessage} className={isMessage ? "" : "errorHide"}>{message}</div>
                        <div style={classes.remarkedContainer}>
                            <div style={classes.textContainer}>
                                <span style={classes.inputText}>{LoginUserLabel}</span>
                            </div>
                            <div style={classes.inputContainer}>
                                <input
                                    style={!remarkUser ? classes.input : classes.inputRemarked}
                                    type="text"
                                    value={this.state.user}
                                    placeholder={LoginUserTxtHelp}
                                    onChange={this.handleChangeUser.bind(this)}
                                />
                            </div>
                            <div style={classes.textContainer}>
                                <span style={classes.inputText}>{LoginPasswordLabel}</span>
                            </div>
                            <div style={classes.inputContainer}>
                                <input
                                    style={!remarkPassword ? classes.input : classes.inputRemarked}
                                    type="password"
                                    value={this.state.password}
                                    placeholder={LoginPasswordTxtHelp}
                                    onChange={this.handleChangePassword.bind(this)}
                                />
                            </div>
                            <SendButton classes={classes.button} action={this.submit.bind(this)} enabled={true}>
                                {LoginButtonIn}
                            </SendButton>
                        </div>
                        <div style={classes.remarkedContNewAcc}>
                            <span style={classes.newAccount}>{LoginSignInNewText} <div style={classes.newAccountLink} onClick={this.displayLogin.bind(this, true)}>{LoginSignInCreateAccountText}</div></span>
                            <span style={classes.newAccount}><div style={classes.newAccountLink} onClick={this.continueAsGuest.bind(this)}>{LoginSignInGuest}</div></span>
                        </div>
                    </div>
                </div>
                <div className={"animation" + (displayRegister ? (displayRegisterHidden ? " registerHidden" : " registerDisplay") : (displayRegisterHidden ? " registerHidden" : " registerDisplayNone"))}>
                    <div style={classes.containerRegister}>
                        <div style={classes.logoContainer}>
                            <img
                                style={classes.logoImgRegister}
                                src={require(`../../images/Logo.png`)}
                                alt='Cismo'
                            />
                        </div>
                        <div style={classes.titleContainer}>
                            <span style={classes.title}>{RegisterTitle}</span>
                        </div>
                        <div style={isError ? classes.errorMessage : classes.successMessage} className={isMessage ? "" : "errorHide"}>{message}</div>
                        <div style={classes.remarkedContainer}>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>{RegisterNameLabel}</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkName ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.fullname}
                                        placeholder={RegisterNameTxtHelp}
                                        onChange={this.handleChangeName.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>{RegisterMailLabel}</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.email}
                                        placeholder={RegisterMailTxtHelp}
                                        onChange={this.handleChangeMail.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>{RegisterUserLabel}</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="text"
                                        value={this.state.user}
                                        placeholder={RegisterUserTxtHelp}
                                        onChange={this.handleChangeUser.bind(this)}
                                    />
                                </div>
                            </div>
                            <div style={classes.registerData}>
                                <div style={classes.textContainerRegister}>
                                    <span style={classes.inputText}>{RegisterPasswordLabel}</span>
                                </div>
                                <div style={classes.inputContainer}>
                                    <input
                                        style={!remarkEmail ? classes.inputRegister : classes.inputRemarkedRegister}
                                        type="password"
                                        value={this.state.password}
                                        placeholder={RegisterPasswordTxtHelp}
                                        onChange={this.handleChangePassword.bind(this)}
                                    />
                                </div>
                            </div>
                            <SendButton classes={classes.buttonRegister} action={this.register.bind(this)} enabled={true}>
                                {RegisterButtonRegister}
                            </SendButton>
                        </div>
                        <div style={classes.remarkedContNewAcc}>
                            <span style={classes.newAccount}>{RegisterLogInText} <div style={classes.newAccountLink} onClick={this.displayRegister.bind(this, true)}>{RegisterLogInButton}</div></span>
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

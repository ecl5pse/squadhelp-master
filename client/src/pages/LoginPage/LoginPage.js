import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {clearErrorSignUpAndLogin} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';

const LoginPage = (props) => {
    const changeRoute = () => {
        props.history.replace('/');
    };
    return (
        <div className={styles.mainContainer}>
            <div className={styles.loginContainer}>
                <div className={styles.headerSignUpPage}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo"/>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/registration' style={{textDecoration: 'none'}}><span>Signup</span></Link>
                    </div>
                </div>
                <div className={styles.loginFormContainer}>
                    <h2>LOGIN TO YOUR ACCOUNT</h2>
                    <LoginForm />
                </div>
            </div>
        </div>
    )

};


const mapDispatchToProps = (dispatch) => {
    return {
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
};

export default connect(null, mapDispatchToProps)(LoginPage);
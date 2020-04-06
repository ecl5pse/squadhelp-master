import React from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';
import styles from './LoginPage.module.sass';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {
    authActionLogin, clearAuth,
    clearErrorSignUpAndLogin,
} from '../../actions/actionCreator';
import CONSTANTS from '../../constants';
import Error     from '../../components/Error/Error';

const LoginPage = ({authClear ,loginUser,error,...restProps}) => {

        const  handleSubmit = values =>{
            loginUser(values)
        }

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
                    <div className={styles.loginFormWrapper}>
                        {error && <Error data={error.data} status={error.status}
                                         clearError={authClear}/>}
                      <LoginForm onSubmit = {handleSubmit}/>
                    </div>
                </div>
            </div>
        </div>
    )

};

const mapStateToProps = state => state.author;


const mapDispatchToProps = (dispatch) => {
        return {
            clearError: () => dispatch(clearErrorSignUpAndLogin()),
            authClear: () => dispatch(clearAuth()),
            loginUser: values =>dispatch(authActionLogin(values))
        }

};

export default connect(null, mapDispatchToProps)(LoginPage);
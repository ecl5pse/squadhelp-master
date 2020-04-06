import React                      from 'react';
import RegistrationForm           from '../../components/RegistrationForm/RegistrationForm';
import styles                     from './RegistrationPage.module.sass';
import {Link}                     from 'react-router-dom';
import {connect}                  from 'react-redux';
import {
    authActionRegister, clearAuth,
    clearErrorSignUpAndLogin,
} from '../../actions/actionCreator';
import CONSTANTS                  from '../../constants';
import Article                    from '../../components/Article ';
import Error                      from '../../components/Error/Error';

const RegistrationPage = ({register , authClear ,clearError,error, ...restProps}) => {

  const  handleSubmit = data =>{
    register(data)
  }
    return (
        <div className={styles.signUpPage}>
            <div className={styles.signUpContainer}>
                <div className={styles.headerSignUpPage}>
                    <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`}
                         alt="logo"/>
                    <div className={styles.linkLoginContainer}>
                        <Link to='/login'
                              style={{textDecoration: 'none'}}><span>Login</span></Link>
                    </div>
                </div>
                <div className={styles.titleFormContainer}>
                    <h2>CREATE AN ACCOUNT</h2>
                    <h4>We always keep your name and email address private.</h4>
                </div>
                <div className={styles.signUpFormContainer}>
                    {error && <Error data={error.data} status={error.status} clearError={authClear}/>}

                  <RegistrationForm onSubmit = {handleSubmit}/>
                </div>
            </div>
            <Article/>
        </div>
    )
};


const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    initialValues: {
      role: CONSTANTS.CUSTOMER,
    },
  };
};

const mapDispatchToProps = (dispatch) => (
    {
        register: data => dispatch(authActionRegister(data)),
        authClear: () => dispatch(clearAuth()),
        clearError: () => dispatch(clearErrorSignUpAndLogin())
    }
);


export default connect(null, mapDispatchToProps)(RegistrationPage);
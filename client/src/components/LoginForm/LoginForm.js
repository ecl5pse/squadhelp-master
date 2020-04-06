import React from 'react';
import {authActionLogin, clearAuth} from "../../actions/actionCreator";
import styles from './LoginForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';


const LoginForm = (props)=> {

  const {handleSubmit, submitting} = props;

  const formInputClasses = {
    container: styles.inputContainer,
    input: styles.input,
    warning: styles.fieldWarning,
    notValid: styles.notValid,
    valid: styles.valid
  }

  return (
      <form onSubmit={handleSubmit}>
        <Field
            name='email'
            classes = {formInputClasses}
            component={FormInput}
            type='text'
            label='Email Address'
        />
        <Field
            name='password'
            component={FormInput}
            classes={formInputClasses}
            type='password'
            label='password'
        />
        <button type='submit' disabled={submitting} className={styles.submitContainer}>
         LOGIN
        </button>
      </form>

  );

}


export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.LoginSchem),
})(LoginForm);